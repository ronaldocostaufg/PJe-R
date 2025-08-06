# Folha Fácial - Monitor TCU

Sistema de monitoramento de status de aposentadoria no TCU (Tribunal de Contas da União).

## Requisitos

- Python 3.10 ou superior
- pip (gerenciador de pacotes Python)
- Git (opcional, para clonar o repositório)

## Instalação

1. Clone o repositório (ou baixe os arquivos):
```bash
git clone https://github.com/seu-usuario/folha-facil.git
cd folha-facil
```

2. Crie um ambiente virtual Python (recomendado):
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Configure o banco de dados:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Crie um superusuário (opcional):
```bash
python manage.py createsuperuser
```

6. Execute o servidor de desenvolvimento:
```bash
python manage.py runserver
```

7. Acesse a aplicação:
- Abra seu navegador
- Acesse http://127.0.0.1:8000/monitor/

## Estrutura do Projeto

```
folhafacil/
├── monitor/              # Aplicação principal
│   ├── templates/        # Templates HTML
│   ├── static/          # Arquivos estáticos (CSS, JS, imagens)
│   ├── services/        # Serviços e lógica de negócio
│   └── models.py        # Modelos de dados
├── folhafacil/         # Configurações do projeto
└── manage.py            # Script de gerenciamento Django
```

## Funcionalidades

- Monitoramento de status de aposentadoria
- Cadastro de pessoas
- Consulta automática ao TCU
- Geração de relatórios
- Interface responsiva

## Tecnologias Utilizadas

- Django 4.2
- Bootstrap 5
- jQuery
- Font Awesome
- SQLite (banco de dados padrão)

## Desenvolvimento

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Crie um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Suporte

Para reportar problemas ou solicitar novas funcionalidades, por favor abra uma issue no GitHub. 