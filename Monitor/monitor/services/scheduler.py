from django.utils import timezone
from ..models import Pessoa
from .tcu_service import consultar_status_aposentadoria
import threading
import time
from datetime import datetime, timedelta
import pytz
import logging
from django.contrib.sessions.models import Session
from django.utils import timezone

# Configuração do logger
logger = logging.getLogger(__name__)

def atualizar_ultima_verificacao():
    """Atualiza a última verificação em todas as sessões ativas"""
    try:
        # Obtém todas as sessões ativas
        sessoes = Session.objects.filter(expire_date__gt=timezone.now())
        ultima_verificacao = timezone.now().astimezone(pytz.timezone('America/Sao_Paulo')).strftime("%d/%m/%Y %H:%M")
        
        # Atualiza cada sessão
        for sessao in sessoes:
            dados_sessao = sessao.get_decoded()
            dados_sessao['ultima_verificacao'] = ultima_verificacao
            sessao.session_data = Session.objects.encode(dados_sessao)
            sessao.save()
            
        logger.info(f"Última verificação atualizada para: {ultima_verificacao}")
    except Exception as e:
        logger.error(f"Erro ao atualizar última verificação: {str(e)}")

def agendar_tarefas():
    def tarefa_periodica():
        # Configuração do timezone para São Paulo
        TIMEZONE_SP = pytz.timezone('America/Sao_Paulo')
        logger.info("Iniciando tarefa periódica de verificação")
        
        while True:
            try:
                # Obtém o horário atual em São Paulo
                agora = timezone.now().astimezone(TIMEZONE_SP)
                logger.info(f"Horário atual em SP: {agora.strftime('%d/%m/%Y %H:%M:%S')}")
                
                # Verifica se é dia útil (segunda a sexta)
                if agora.weekday() < 5:  # 0-4 representa segunda a sexta
                    # Calcula o próximo horário de verificação
                    proxima_verificacao = agora.replace(hour=7, minute=0, second=0, microsecond=0)
                    logger.info(f"Próxima verificação agendada para: {proxima_verificacao.strftime('%d/%m/%Y %H:%M:%S')}")
                    
                    # Se já passou do horário, executa imediatamente
                    if agora >= proxima_verificacao:
                        logger.info("Horário atual já passou do agendado. Executando verificação imediatamente.")
                        # Executa a verificação imediatamente
                        pessoas = Pessoa.objects.filter(ativo=True)
                        total_pessoas = pessoas.count()
                        logger.info(f"Iniciando verificação de {total_pessoas} pessoas")
                        
                        for pessoa in pessoas:
                            try:
                                logger.info(f"Verificando pessoa: {pessoa.nome}")
                                consultar_status_aposentadoria(pessoa.id)
                            except Exception as e:
                                logger.error(f"Erro ao verificar pessoa {pessoa.nome}: {str(e)}")
                        
                        # Atualiza a última verificação
                        atualizar_ultima_verificacao()
                        # Agenda para o próximo dia
                        proxima_verificacao += timedelta(days=1)
                        logger.info(f"Próxima verificação reagendada para: {proxima_verificacao.strftime('%d/%m/%Y %H:%M:%S')}")
                    
                    # Calcula o tempo de espera até a próxima verificação
                    tempo_espera = (proxima_verificacao - agora).total_seconds()
                    logger.info(f"Tempo de espera até próxima verificação: {tempo_espera/60:.2f} minutos")
                    
                    # Aguarda até o próximo horário de verificação
                    time.sleep(tempo_espera)
                    
                    # Executa a verificação
                    logger.info("Iniciando verificação agendada")
                    pessoas = Pessoa.objects.filter(ativo=True)
                    total_pessoas = pessoas.count()
                    logger.info(f"Iniciando verificação de {total_pessoas} pessoas")
                    
                    for pessoa in pessoas:
                        try:
                            logger.info(f"Verificando pessoa: {pessoa.nome}")
                            consultar_status_aposentadoria(pessoa.id)
                        except Exception as e:
                            logger.error(f"Erro ao verificar pessoa {pessoa.nome}: {str(e)}")
                    
                    # Atualiza a última verificação
                    atualizar_ultima_verificacao()
                    logger.info("Verificação agendada concluída")
                else:
                    # Se for fim de semana, aguarda até segunda-feira
                    proxima_segunda = agora + timedelta(days=(7 - agora.weekday()))
                    proxima_segunda = proxima_segunda.replace(hour=7, minute=0, second=0, microsecond=0)
                    tempo_espera = (proxima_segunda - agora).total_seconds()
                    logger.info(f"Fim de semana detectado. Próxima verificação agendada para segunda-feira: {proxima_segunda.strftime('%d/%m/%Y %H:%M:%S')}")
                    time.sleep(tempo_espera)
                
            except Exception as e:
                logger.error(f"Erro na tarefa periódica: {str(e)}")
                time.sleep(60)  # Aguarda 1 minuto em caso de erro
    
    # Inicia a thread da tarefa periódica
    thread = threading.Thread(target=tarefa_periodica, daemon=True)
    thread.start()
    logger.info("Thread de agendamento iniciada")
    return thread  # Retorna a thread para controle externo 