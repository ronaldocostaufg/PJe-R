# requisicaofacil/consultaOficial/urls.py
from django.contrib import admin
from django.urls import path, include
from django.views.decorators.http import require_GET
from . import views

app_name = "consultaOficial"

urlpatterns = [
    #path("", views.index, name="index_consultaOficial"),
    
    # Consulta geral de materiais
    path("", require_GET(views.material_pesquisa2), name="material_pesquisa"),
    #path("materiais_pesquisa/", require_GET(views.material_pesquisa2), name="material_pesquisa"),

    # Consulta de validade
    path("materiais_validade/", require_GET(views.consultaValidadeMateriais), name="material_validade"),

    # Consulta de consumo medio
    path("materiais_consumo_medio/", require_GET(views.consultaConsumoMedioMateriais), name="material_consumo_medio"),
    path("materiais_consumo_medio/almoxarifado/", require_GET(views.consultaConsumoMedioMateriais), name="material_consumo_medio"),
]
