from django.urls import path
from . import views

app_name = 'processador'

urlpatterns = [
    path('', views.index, name='index'),
    path('upload/', views.upload, name='upload'),
    path('download/<str:filename>/', views.download, name='download'),
    path('limpar/', views.limpar, name='limpar'),
    path('processar_media/', views.processar_media, name='processar_media'),
]