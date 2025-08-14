"""
URL configuration for folhafacil project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView

urlpatterns = [
    # Redirecionamento da raiz para folhafacil/monitor
    path("", RedirectView.as_view(url="folhafacil/monitor/", permanent=True)),
    
    # Admin
    path("admin/", admin.site.urls),
    
    # Aplicações com prefixo folhafacil
    path("folhafacil/monitor/", include("Monitor.monitor.urls")),
    path("folhafacil/horas/", include("Horas.processador.urls")),
    
    # URLs antigas para compatibilidade (redirecionam para as novas)
    path("monitor/", RedirectView.as_view(url="folhafacil/monitor/", permanent=True)),
    path("horas/", RedirectView.as_view(url="folhafacil/horas/", permanent=True)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
