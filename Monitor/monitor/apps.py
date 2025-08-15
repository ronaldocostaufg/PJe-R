# Monitor/monitor/apps.py
import os
from django.apps import AppConfig
from django.conf import settings

class MonitorConfig(AppConfig):
    name = "Monitor.monitor"
    def ready(self):
        # Evita executar em cada reload do runserver e em DEBUG
        if os.environ.get("RUN_MAIN") != "true":
            return
        if getattr(settings, "DEBUG", True):
            return
        from .services.scheduler import agendar_tarefas
        agendar_tarefas()
