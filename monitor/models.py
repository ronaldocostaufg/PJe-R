from django.db import models
from django.utils import timezone

class Pessoa(models.Model):
    matricula = models.CharField(max_length=20)
    nome = models.CharField(max_length=100)
    cpf = models.CharField(max_length=11, unique=True)
    status = models.CharField(max_length=100, null=True, blank=True)
    url_consulta = models.URLField(max_length=500, null=True, blank=True)
    ativo = models.BooleanField(default=True)
    data_cadastro = models.DateTimeField(default=timezone.now)
    data_atualizacao = models.DateTimeField(auto_now=True)
    status_atualizado_em = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nome

    def to_dict(self):
        return {
            'id': self.id,
            'matricula': self.matricula,
            'nome': self.nome,
            'cpf': self.cpf,
            'status': self.status,
            'ativo': self.ativo
        }

class HistoricoConsulta(models.Model):
    pessoa = models.ForeignKey(Pessoa, on_delete=models.CASCADE, related_name='historico')
    data_consulta = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=100)
    detalhes = models.TextField(null=True, blank=True)
    url_consulta = models.URLField(max_length=500, null=True, blank=True)

    def __str__(self):
        return f"Consulta de {self.pessoa.nome} em {self.data_consulta}"

    def to_dict(self):
        return {
            'id': self.id,
            'data_consulta': self.data_consulta.isoformat(),
            'status': self.status,
            'detalhes': self.detalhes
        }
