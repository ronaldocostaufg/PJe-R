#!/usr/bin/env python
"""
WSGI config for folhafacil project - Production Configuration

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os
import sys

# Adicionar o diretório do projeto ao path
project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, project_dir)

# Configurar variáveis de ambiente
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'folhafacil.settings_production')

# Carregar variáveis de ambiente do arquivo .env se existir
env_file = os.path.join(project_dir, '.env')
if os.path.exists(env_file):
    with open(env_file) as f:
        for line in f:
            if line.strip() and not line.startswith('#'):
                key, value = line.strip().split('=', 1)
                os.environ[key] = value

# Importar Django e configurar
import django
django.setup()

# Importar aplicação WSGI
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
