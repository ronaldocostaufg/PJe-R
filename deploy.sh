#!/bin/bash

# Script de Deploy para Folha Facil - Linux
# Execute como root ou com sudo

set -e

echo "=== Deploy Folha Facil - Linux ==="

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERRO: $1${NC}"
    exit 1
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] AVISO: $1${NC}"
}

# Verificar se está rodando como root
if [ "$EUID" -ne 0 ]; then
    error "Este script deve ser executado como root ou com sudo"
fi

# Configurações
PROJECT_NAME="folhafacil"
PROJECT_PATH="/var/www/$PROJECT_NAME"
VENV_PATH="$PROJECT_PATH/venv"
DB_NAME="folhafacil"
DB_USER="folhafacil_user"
DB_PASSWORD="folhafacil_password_2024"

log "Iniciando deploy do $PROJECT_NAME..."

# Atualizar sistema
log "Atualizando sistema..."
apt update && apt upgrade -y

# Instalar dependências do sistema
log "Instalando dependências do sistema..."
apt install -y python3 python3-pip python3-venv nginx postgresql postgresql-contrib git curl

# Criar usuário e diretórios
log "Criando usuário e diretórios..."
if ! id "www-data" &>/dev/null; then
    useradd -r -s /bin/false www-data
fi

mkdir -p $PROJECT_PATH
mkdir -p /var/log/$PROJECT_NAME
mkdir -p /var/run/$PROJECT_NAME
chown -R www-data:www-data $PROJECT_PATH
chown -R www-data:www-data /var/log/$PROJECT_NAME
chown -R www-data:www-data /var/run/$PROJECT_NAME

# Configurar PostgreSQL
log "Configurando PostgreSQL..."
sudo -u postgres psql -c "CREATE DATABASE $DB_NAME;" || warn "Database já existe"
sudo -u postgres psql -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASSWORD';" || warn "User já existe"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"
sudo -u postgres psql -c "ALTER USER $DB_USER CREATEDB;"

# Copiar arquivos do projeto (assumindo que estão no diretório atual)
log "Copiando arquivos do projeto..."
cp -r . $PROJECT_PATH/
chown -R www-data:www-data $PROJECT_PATH

# Criar ambiente virtual
log "Criando ambiente virtual..."
cd $PROJECT_PATH
python3 -m venv venv
source venv/bin/activate

# Instalar dependências Python
log "Instalando dependências Python..."
pip install --upgrade pip
pip install -r requirements.txt

# Configurar variáveis de ambiente
log "Configurando variáveis de ambiente..."
cat > $PROJECT_PATH/.env << EOF
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASSWORD
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

chown www-data:www-data $PROJECT_PATH/.env
chmod 600 $PROJECT_PATH/.env

# Executar migrações
log "Executando migrações..."
export DJANGO_SETTINGS_MODULE=folhafacil.settings_production
python manage.py migrate

# Coletar arquivos estáticos
log "Coletando arquivos estáticos..."
python manage.py collectstatic --noinput

# Configurar Nginx
log "Configurando Nginx..."
cp nginx.conf /etc/nginx/sites-available/$PROJECT_NAME
ln -sf /etc/nginx/sites-available/$PROJECT_NAME /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# Configurar systemd
log "Configurando systemd..."
cp folhafacil.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable folhafacil.service

# Iniciar serviços
log "Iniciando serviços..."
systemctl start folhafacil.service
systemctl restart nginx

# Configurar firewall
log "Configurando firewall..."
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw --force enable

# Verificar status dos serviços
log "Verificando status dos serviços..."
systemctl status folhafacil.service --no-pager
systemctl status nginx --no-pager

log "=== Deploy concluído com sucesso! ==="
log "A aplicação está disponível em: http://localhost"
log "Logs do Django: /var/log/folhafacil/django.log"
log "Logs do Gunicorn: /var/log/folhafacil/gunicorn_*.log"
log "Logs do Nginx: /var/log/nginx/folhafacil_*.log"
log ""
log "Comandos úteis:"
log "  - Reiniciar aplicação: systemctl restart folhafacil"
log "  - Ver logs: journalctl -u folhafacil -f"
log "  - Verificar status: systemctl status folhafacil" 