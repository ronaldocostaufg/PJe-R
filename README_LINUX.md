# Folha Facil - Deploy Linux

Este projeto foi configurado para rodar em servidor Linux com Django 3.2.25, PostgreSQL, Gunicorn e Nginx.

## 🚀 Deploy Rápido

### Opção 1: Deploy Automático (Recomendado)

```bash
# 1. Conectar ao servidor
ssh usuario@seu-servidor.com

# 2. Clonar o projeto
sudo mkdir -p /var/www
cd /var/www
sudo git clone https://github.com/seu-usuario/folhafacil.git
sudo chown -R $USER:$USER folhafacil
cd folhafacil

# 3. Executar deploy automático
chmod +x deploy.sh
sudo ./deploy.sh
```

### Opção 2: Deploy Manual

Siga as instruções detalhadas no arquivo `DEPLOY_LINUX.md`.

## 📋 Pré-requisitos

- Ubuntu 20.04 LTS ou superior
- Acesso root ou sudo
- Conectividade com internet
- Pelo menos 2GB de RAM
- 10GB de espaço em disco

## 🏗️ Arquitetura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     Cliente     │────│      Nginx      │────│    Gunicorn     │
│   (Browser)     │    │   (Porta 80)    │    │  (Porta 8000)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │     Django      │
                                              │   (Python)      │
                                              └─────────────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │   PostgreSQL    │
                                              │   (Database)    │
                                              └─────────────────┘
```

## 📁 Estrutura de Arquivos

```
/var/www/folhafacil/
├── folhafacil/
│   ├── settings.py              # Configurações de desenvolvimento
│   ├── settings_production.py   # Configurações de produção
│   ├── wsgi.py                  # WSGI para desenvolvimento
│   └── wsgi_production.py       # WSGI para produção
├── monitor/                     # Aplicação principal
├── staticfiles/                 # Arquivos estáticos coletados
├── venv/                        # Ambiente virtual Python
├── requirements.txt             # Dependências Python
├── gunicorn.conf.py            # Configuração do Gunicorn
├── nginx.conf                  # Configuração do Nginx
├── folhafacil.service         # Serviço systemd
├── deploy.sh                   # Script de deploy automático
├── backup.sh                   # Script de backup
├── monitor.sh                  # Script de monitoramento
└── .env                        # Variáveis de ambiente
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie o arquivo `.env` com as seguintes variáveis:

```bash
# Banco de dados
DB_NAME=folhafacil
DB_USER=folhafacil_user
DB_PASSWORD=your_database_password_here
DB_HOST=localhost
DB_PORT=5432

# E-mail
EMAIL_HOST=smtp.trf1.jus.br
EMAIL_PORT=25
EMAIL_USE_TLS=False
EMAIL_HOST_USER=your_email@trf1.jus.br
EMAIL_HOST_PASSWORD=your_email_password_here
DEFAULT_FROM_EMAIL=your_email@trf1.jus.br

# URL base
BASE_URL=http://localhost
```

### Configurações de Segurança

1. **Alterar senhas padrão**
2. **Configurar firewall**
3. **Configurar SSL/TLS** (opcional)
4. **Configurar backup automático**

## 🚀 Comandos Úteis

### Gerenciamento de Serviços

```bash
# Verificar status
sudo systemctl status folhafacil
sudo systemctl status nginx
sudo systemctl status postgresql

# Reiniciar serviços
sudo systemctl restart folhafacil
sudo systemctl restart nginx

# Ver logs em tempo real
sudo journalctl -u folhafacil -f
sudo tail -f /var/log/nginx/folhafacil_error.log
```

### Gerenciamento do Django

```bash
# Acessar shell do Django
cd /var/www/folhafacil
source venv/bin/activate
export DJANGO_SETTINGS_MODULE=folhafacil.settings_production
python manage.py shell

# Executar migrações
python manage.py migrate

# Coletar arquivos estáticos
python manage.py collectstatic --noinput

# Criar superusuário
python manage.py createsuperuser
```

### Backup e Restore

```bash
# Executar backup
sudo ./backup.sh

# Restaurar backup (manual)
sudo systemctl stop folhafacil
gunzip /var/backups/folhafacil/backup_YYYYMMDD_HHMMSS.sql.gz
sudo -u postgres psql folhafacil < /var/backups/folhafacil/backup_YYYYMMDD_HHMMSS.sql
sudo systemctl start folhafacil
```

### Monitoramento

```bash
# Executar monitoramento
sudo ./monitor.sh

# Verificar logs de monitoramento
tail -f /var/log/folhafacil/monitor.log
```

## 📊 Monitoramento

### Scripts de Monitoramento

- `monitor.sh` - Monitoramento completo do sistema
- `backup.sh` - Backup automático dos dados
- Logs em `/var/log/folhafacil/`

### Métricas Monitoradas

- Status dos serviços (Django, Nginx, PostgreSQL)
- Uso de recursos (CPU, Memória, Disco)
- Conectividade da aplicação
- Erros nos logs
- Tamanho dos arquivos de log

## 🔒 Segurança

### Configurações de Segurança Implementadas

1. **Firewall configurado** (portas 22, 80, 443)
2. **Usuário dedicado** (www-data)
3. **Permissões restritas** para arquivos sensíveis
4. **Logs de segurança** configurados
5. **Headers de segurança** no Nginx

### Recomendações Adicionais

1. **Configurar SSL/TLS** com Certbot
2. **Implementar rate limiting** no Nginx
3. **Configurar fail2ban** para proteção contra ataques
4. **Monitorar logs** regularmente
5. **Manter sistema atualizado**

## 🛠️ Troubleshooting

### Problemas Comuns

#### 1. Serviço não inicia

```bash
# Verificar logs
sudo journalctl -u folhafacil -f

# Verificar configuração
sudo nginx -t
sudo systemctl status folhafacil
```

#### 2. Erro de permissão

```bash
# Corrigir permissões
sudo chown -R www-data:www-data /var/www/folhafacil
sudo chown -R www-data:www-data /var/log/folhafacil
```

#### 3. Erro de banco de dados

```bash
# Verificar PostgreSQL
sudo systemctl status postgresql
sudo -u postgres psql -c "SELECT version();"
```

#### 4. Erro de arquivos estáticos

```bash
# Recoletar arquivos estáticos
cd /var/www/folhafacil
source venv/bin/activate
python manage.py collectstatic --noinput
```

### Logs Importantes

- `/var/log/folhafacil/django.log` - Logs do Django
- `/var/log/folhafacil/gunicorn_*.log` - Logs do Gunicorn
- `/var/log/nginx/folhafacil_*.log` - Logs do Nginx
- `/var/log/postgresql/` - Logs do PostgreSQL

## 📈 Performance

### Otimizações Implementadas

1. **Gunicorn** com múltiplos workers
2. **Nginx** como proxy reverso
3. **Compressão gzip** habilitada
4. **Cache de arquivos estáticos**
5. **Logs otimizados**

### Monitoramento de Performance

```bash
# Verificar uso de recursos
htop
df -h
free -h

# Verificar processos
ps aux | grep gunicorn
ps aux | grep nginx
```

## 🔄 Atualizações

### Atualizar Aplicação

```bash
# Fazer backup
sudo ./backup.sh

# Parar aplicação
sudo systemctl stop folhafacil

# Atualizar código
cd /var/www/folhafacil
sudo git pull origin main

# Atualizar dependências
source venv/bin/activate
pip install -r requirements.txt

# Executar migrações
export DJANGO_SETTINGS_MODULE=folhafacil.settings_production
python manage.py migrate

# Coletar arquivos estáticos
python manage.py collectstatic --noinput

# Reiniciar aplicação
sudo systemctl start folhafacil
```

## 📞 Suporte

### Contatos

- **Desenvolvedor**: Paulo R. Vieira
- **E-mail**: your_email@trf1.jus.br
- **Equipe**: Jean Cabral (jean.cabral@trf1.jus.br)

### Documentação Adicional

- `DEPLOY_LINUX.md` - Guia completo de deploy
- `DOCUMENTATION.md` - Documentação geral do projeto
- `README.md` - Documentação do projeto

## 📝 Licença

Este projeto é desenvolvido para uso interno do TRF1.

---

**Versão**: 1.0  
**Última atualização**: Agosto 2024  
**Django**: 3.2.25  
**Python**: 3.8+ 