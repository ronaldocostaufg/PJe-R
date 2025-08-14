"""
Django settings for folhafacil project - Production Configuration
Configuração para todas as aplicações: folhafacil, Horas e Monitor
"""

from .settings import *
import os

# ============================================================================
# CONFIGURAÇÕES BÁSICAS
# ============================================================================

DEBUG = False
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', SECRET_KEY)

ALLOWED_HOSTS = [
    '127.0.0.1',
    'localhost',
    'seu-dominio.com',
    'www.seu-dominio.com',
    'IP_DO_SERVIDOR',  # Substitua pelo IP real do servidor
]

# ============================================================================
# CONFIGURAÇÕES DE SEGURANÇA
# ============================================================================

# Configurações de segurança para produção
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# Cookies seguros (habilitar apenas se usar HTTPS)
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# ============================================================================
# CONFIGURAÇÕES DE ARQUIVOS ESTÁTICOS E MEDIA
# ============================================================================

# Diretório base do projeto
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Arquivos estáticos
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'

# Arquivos de mídia
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

# Diretórios adicionais para arquivos estáticos
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'Monitor', 'monitor', 'static'),
    os.path.join(BASE_DIR, 'Horas', 'static'),
]

# ============================================================================
# CONFIGURAÇÕES DE BANCO DE DADOS
# ============================================================================

# Para produção, recomenda-se usar PostgreSQL ou MySQL
# Exemplo com PostgreSQL:
"""
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('DB_NAME', 'folhafacil'),
        'USER': os.environ.get('DB_USER', 'folhafacil_user'),
        'PASSWORD': os.environ.get('DB_PASSWORD', ''),
        'HOST': os.environ.get('DB_HOST', 'localhost'),
        'PORT': os.environ.get('DB_PORT', '5432'),
    }
}
"""

# Para desenvolvimento inicial, pode usar SQLite
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# ============================================================================
# CONFIGURAÇÕES DE LOGGING
# ============================================================================

# Criar diretório de logs se não existir
LOG_DIR = os.path.join(BASE_DIR, 'logs')
os.makedirs(LOG_DIR, exist_ok=True)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'file': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            'filename': os.path.join(LOG_DIR, 'folhafacil.log'),
            'formatter': 'verbose',
        },
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
        'error_file': {
            'level': 'ERROR',
            'class': 'logging.FileHandler',
            'filename': os.path.join(LOG_DIR, 'folhafacil_error.log'),
            'formatter': 'verbose',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file', 'console'],
            'level': 'INFO',
            'propagate': True,
        },
        'django.request': {
            'handlers': ['error_file'],
            'level': 'ERROR',
            'propagate': False,
        },
        'monitor': {
            'handlers': ['file', 'console'],
            'level': 'INFO',
            'propagate': True,
        },
        'processador': {
            'handlers': ['file', 'console'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}

# ============================================================================
# CONFIGURAÇÕES DE E-MAIL
# ============================================================================

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ.get('EMAIL_HOST', 'smtp.gmail.com')
EMAIL_PORT = int(os.environ.get('EMAIL_PORT', '587'))
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER', '')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', '')
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER or 'no-reply@seu-dominio.com'

# ============================================================================
# CONFIGURAÇÕES DE CACHE
# ============================================================================

# Para produção, recomenda-se usar Redis ou Memcached
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': 'unique-snowflake',
    }
}

# ============================================================================
# CONFIGURAÇÕES DE SESSÃO
# ============================================================================

SESSION_COOKIE_AGE = 3600  # 1 hora
SESSION_EXPIRE_AT_BROWSER_CLOSE = True
SESSION_SAVE_EVERY_REQUEST = True

# ============================================================================
# CONFIGURAÇÕES ESPECÍFICAS DAS APLICAÇÕES
# ============================================================================

# Monitor - URLs de administração
ADMIN_EMAILS = os.environ.get('ADMIN_EMAILS', '').split(',')
GMAIL_ADMIN_EMAILS = os.environ.get('GMAIL_ADMIN_EMAILS', '').split(',')

# URL base do sistema para links nos e-mails
BASE_URL = os.environ.get('BASE_URL', 'https://seu-dominio.com')

# ============================================================================
# CONFIGURAÇÕES DE PERFORMANCE
# ============================================================================

# Desabilitar debug toolbar em produção
DEBUG_TOOLBAR_CONFIG = {
    'SHOW_TOOLBAR_CALLBACK': lambda request: False,
}

# Configurações de segurança adicional
SECURE_REFERRER_POLICY = 'strict-origin-when-cross-origin'
SECURE_CROSS_ORIGIN_OPENER_POLICY = 'same-origin'

# ============================================================================
# CONFIGURAÇÕES DE ARQUIVOS
# ============================================================================

# Tamanho máximo de upload (10MB)
FILE_UPLOAD_MAX_MEMORY_SIZE = 10 * 1024 * 1024
DATA_UPLOAD_MAX_MEMORY_SIZE = 10 * 1024 * 1024

# ============================================================================
# CONFIGURAÇÕES DE TIMEZONE
# ============================================================================

USE_TZ = True
TIME_ZONE = 'America/Sao_Paulo'
LANGUAGE_CODE = 'pt-br'
