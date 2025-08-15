from django.urls import path
from . import views

app_name = 'monitor'

urlpatterns = [
    path('', views.index, name='index'),
    path('pessoas', views.listar_pessoas, name='pessoas'),
    path('pessoa/<int:id>', views.detalhes_pessoa, name='detalhes_pessoa'),
    path('pessoa/cadastrar', views.cadastrar_pessoa, name='cadastrar_pessoa'),
    path('pessoa/<int:id>/editar', views.editar_pessoa, name='editar_pessoa'),
    path('pessoa/<int:id>/excluir', views.excluir_pessoa, name='excluir_pessoa'),
    path('relatorio', views.relatorio, name='relatorio'),
    path('api/verificar-atualizacoes', views.verificar_atualizacoes, name='verificar_atualizacoes'),
    path('api/pessoas', views.api_pessoas, name='api_pessoas'),
    path('api/historico/<str:cpf>', views.api_historico, name='api_historico'),
    path('api/limpar-alteracoes', views.limpar_alteracoes, name='limpar_alteracoes'),
]