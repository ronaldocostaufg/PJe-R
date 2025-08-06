# Deploy Folha Facil - Linux

Este documento descreve como fazer o deploy da aplicação Folha Facil em um servidor Linux.

## Pré-requisitos

- Ubuntu 20.04 LTS ou superior
- Acesso root ou sudo
- Conectividade com internet
- Pelo menos 2GB de RAM
- 10GB de espaço em disco

## Arquitetura

A aplicação será configurada com:

- **Django 3.2.25** - Framework web
- **PostgreSQL** - Banco de dados
- **Gunicorn** - Servidor WSGI
- **Nginx** - Servidor web e proxy reverso
- **Systemd** - Gerenciamento de serviços

## Deploy Automático

### 1. Preparar o servidor

```bash
# Conectar ao servidor
ssh usuario@seu-servidor.com

# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependências básicas
sudo apt install -y git curl wget
```

### 2. Clonar o projeto

```bash
# Criar diretório para o projeto
sudo mkdir -p /var/www
cd /var/www

# Clonar o repositório (substitua pela URL do seu repositório)
sudo git clone https://github.com/seu-usuario/folhafacil.git
sudo chown -R $USER:$USER folhafacil
cd folhafacil
```

### 3. Executar o script de deploy

```bash
# Tornar o script executável
chmod +x deploy.sh

# Executar o deploy
sudo ./deploy.sh
```

## Deploy Manual

Se preferir fazer o deploy manualmente, siga os passos abaixo:

### 1. Instalar dependências do sistema

```bash
sudo apt update
sudo apt install -y python3 python3-pip python3-venv nginx postgresql postgresql-contrib git curl
```

### 2. Configurar PostgreSQL

```bash
# Acessar PostgreSQL
sudo -u postgres psql

# Criar banco de dados
CREATE DATABASE folhafacil;

# Criar usuário
CREATE USER folhafacil_user WITH PASSWORD 'folhafacil_password_2024';

# Conceder privilégios
GRANT ALL PRIVILEGES ON DATABASE folhafacil TO folhafacil_user;
ALTER USER folhafacil_user CREATEDB;

# Sair
\q
```

### 3. Configurar o projeto

```bash
# Criar diretórios
sudo mkdir -p /var/www/folhafacil
sudo mkdir -p /var/log/folhafacil
sudo mkdir -p /var/run/folhafacil

# Copiar arquivos
sudo cp -r . /var/www/folhafacil/
sudo chown -R www-data:www-data /var/www/folhafacil
sudo chown -R www-data:www-data /var/log/folhafacil
sudo chown -R www-data:www-data /var/run/folhafacil

# Criar ambiente virtual
cd /var/www/folhafacil
sudo python3 -m venv venv
sudo chown -R www-data:www-data venv

# Ativar ambiente virtual
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt
```

### 4. Configurar variáveis de ambiente

```bash
# Criar arquivo .env
sudo -u www-data tee /var/www/folhafacil/.env > /dev/null << EOF
DB_NAME=folhafacil
DB_USER=folhafacil_user
DB_PASSWORD=folhafacil_password_2024
DB_HOST=localhost
DB_PORT=5432
EMAIL_HOST=smtp.trf1.jus.br
EMAIL_PORT=25
EMAIL_USE_TLS=False
EMAIL_HOST_USER=paulo.rvieira@trf1.jus.br
EMAIL_HOST_PASSWORD=
DEFAULT_FROM_EMAIL=paulo.rvieira@trf1.jus.br
BASE_URL=http://localhost
EOF

sudo chmod 600 /var/www/folhafacil/.env
```

### 5. Executar migrações

```bash
cd /var/www/folhafacil
source venv/bin/activate
export DJANGO_SETTINGS_MODULE=folhafacil.settings_production

# Executar migrações
python manage.py migrate

# Coletar arquivos estáticos
python manage.py collectstatic --noinput
```

### 6. Configurar Nginx

```bash
# Copiar configuração do Nginx
sudo cp nginx.conf /etc/nginx/sites-available/folhafacil

# Habilitar site
sudo ln -sf /etc/nginx/sites-available/folhafacil /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl reload nginx
```

### 7. Configurar Gunicorn

```bash
# Copiar configuração do Gunicorn
sudo cp gunicorn.conf.py /var/www/folhafacil/

# Testar Gunicorn
cd /var/www/folhafacil
source venv/bin/activate
gunicorn --config gunicorn.conf.py folhafacil.wsgi_production:application
```

### 8. Configurar Systemd

```bash
# Copiar arquivo de serviço
sudo cp folhafacil.service /etc/systemd/system/

# Recarregar systemd
sudo systemctl daemon-reload

# Habilitar e iniciar serviço
sudo systemctl enable folhafacil.service
sudo systemctl start folhafacil.service
```

### 9. Configurar firewall

```bash
# Permitir portas necessárias
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp

# Habilitar firewall
sudo ufw --force enable
```

## Verificação

### Verificar status dos serviços

```bash
# Status do Django/Gunicorn
sudo systemctl status folhafacil.service

# Status do Nginx
sudo systemctl status nginx

# Status do PostgreSQL
sudo systemctl status postgresql
```

### Verificar logs

```bash
# Logs do Django
sudo tail -f /var/log/folhafacil/django.log

# Logs do Gunicorn
sudo tail -f /var/log/folhafacil/gunicorn_access.log
sudo tail -f /var/log/folhafacil/gunicorn_error.log

# Logs do Nginx
sudo tail -f /var/log/nginx/folhafacil_access.log
sudo tail -f /var/log/nginx/folhafacil_error.log

# Logs do systemd
sudo journalctl -u folhafacil -f
```

### Testar aplicação

```bash
# Testar se a aplicação está respondendo
curl -I http://localhost

# Verificar se o banco está funcionando
sudo -u www-data python manage.py shell -c "from django.db import connection; print('Database OK')"
```

## Comandos Úteis

### Gerenciamento de serviços

```bash
# Reiniciar aplicação
sudo systemctl restart folhafacil

# Parar aplicação
sudo systemctl stop folhafacil

# Iniciar aplicação
sudo systemctl start folhafacil

# Verificar status
sudo systemctl status folhafacil

# Ver logs em tempo real
sudo journalctl -u folhafacil -f
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
# Backup do banco de dados
sudo -u postgres pg_dump folhafacil > backup_$(date +%Y%m%d_%H%M%S).sql

# Restore do banco de dados
sudo -u postgres psql folhafacil < backup_arquivo.sql
```

## Troubleshooting

### Problemas comuns

1. **Erro de permissão**
   ```bash
   sudo chown -R www-data:www-data /var/www/folhafacil
   sudo chown -R www-data:www-data /var/log/folhafacil
   ```

2. **Erro de conexão com banco**
   ```bash
   sudo systemctl restart postgresql
   sudo -u postgres psql -c "SELECT version();"
   ```

3. **Erro de arquivos estáticos**
   ```bash
   cd /var/www/folhafacil
   source venv/bin/activate
   python manage.py collectstatic --noinput
   ```

4. **Erro de configuração do Nginx**
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Logs importantes

- `/var/log/folhafacil/django.log` - Logs do Django
- `/var/log/folhafacil/gunicorn_*.log` - Logs do Gunicorn
- `/var/log/nginx/folhafacil_*.log` - Logs do Nginx
- `/var/log/postgresql/` - Logs do PostgreSQL

## Segurança

### Configurações recomendadas

1. **Alterar senhas padrão**
2. **Configurar SSL/TLS**
3. **Configurar backup automático**
4. **Monitorar logs regularmente**
5. **Manter sistema atualizado**

### Configurar SSL (opcional)

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obter certificado SSL
sudo certbot --nginx -d seu-dominio.com

# Configurar renovação automática
sudo crontab -e
# Adicionar: 0 12 * * * /usr/bin/certbot renew --quiet
```

## Monitoramento

### Script de monitoramento básico

```bash
#!/bin/bash
# monitor.sh

# Verificar se os serviços estão rodando
if ! systemctl is-active --quiet folhafacil; then
    echo "ERRO: Serviço folhafacil não está rodando"
    systemctl restart folhafacil
fi

if ! systemctl is-active --quiet nginx; then
    echo "ERRO: Serviço nginx não está rodando"
    systemctl restart nginx
fi

# Verificar uso de disco
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 80 ]; then
    echo "AVISO: Uso de disco alto: ${DISK_USAGE}%"
fi

# Verificar uso de memória
MEM_USAGE=$(free | awk 'NR==2{printf "%.2f", $3*100/$2}')
if (( $(echo "$MEM_USAGE > 80" | bc -l) )); then
    echo "AVISO: Uso de memória alto: ${MEM_USAGE}%"
fi
```

## Atualizações

### Atualizar aplicação

```bash
# Fazer backup
sudo -u postgres pg_dump folhafacil > backup_$(date +%Y%m%d_%H%M%S).sql

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

## Suporte

Para suporte técnico ou dúvidas sobre o deploy, entre em contato com a equipe de desenvolvimento. 