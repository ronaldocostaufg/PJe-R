#!/usr/bin/env python
"""
WSGI config for folhafacil project - Production Configuration
Configuração otimizada para Apache + mod_wsgi
"""

import os
import sys

# Adicionar o diretório do projeto ao path
PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, PROJECT_DIR)

# Configurar variáveis de ambiente
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'folhafacil.settings_production')

# Configurações de segurança para produção
os.environ['PYTHONPATH'] = PROJECT_DIR

# Importar Django
import django
from django.core.wsgi import get_wsgi_application

# Configurar Django
django.setup()

# Aplicação WSGI
application = get_wsgi_application()

# Configurações adicionais para produção
if os.environ.get('DJANGO_SETTINGS_MODULE') == 'folhafacil.settings_production':
    # Configurações de logging
    import logging
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',
        handlers=[
            logging.FileHandler(os.path.join(PROJECT_DIR, 'logs', 'wsgi.log')),
            logging.StreamHandler()
        ]
    )
    
    # Configurações de performance
    import gc
    gc.set_threshold(700, 10, 10)
    
    # Configurações de segurança
    os.environ['PYTHONHASHSEED'] = 'random'
