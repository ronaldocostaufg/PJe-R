"""
ASGI config for horas project.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Horas.settings')

application = get_asgi_application() 