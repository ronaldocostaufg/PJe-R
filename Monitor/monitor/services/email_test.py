from django.core.mail import send_mail
from django.conf import settings

def testar_email_gmail():
    """
    Função para testar o envio de e-mail usando as configurações do Gmail
    """
    try:
        # Configurações temporárias para o teste
        settings.EMAIL_HOST = settings.GMAIL_EMAIL_HOST
        settings.EMAIL_PORT = settings.GMAIL_EMAIL_PORT
        settings.EMAIL_USE_TLS = settings.GMAIL_EMAIL_USE_TLS
        settings.EMAIL_HOST_USER = settings.GMAIL_EMAIL_HOST_USER
        settings.EMAIL_HOST_PASSWORD = settings.GMAIL_EMAIL_HOST_PASSWORD
        settings.DEFAULT_FROM_EMAIL = settings.GMAIL_EMAIL_HOST_USER

        # Envia o e-mail de teste
        send_mail(
            'Teste de E-mail - Sistema Folha Fácil',
            'Este é um e-mail de teste do sistema Folha Fácil usando Gmail.',
            settings.DEFAULT_FROM_EMAIL,
            settings.GMAIL_ADMIN_EMAILS,
            fail_silently=False,
        )
        return True, "E-mail enviado com sucesso!"
    except Exception as e:
        return False, f"Erro ao enviar e-mail: {str(e)}" 