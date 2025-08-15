# 🚀 Deploy FolhaFácil - Linux Apache

Este documento contém instruções completas para deploy do FolhaFácil em um servidor Linux com Apache.

## 📋 URLs de Acesso

Após o deploy, as aplicações estarão disponíveis em:

- **Monitor**: `https://seu-dominio.com/folhafacil/monitor/`
- **Horas**: `https://seu-dominio.com/folhafacil/horas/`
- **Admin Django**: `https://seu-dominio.com/admin/`
- **Raiz**: `https://seu-dominio.com/` (redireciona para Monitor)

## 🛠️ Pré-requisitos

- Ubuntu 20.04+ ou Debian 10+
- Acesso root ou sudo
- Conexão com internet
- Domínio configurado (opcional, mas recomendado)

## 📦 Estrutura do Projeto

```
folhafacil/
├── folhafacil/          # Configurações principais do Django
├── Monitor/             # Aplicação Monitor
├── Horas/               # Aplicação Horas
├── requirements.txt     # Dependências Python
├── apache_config.conf  # Configuração Apache
├── deploy_linux.sh     # Script de deploy automático
└── README_DEPLOY.md    # Este arquivo
```

## 🚀 Deploy Automático

### 1. Preparar Arquivos

1. **Compactar o projeto:**
   ```bash
   # No Windows, compacte toda a pasta Folha
   # Transfira para o servidor Linux
   ```

2. **No servidor Linux:**
   ```bash
   # Extrair arquivos
   unzip folhafacil.zip -d /tmp/
   
   # Mover para localização final
   sudo mv /tmp/Folha /var/www/folhafacil
   cd /var/www/folhafacil
   ```

### 2. Executar Script de Deploy

```bash
# Dar permissão de execução
chmod +x deploy_linux.sh

# Executar como root
sudo ./deploy_linux.sh
```

O script irá:
- ✅ Instalar todas as dependências
- ✅ Configurar ambiente virtual Python
- ✅ Configurar Apache
- ✅ Executar migrações
- ✅ Coletar arquivos estáticos
- ✅ Configurar permissões
- ✅ Configurar firewall
- ✅ Configurar limpeza automática

## 🔧 Deploy Manual

Se preferir fazer o deploy manualmente:

### 1. Atualizar Sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Instalar Dependências

```bash
# Dependências básicas
sudo apt install -y python3 python3-pip python3-venv apache2 libapache2-mod-wsgi-py3

# Ferramentas
sudo apt install -y git curl wget unzip

# Tesseract OCR (necessário para processamento de PDFs)
sudo apt install -y tesseract-ocr tesseract-ocr-por

# Dependências de desenvolvimento
sudo apt install -y libpq-dev python3-dev build-essential
```

### 3. Configurar Projeto

```bash
# Criar diretório
sudo mkdir -p /var/www/folhafacil
sudo chown $USER:$USER /var/www/folhafacil

# Copiar arquivos do projeto
cp -r /caminho/para/seu/projeto/* /var/www/folhafacil/

# Criar ambiente virtual
cd /var/www/folhafacil
python3 -m venv venv
source venv/bin/activate

# Instalar dependências Python
pip install --upgrade pip
pip install -r requirements.txt
```

### 4. Configurar Django

```bash
# Configurar variáveis de ambiente
export DJANGO_SECRET_KEY="$(python3 -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())')"
export DJANGO_SETTINGS_MODULE=folhafacil.settings_production

# Criar arquivo .env
cat > .env << EOF
DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY
DJANGO_SETTINGS_MODULE=folhafacil.settings_production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=seu-email@gmail.com
EMAIL_HOST_PASSWORD=sua-senha-app
EOF

# Coletar arquivos estáticos
python manage.py collectstatic --noinput

# Executar migrações
python manage.py migrate

# Criar superusuário
python manage.py createsuperuser
```

### 5. Configurar Apache

```bash
# Copiar configuração
sudo cp apache_config.conf /etc/apache2/sites-available/folhafacil.conf

# Editar configuração (substituir placeholders)
sudo nano /etc/apache2/sites-available/folhafacil.conf

# Habilitar site e módulos
sudo a2ensite folhafacil
sudo a2enmod wsgi
sudo a2enmod rewrite

# Configurar permissões
sudo chown -R www-data:www-data /var/www/folhafacil
sudo chmod -R 755 /var/www/folhafacil
sudo chmod 644 /var/www/folhafacil/.env

# Reiniciar Apache
sudo systemctl restart apache2
```

### 6. Configurar Firewall

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw --force enable
```

## 🔍 Verificação

### 1. Verificar Status dos Serviços

```bash
# Verificar Apache
sudo systemctl status apache2

# Verificar logs
sudo tail -f /var/log/apache2/folhafacil_error.log
```

### 2. Testar URLs

```bash
# Testar Monitor
curl -I http://localhost/folhafacil/monitor/

# Testar Horas
curl -I http://localhost/folhafacil/horas/

# Testar Admin
curl -I http://localhost/admin/
```

### 3. Verificar Permissões

```bash
# Verificar diretórios importantes
ls -la /var/www/folhafacil/
ls -la /var/www/folhafacil/Horas/media/
ls -la /var/www/folhafacil/staticfiles/
```

## 🔒 Configuração SSL/HTTPS

### 1. Usando Let's Encrypt (Recomendado)

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-apache

# Obter certificado
sudo certbot --apache -d seu-dominio.com -d www.seu-dominio.com

# Renovação automática
sudo crontab -e
# Adicionar: 0 12 * * * /usr/bin/certbot renew --quiet
```

### 2. Configuração Manual

1. Obter certificados SSL
2. Editar `/etc/apache2/sites-available/folhafacil.conf`
3. Descomentar seção HTTPS
4. Ajustar caminhos dos certificados
5. Reiniciar Apache

## 📊 Monitoramento e Manutenção

### 1. Logs

```bash
# Logs do Apache
sudo tail -f /var/log/apache2/folhafacil_access.log
sudo tail -f /var/log/apache2/folhafacil_error.log

# Logs do Django
sudo tail -f /var/www/folhafacil/logs/django.log
```

### 2. Backup

```bash
# Script de backup
#!/bin/bash
BACKUP_DIR="/backup/folhafacil"
DATE=$(date +%Y%m%d_%H%M%S)

# Criar backup
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/folhafacil_$DATE.tar.gz /var/www/folhafacil

# Manter apenas últimos 7 backups
find $BACKUP_DIR -name "folhafacil_*.tar.gz" -mtime +7 -delete
```

### 3. Atualizações

```bash
# Atualizar código
cd /var/www/folhafacil
git pull origin main

# Ativar ambiente virtual
source venv/bin/activate

# Instalar novas dependências
pip install -r requirements.txt

# Coletar estáticos
python manage.py collectstatic --noinput

# Executar migrações
python manage.py migrate

# Reiniciar Apache
sudo systemctl restart apache2
```

## 🚨 Troubleshooting

### Problemas Comuns

#### 1. Erro 500 - Internal Server Error

```bash
# Verificar logs
sudo tail -f /var/log/apache2/folhafacil_error.log
sudo tail -f /var/www/folhafacil/logs/django.log

# Verificar permissões
sudo chown -R www-data:www-data /var/www/folhafacil
```

#### 2. Erro 403 - Forbidden

```bash
# Verificar permissões do diretório
sudo chmod -R 755 /var/www/folhafacil
sudo chown -R www-data:www-data /var/www/folhafacil
```

#### 3. Arquivos estáticos não carregam

```bash
# Recoletar arquivos estáticos
cd /var/www/folhafacil
source venv/bin/activate
python manage.py collectstatic --noinput

# Verificar permissões
sudo chown -R www-data:www-data /var/www/folhafacil/staticfiles/
```

#### 4. Upload de arquivos não funciona

```bash
# Verificar permissões do diretório media
sudo chmod -R 755 /var/www/folhafacil/Horas/media/
sudo chown -R www-data:www-data /var/www/folhafacil/Horas/media/
```

#### 5. Tesseract não encontrado

```bash
# Reinstalar Tesseract
sudo apt remove --purge tesseract-ocr tesseract-ocr-por
sudo apt install -y tesseract-ocr tesseract-ocr-por

# Verificar instalação
tesseract --version
```

### Comandos Úteis

```bash
# Reiniciar Apache
sudo systemctl restart apache2

# Verificar status do Apache
sudo systemctl status apache2

# Testar configuração do Apache
sudo apache2ctl configtest

# Verificar módulos carregados
sudo apache2ctl -M

# Verificar processos Python
ps aux | grep python

# Verificar uso de disco
df -h /var/www/folhafacil/

# Verificar uso de memória
free -h
```

## 🔐 Segurança

### 1. Configurações de Segurança

- ✅ Firewall configurado
- ✅ HTTPS habilitado
- ✅ Headers de segurança configurados
- ✅ DEBUG = False em produção
- ✅ SECRET_KEY em variável de ambiente

### 2. Manutenção de Segurança

```bash
# Atualizar sistema regularmente
sudo apt update && sudo apt upgrade -y

# Verificar vulnerabilidades
sudo apt list --upgradable

# Monitorar logs de segurança
sudo tail -f /var/log/auth.log
```

## 📞 Suporte

Para problemas específicos:

1. Verificar logs primeiro
2. Consultar documentação do Django
3. Verificar configurações do Apache
4. Testar em ambiente de desenvolvimento

## 📝 Notas Importantes

- **Backup**: Configure backup regular dos dados
- **Monitoramento**: Monitore uso de disco e logs
- **Atualizações**: Mantenha o sistema atualizado
- **SSL**: Use HTTPS em produção
- **Permissões**: Mantenha permissões adequadas
- **Logs**: Monitore logs regularmente
