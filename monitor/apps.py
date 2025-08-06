from django.apps import AppConfig


class MonitorConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "monitor"

    def ready(self):
        # Importa e inicia o scheduler
        from .services.scheduler import agendar_tarefas
        agendar_tarefas()
