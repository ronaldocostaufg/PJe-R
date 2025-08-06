"""
Django settings for folhafacil project - Produção Linux
"""

import os
from pathlib import Path
from .settings import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Configuração de hosts permitidos para produção
ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    '0.0.0.0',
    # Adicione aqui o domínio do seu servidor
    # 'seudominio.com',
    # 'www.seudominio.com',
]

# Configuração de segurança para produção
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'

# Configuração de arquivos estáticos para produção
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Configuração de logging para produção
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
            'filename': '/var/log/folhafacil/django.log',
            'formatter': 'verbose',
        },
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file', 'console'],
            'level': 'INFO',
            'propagate': True,
        },
        'monitor': {
            'handlers': ['file', 'console'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}

# Configuração de banco de dados para produção (PostgreSQL)
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

# Configuração de e-mail para produção
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ.get('EMAIL_HOST', 'smtp.trf1.jus.br')
EMAIL_PORT = int(os.environ.get('EMAIL_PORT', '25'))
EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS', 'False').lower() == 'true'
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER', 'your_email@trf1.jus.br')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', '')
DEFAULT_FROM_EMAIL = os.environ.get('DEFAULT_FROM_EMAIL', 'your_email@trf1.jus.br')

# Configurações de e-mail Gmail (para testes)
GMAIL_EMAIL_HOST = 'smtp.gmail.com'
GMAIL_EMAIL_PORT = 587
GMAIL_EMAIL_USE_TLS = True
GMAIL_EMAIL_HOST_USER = os.environ.get('GMAIL_EMAIL_HOST_USER', '????@gmail.com')
GMAIL_EMAIL_HOST_PASSWORD = os.environ.get('GMAIL_EMAIL_HOST_PASSWORD', '')

# Lista de e-mails dos administradores
ADMIN_EMAILS = [
    'jean.cabral@trf1.jus.br',
]

# Lista de e-mails para testes com Gmail
GMAIL_ADMIN_EMAILS = [
    '??????@gmail.com',
]

# URL base do sistema para links nos e-mails
BASE_URL = os.environ.get('BASE_URL', 'http://localhost:8000')

# Configuração de sessão para produção
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
CSRF_COOKIE_HTTPONLY = True

# Configuração de cache para produção
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': 'unique-snowflake',
    }
} 