"""
WSGI config for folhafacil project - Produção Linux
"""

import os
import sys

# Adiciona o diretório do projeto ao path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Configura as variáveis de ambiente para produção
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'folhafacil.settings_production')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application() 