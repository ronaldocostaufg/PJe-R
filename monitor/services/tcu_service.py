import requests
from django.utils import timezone
import pytz
import json
from ..models import Pessoa, HistoricoConsulta
from django.core.mail import send_mail
from django.conf import settings
import logging

# Configuração do logger
logger = logging.getLogger(__name__)

# Configuração do timezone para São Paulo
TIMEZONE_SP = pytz.timezone('America/Sao_Paulo')

def enviar_notificacao_email(pessoa, status_anterior, status_novo):
    """Envia e-mail de notificação quando há alteração no status"""
    try:
        assunto = f'Alteração no Status do TCU - {pessoa.nome}'
        mensagem = f"""
        Olá,

        Houve uma alteração no status do TCU para {pessoa.nome}:

        Status Anterior: {status_anterior}
        Novo Status: {status_novo}
        Data da Alteração: {timezone.now().astimezone(TIMEZONE_SP).strftime("%d/%m/%Y %H:%M")}

        Para mais detalhes, acesse o sistema:
        {settings.BASE_URL}/monitor/pessoas/{pessoa.id}/

        Atenciosamente,
        Sistema de Monitoramento TCU
        """
        
        logger.info(f"Tentando enviar e-mail para alteração de status de {pessoa.nome}")
        logger.info(f"De: {settings.DEFAULT_FROM_EMAIL}")
        logger.info(f"Para: {settings.ADMIN_EMAILS}")
        
        # Envia o e-mail para todos os administradores configurados
        send_mail(
            assunto,
            mensagem,
            settings.DEFAULT_FROM_EMAIL,
            settings.ADMIN_EMAILS,
            fail_silently=False,
        )
        logger.info(f"E-mail enviado com sucesso para alteração de status de {pessoa.nome}")
        return True
    except Exception as e:
        logger.error(f"Erro ao enviar e-mail para {pessoa.nome}: {str(e)}")
        return False

def consultar_status_aposentadoria(pessoa_id):
    try:
        pessoa = Pessoa.objects.get(id=pessoa_id)
    except Pessoa.DoesNotExist:
        return False

    # Armazena o status anterior para comparação
    status_anterior = pessoa.status

    # Remove pontuação do CPF
    cpf_limpo = pessoa.cpf.replace('.', '').replace('-', '')
    
    # URL formatada corretamente para a interface web do TCU
    web_url = (
        f"https://pesquisa.apps.tcu.gov.br/resultado/ato-pessoal/*/"
        f"CPF%253A%2522{cpf_limpo}%2522"
    )

    try:
        # Consulta à API para obter os dados
        api_url = "https://pesquisa.apps.tcu.gov.br/rest/publico/base/ato-pessoal/documentosResumidos"
        params = {
            "termo": "*",
            "filtro": f"CPF:{cpf_limpo}",
            "ordenacao": "DTVIGENCIAATO desc",
            "quantidade": "10",
            "inicio": "0"
        }

        # Configuração da sessão com retry e timeout
        session = requests.Session()
        session.mount('https://', requests.adapters.HTTPAdapter(
            max_retries=3,
            pool_connections=10,
            pool_maxsize=10
        ))

        response = session.get(api_url, params=params, timeout=30)
        response.raise_for_status()
        data = response.json()
        
        # Debug: Imprime a resposta completa da API
        print("\n=== Resposta da API TCU ===")
        print(f"URL da requisição: {response.url}")
        print(f"Status Code: {response.status_code}")
        print("Resposta completa:")
        print(json.dumps(data, indent=2, ensure_ascii=False))
        print("========================\n")
        
        resultados = data.get('documentos', [])
        status_atual = "Status não disponível"
        detalhes = []
        
        for doc in resultados:
            tipo_ato = doc.get('TIPO', '').lower()
            if 'aposentadoria' in tipo_ato:
                situacao = doc.get('SITUACAOATO', '')
                data_vigencia = doc.get('DTVIGENCIAATO', '')
                unidade = doc.get('UNIDRESPONSAVELATO', '')
                data_encaminhamento = doc.get('DTENVIOAOTCU', '')
                
                # Debug: Imprime detalhes do documento encontrado
                print("\n=== Documento Encontrado ===")
                print(f"Tipo Ato: {tipo_ato}")
                print(f"Situação: {situacao}")
                print(f"Data Vigência: {data_vigencia}")
                print(f"Unidade: {unidade}")
                print(f"Data Encaminhamento: {data_encaminhamento}")
                print("========================\n")
                
                detalhes.append(
                    f"Data Vigência: {data_vigencia}; "
                    f"Tipo Ato: {tipo_ato}; "
                    f"Situação: {situacao}; "
                    f"Unidade: {unidade}; "
                    f"Data Encaminhamento: {data_encaminhamento}"
                )
                
                if situacao:
                    status_atual = situacao

        # Atualiza os dados da pessoa com timestamp em São Paulo
        pessoa.status = status_atual
        pessoa.url_consulta = web_url
        pessoa.status_atualizado_em = timezone.now().astimezone(TIMEZONE_SP)
        pessoa.save()
        
        # Registra no histórico com timestamp em São Paulo
        HistoricoConsulta.objects.create(
            pessoa=pessoa,
            status=status_atual,
            detalhes="\n".join(detalhes) if detalhes else "Nenhum detalhe disponível",
            url_consulta=web_url,
            data_consulta=timezone.now().astimezone(TIMEZONE_SP)
        )
        
        # Se houve alteração no status, envia notificação por e-mail
        if status_anterior != status_atual:
            logger.info(f"Alteração de status detectada para {pessoa.nome}")
            logger.info(f"Status anterior: {status_anterior}")
            logger.info(f"Novo status: {status_atual}")
            enviar_notificacao_email(pessoa, status_anterior, status_atual)
            return True  # Retorna True para indicar que houve alteração
        
        return False  # Retorna False se não houve alteração

    except requests.exceptions.RequestException as e:
        logger.error(f"Erro na requisição para {pessoa.nome}: {str(e)}")
        pessoa.url_consulta = web_url
        pessoa.status_atualizado_em = timezone.now().astimezone(TIMEZONE_SP)
        pessoa.save()
        
        HistoricoConsulta.objects.create(
            pessoa=pessoa,
            status="Erro na consulta",
            detalhes=f"Erro na requisição: {str(e)}",
            url_consulta=web_url,
            data_consulta=timezone.now().astimezone(TIMEZONE_SP)
        )
        return False
    except Exception as e:
        logger.error(f"Erro inesperado ao consultar TCU para {pessoa.nome}: {str(e)}")
        pessoa.url_consulta = web_url
        pessoa.status_atualizado_em = timezone.now().astimezone(TIMEZONE_SP)
        pessoa.save()
        
        HistoricoConsulta.objects.create(
            pessoa=pessoa,
            status="Erro na consulta",
            detalhes=f"Erro inesperado: {str(e)}",
            url_consulta=web_url,
            data_consulta=timezone.now().astimezone(TIMEZONE_SP)
        )
        return False

def consultar_todos():
    """Consulta o status de todas as pessoas ativas no sistema"""
    try:
        pessoas = Pessoa.objects.filter(ativo=True)
        for pessoa in pessoas:
            consultar_status_aposentadoria(pessoa.id)
        return True
    except Exception as e:
        print(f"Erro ao consultar todos: {str(e)}")
        return False 