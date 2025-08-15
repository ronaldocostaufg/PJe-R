import os
import pandas as pd
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib import messages
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .processSEI import processar_pdf_sei, processar_pdf_sei_caminho, limpar_arquivo_temporario
from .processCatraca import processar_csv_catraca


def index(request):
    """
    Página principal com dashboard de horas extras
    """
    # Verificar se existem arquivos processados
    media_dir = settings.MEDIA_ROOT
    arquivos_processados = []
    
    if os.path.exists(media_dir):
        for filename in os.listdir(media_dir):
            if filename.startswith('Total_Horas_') and filename.endswith(('.csv', '.xlsx')):
                arquivos_processados.append(filename)
    
    # Carregar dados do dashboard se existirem
    dashboard_data = []
    
    # Verificar arquivos de catraca e SEI com novo padrão de nome
    for filename in os.listdir(media_dir) if os.path.exists(media_dir) else []:
        if filename.startswith('Total_Horas_') and filename.endswith('.csv'):
            try:
                df = pd.read_csv(os.path.join(media_dir, filename))
                for _, row in df.iterrows():
                    # Converter Total_Horas_Trabalhadas (HH:MM:SS) para horas decimais
                    horas_str = row['Total_Horas_Trabalhadas']
                    if ':' in horas_str:
                        partes = horas_str.split(':')
                        if len(partes) >= 2:
                            horas = int(partes[0])
                            minutos = int(partes[1])
                            horas_decimais = horas + (minutos / 60)
                        else:
                            horas_decimais = 0
                    else:
                        horas_decimais = 0
                    
                    dashboard_data.append({
                        'cpf': row['CPF'],
                        'data': row['Data_Dia'],
                        'horas': row['Total_Horas_Trabalhadas'],
                        'horas_decimais': horas_decimais
                    })
            except Exception as e:
                # print(f"Erro ao carregar dados do dashboard ({filename}): {e}")
                pass
    
    context = {
        'arquivos_processados': arquivos_processados,
        'dashboard_data': dashboard_data,
        'total_funcionarios': len(dashboard_data)
    }
    
    return render(request, 'processador/index.html', context)


@csrf_exempt
@require_http_methods(["POST"])
def upload(request):
    """
    Upload e processamento de arquivos
    """
    if request.method == 'POST':
        try:
            # Verificar se há arquivo enviado
            if 'arquivo' not in request.FILES:
                return JsonResponse({'error': 'Nenhum arquivo enviado'}, status=400)
            
            arquivo = request.FILES['arquivo']
            tipo_processamento = request.POST.get('tipo_processamento', 'catraca')
            
            # Validar tipo de arquivo
            if arquivo.name.endswith('.pdf') and tipo_processamento == 'sei':
                # Processar PDF do SEI
                resultado = processar_pdf_sei(arquivo)
            elif arquivo.name.endswith('.csv') and tipo_processamento == 'catraca':
                # Processar CSV da catraca
                resultado = processar_csv_catraca(arquivo)
            else:
                return JsonResponse({
                    'error': 'Tipo de arquivo não suportado ou tipo de processamento incorreto'
                }, status=400)
            
            if resultado['success']:
                return JsonResponse({
                    'success': True,
                    'message': resultado['message'],
                    'arquivos_gerados': resultado['arquivos_gerados']
                })
            else:
                return JsonResponse({
                    'error': resultado['message']
                }, status=400)
                
        except Exception as e:
            return JsonResponse({
                'error': f'Erro no processamento: {str(e)}'
            }, status=500)
    
    return JsonResponse({'error': 'Método não permitido'}, status=405)


def download(request, filename):
    """
    Download de arquivos processados
    """
    file_path = os.path.join(settings.MEDIA_ROOT, filename)
    
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type='application/octet-stream')
            response['Content-Disposition'] = f'attachment; filename="{filename}"'
            return response
    else:
        messages.error(request, 'Arquivo não encontrado')
        return redirect('processador:index')


def limpar(request):
    """
    Limpeza de dados processados
    """
    try:
        media_dir = settings.MEDIA_ROOT
        
        if os.path.exists(media_dir):
            arquivos_removidos = 0
            arquivos_com_erro = []
            
            for filename in os.listdir(media_dir):
                if filename.startswith('Total_Horas_') and filename.endswith(('.csv', '.xlsx', '.pdf')):
                    file_path = os.path.join(media_dir, filename)
                    if limpar_arquivo_temporario(file_path):
                        arquivos_removidos += 1
                    else:
                        arquivos_com_erro.append(filename)
            
            if arquivos_com_erro:
                messages.warning(request, f'Arquivos removidos: {arquivos_removidos}. Arquivos com erro: {", ".join(arquivos_com_erro)}')
            else:
                messages.success(request, f'Dados processados limpos com sucesso! {arquivos_removidos} arquivos removidos.')
        else:
            messages.info(request, 'Nenhum arquivo encontrado para limpeza.')
            
    except Exception as e:
        messages.error(request, f'Erro ao limpar dados: {str(e)}')
    
    return redirect('processador:index') 


@require_http_methods(["POST", "GET"])
def processar_media(request):
    """
    Processa todos os PDFs presentes em MEDIA_ROOT gerando os CSV/XLSX de totais.
    Útil para processar arquivos adicionados manualmente na pasta media.
    """
    try:
        media_dir = settings.MEDIA_ROOT
        if not os.path.exists(media_dir):
            return JsonResponse({'error': 'Pasta media não existe'}, status=400)

        resultados = []
        for filename in os.listdir(media_dir):
            if filename.lower().endswith('.pdf'):
                caminho = os.path.join(media_dir, filename)
                resultado = processar_pdf_sei_caminho(caminho)
                resultado['arquivo'] = filename
                resultados.append(resultado)

        return JsonResponse({'success': True, 'resultados': resultados})
    except Exception as e:
        return JsonResponse({'error': f'Erro ao processar pasta media: {str(e)}'}, status=500)