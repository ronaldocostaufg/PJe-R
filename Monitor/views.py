from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse, HttpResponse
from django.utils import timezone
from django.db import IntegrityError
from django.contrib import messages
from .models import Pessoa, HistoricoConsulta
from .services.tcu_service import consultar_status_aposentadoria, TIMEZONE_SP
from .services.scheduler import agendar_tarefas
from .forms import PessoaForm
from datetime import datetime
import csv
import os
import io

def index(request):
    total_pessoas = Pessoa.objects.count()
    pessoas_ativas = Pessoa.objects.filter(ativo=True).count()
    pessoas_inativas = Pessoa.objects.filter(ativo=False).count()
    
    # Obtém a última verificação da sessão ou usa o momento atual formatado em SP
    ultima_verificacao = request.session.get('ultima_verificacao', 
                                           timezone.now().astimezone(TIMEZONE_SP).strftime("%d/%m/%Y %H:%M"))
    
    return render(request, 'monitor/index.html', {
        'total_pessoas': total_pessoas,
        'pessoas_ativas': pessoas_ativas,
        'pessoas_inativas': pessoas_inativas,
        'ultima_verificacao': ultima_verificacao
    })

def verificar_atualizacoes(request):
    from .services.tcu_service import consultar_status_aposentadoria
    
    # Consulta todas as pessoas ativas
    pessoas = Pessoa.objects.filter(ativo=True)
    atualizacoes = 0
    alteracoes_status = []
    
    for pessoa in pessoas:
        status_anterior = pessoa.status
        if consultar_status_aposentadoria(pessoa.id):
            if status_anterior != pessoa.status:
                atualizacoes += 1
                alteracoes_status.append({
                    'nome': pessoa.nome,
                    'status_anterior': status_anterior or 'Não consultado',
                    'status_novo': pessoa.status or 'Não consultado'
                })
                # Força o salvamento da sessão
                request.session.modified = True
    
    # Atualiza a última verificação em SP
    ultima_verificacao = timezone.now().astimezone(TIMEZONE_SP)
    # Armazena apenas a string formatada na sessão
    request.session['ultima_verificacao'] = ultima_verificacao.strftime("%d/%m/%Y %H:%M")
    
    # Armazena as alterações de status na sessão
    if alteracoes_status:
        request.session['alteracoes_status'] = alteracoes_status
        request.session.modified = True
    
    return JsonResponse({
        "atualizacoes": atualizacoes,
        "alteracoes_detectadas": atualizacoes > 0,
        "ultima_verificacao": ultima_verificacao.strftime("%d/%m/%Y %H:%M"),
        "alteracoes_status": alteracoes_status
    })

def listar_pessoas(request):
    pessoas = Pessoa.objects.all().order_by('nome')
    return render(request, 'monitor/pessoas.html', {'pessoas': pessoas})

def detalhes_pessoa(request, id):
    pessoa = get_object_or_404(Pessoa, id=id)
    historico = pessoa.historico.all().order_by('-data_consulta')
    return render(request, 'monitor/detalhes.html', {
        'pessoa': pessoa,
        'historico': historico
    })

def cadastrar_pessoa(request):
    if request.method == 'POST':
        nome = request.POST['nome']
        cpf = request.POST['cpf'].replace('.', '').replace('-', '')
        matricula = request.POST['matricula']
        ativo = 'ativo' in request.POST
        
        try:
            pessoa = Pessoa.objects.create(
                nome=nome,
                cpf=cpf,
                matricula=matricula,
                ativo=ativo
            )
            messages.success(request, 'Pessoa cadastrada com sucesso!')
            # Renderiza a página de cadastro com a mensagem de sucesso
            return render(request, 'monitor/cadastro.html', {
                'mensagem_sucesso': True,
                'nome': '',
                'cpf': '',
                'matricula': '',
                'ativo': True
            })
        except IntegrityError:
            messages.error(request, 'Este CPF já está cadastrado no sistema.')
            return render(request, 'monitor/cadastro.html', {
                'nome': nome,
                'cpf': request.POST['cpf'],  # Mantém o CPF formatado como foi digitado
                'matricula': matricula,
                'ativo': ativo
            })
    
    return render(request, 'monitor/cadastro.html')

def editar_pessoa(request, id):
    pessoa = get_object_or_404(Pessoa, id=id)
    
    if request.method == 'POST':
        pessoa.matricula = request.POST['matricula']
        pessoa.nome = request.POST['nome']
        pessoa.cpf = request.POST['cpf'].replace('.', '').replace('-', '')
        pessoa.ativo = 'ativo' in request.POST
        pessoa.save()
        
        return redirect('monitor:detalhes_pessoa', id=id)
    
    return render(request, 'monitor/editar.html', {'pessoa': pessoa})

def excluir_pessoa(request, id):
    pessoa = get_object_or_404(Pessoa, id=id)
    pessoa.delete()
    return redirect('monitor:pessoas')

def api_pessoas(request):
    pessoas = Pessoa.objects.all()
    total = pessoas.count()
    ativas = pessoas.filter(ativo=True).count()
    inativas = pessoas.filter(ativo=False).count()
    
    return JsonResponse({
        'total': total,
        'ativas': ativas,
        'inativas': inativas
    })

def api_historico(request, cpf):
    pessoa = get_object_or_404(Pessoa, cpf=cpf)
    historico = pessoa.historico.all()
    return JsonResponse([h.to_dict() for h in historico], safe=False)

def relatorio(request):
    pessoas = Pessoa.objects.all().order_by('nome')
    total_pessoas = pessoas.count()
    ativos = pessoas.filter(ativo=True).count()
    inativos = pessoas.filter(ativo=False).count()
    
    # Verifica se é uma requisição de exportação
    formato = request.GET.get('formato')
    if formato == 'csv':
        # Obtém as datas do filtro
        data_inicio = request.GET.get('data_inicio')
        data_fim = request.GET.get('data_fim')
        
        # Filtra as pessoas se as datas foram fornecidas
        if data_inicio and data_fim:
            try:
                # Converte as strings para datetime com timezone SP
                data_inicio = timezone.make_aware(datetime.strptime(data_inicio, '%Y-%m-%d'), timezone=TIMEZONE_SP)
                data_fim = timezone.make_aware(datetime.strptime(data_fim, '%Y-%m-%d'), timezone=TIMEZONE_SP)
                # Ajusta data_fim para incluir o dia inteiro
                data_fim = data_fim.replace(hour=23, minute=59, second=59)
                pessoas = pessoas.filter(data_cadastro__range=[data_inicio, data_fim])
            except ValueError:
                # Se houver erro no formato da data, ignora o filtro
                pass
        
        # Prepara os dados para exportação
        dados = []
        for pessoa in pessoas:
            dados.append({
                'Nome': pessoa.nome,
                'CPF': pessoa.cpf,
                'Matrícula': pessoa.matricula,
                'Status': 'Ativo' if pessoa.ativo else 'Inativo',
                'Situação': pessoa.status or 'Não consultado',
                'Última Atualização': pessoa.status_atualizado_em.astimezone(TIMEZONE_SP).strftime('%d/%m/%Y %H:%M') if pessoa.status_atualizado_em else 'Nunca'
            })
        
        # Se não houver dados, retorna uma mensagem
        if not dados:
            return render(request, 'monitor/relatorio.html', {
                'pessoas': pessoas,
                'total_pessoas': total_pessoas,
                'ativos': ativos,
                'inativos': inativos,
                'ultima_atualizacao': timezone.now().astimezone(TIMEZONE_SP).strftime('%d/%m/%Y %H:%M'),
                'erro': 'Não foram encontrados registros para o período selecionado.'
            })
        
        # Cria o arquivo CSV em memória
        output = io.StringIO()
        writer = csv.DictWriter(output, fieldnames=dados[0].keys())
        writer.writeheader()
        writer.writerows(dados)
        
        # Prepara o arquivo para download
        response = HttpResponse(output.getvalue(), content_type='text/csv; charset=utf-8-sig')
        response['Content-Disposition'] = f'attachment; filename="relatorio_tcu_{timezone.now().astimezone(TIMEZONE_SP).strftime("%Y%m%d_%H%M%S")}.csv"'
        return response
    
    return render(request, 'monitor/relatorio.html', {
        'pessoas': pessoas,
        'total_pessoas': total_pessoas,
        'ativos': ativos,
        'inativos': inativos,
        'ultima_atualizacao': timezone.now().astimezone(TIMEZONE_SP).strftime('%d/%m/%Y %H:%M')
    })

def limpar_alteracoes(request):
    """Limpa as alterações de status da sessão"""
    if 'alteracoes_status' in request.session:
        del request.session['alteracoes_status']
    return JsonResponse({'status': 'success'})
