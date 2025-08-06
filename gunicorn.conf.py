"""
Configuração do Gunicorn para produção
"""

import multiprocessing
import os

# Configurações básicas
bind = "0.0.0.0:8000"
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = "sync"
worker_connections = 1000
max_requests = 1000
max_requests_jitter = 50
timeout = 30
keepalive = 2

# Configurações de logging
accesslog = "/var/log/folhafacil/gunicorn_access.log"
errorlog = "/var/log/folhafacil/gunicorn_error.log"
loglevel = "info"
access_log_format = '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s"'

# Configurações de segurança
limit_request_line = 4094
limit_request_fields = 100
limit_request_field_size = 8190

# Configurações de processo
preload_app = True
daemon = False
pidfile = "/var/run/folhafacil/gunicorn.pid"
user = "www-data"
group = "www-data"

# Configurações de ambiente
raw_env = [
    "DJANGO_SETTINGS_MODULE=folhafacil.settings_production",
]

def when_ready(server):
    """Chamado quando o servidor está pronto"""
    server.log.info("Servidor Gunicorn iniciado e pronto para receber conexões")

def on_starting(server):
    """Chamado quando o servidor está iniciando"""
    server.log.info("Iniciando servidor Gunicorn...")

def on_exit(server):
    """Chamado quando o servidor está saindo"""
    server.log.info("Servidor Gunicorn finalizando...") 