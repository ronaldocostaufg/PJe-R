from django.contrib import admin
from .models import Pessoa, HistoricoConsulta

@admin.register(Pessoa)
class PessoaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'matricula', 'cpf', 'status', 'ativo', 'data_cadastro')
    list_filter = ('status', 'ativo')
    search_fields = ('nome', 'matricula', 'cpf')
    ordering = ('nome',)

@admin.register(HistoricoConsulta)
class HistoricoConsultaAdmin(admin.ModelAdmin):
    list_display = ('pessoa', 'data_consulta', 'status')
    list_filter = ('status', 'data_consulta')
    search_fields = ('pessoa__nome', 'pessoa__cpf')
    ordering = ('-data_consulta',)
