#!/bin/bash

# Script de Deploy FolhaFácil - Linux Apache
# Execute como root ou com sudo

set -e  # Parar em caso de erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funções de output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Configurações do projeto
PROJECT_NAME="folhafacil"
PROJECT_DIR="/var/www/folhafacil"
VENV_DIR="$PROJECT_DIR/venv"
APACHE_USER="www-data"
APACHE_GROUP="www-data"

# Verificar se está rodando como root
if [[ $EUID -ne 0 ]]; then
   print_error "Este script deve ser executado como root ou com sudo"
   exit 1
fi

print_status "🚀 Iniciando deploy do FolhaFácil..."

# 1. Atualizar sistema
print_status "Atualizando sistema..."
apt update && apt upgrade -y

# 2. Instalar dependências do sistema
print_status "Instalando dependências do sistema..."
apt install -y python3 python3-pip python3-venv apache2 libapache2-mod-wsgi-py3
apt install -y git curl wget unzip
apt install -y tesseract-ocr tesseract-ocr-por
apt install -y libpq-dev python3-dev build-essential

# 3. Criar diretório do projeto
print_status "Criando diretório do projeto..."
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# 4. Copiar arquivos do projeto (ajuste o caminho conforme necessário)
print_status "Copiando arquivos do projeto..."
# Se os arquivos estiverem em um repositório Git:
# git clone https://github.com/seu-usuario/folhafacil.git .
# OU se estiverem em um arquivo compactado:
# wget https://exemplo.com/folhafacil.zip && unzip folhafacil.zip

# Para transferência manual, copie os arquivos para $PROJECT_DIR
print_warning "IMPORTANTE: Copie manualmente todos os arquivos do projeto para $PROJECT_DIR"
print_warning "Pressione ENTER quando os arquivos estiverem copiados..."
read

# 5. Criar ambiente virtual
print_status "Criando ambiente virtual Python..."
python3 -m venv $VENV_DIR
source $VENV_DIR/bin/activate

# 6. Instalar dependências Python
print_status "Instalando dependências Python..."
pip install --upgrade pip
pip install -r requirements.txt

# 7. Configurar variáveis de ambiente
print_status "Configurando variáveis de ambiente..."
export DJANGO_SECRET_KEY="$(python3 -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())')"
export DJANGO_SETTINGS_MODULE=folhafacil.settings_production

# Criar arquivo .env para persistir as variáveis
cat > $PROJECT_DIR/.env << EOF
DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY
DJANGO_SETTINGS_MODULE=folhafacil.settings_production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=seu-email@gmail.com
EMAIL_HOST_PASSWORD=sua-senha-app
EOF

# 8. Configurar permissões
print_status "Configurando permissões..."
chown -R $APACHE_USER:$APACHE_GROUP $PROJECT_DIR
chmod -R 755 $PROJECT_DIR
chmod 644 $PROJECT_DIR/.env

# 9. Coletar arquivos estáticos
print_status "Coletando arquivos estáticos..."
python manage.py collectstatic --noinput

# 10. Executar migrações
print_status "Executando migrações..."
python manage.py migrate

# 11. Criar superusuário (opcional)
print_status "Deseja criar um superusuário? (y/n)"
read -r create_superuser
if [[ $create_superuser =~ ^[Yy]$ ]]; then
    python manage.py createsuperuser
fi

# 12. Configurar Apache
print_status "Configurando Apache..."

# Copiar configuração do Apache
cp apache_config.conf /etc/apache2/sites-available/folhafacil.conf

# Substituir placeholders na configuração
sed -i "s|seu-dominio.com|$(hostname -f)|g" /etc/apache2/sites-available/folhafacil.conf
sed -i "s|caminho/para/seu/projeto|$PROJECT_DIR|g" /etc/apache2/sites-available/folhafacil.conf
sed -i "s|python3.x|python3.$(python3 -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')|g" /etc/apache2/sites-available/folhafacil.conf

# Habilitar site e módulos necessários
a2ensite folhafacil
a2enmod wsgi
a2enmod rewrite

# Desabilitar site padrão (opcional)
a2dissite 000-default

# 13. Configurar firewall (opcional)
print_status "Configurando firewall..."
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw --force enable

# 14. Reiniciar Apache
print_status "Reiniciando Apache..."
systemctl restart apache2
systemctl enable apache2

# 15. Configurar logrotate
print_status "Configurando logrotate..."
cat > /etc/logrotate.d/folhafacil << EOF
$PROJECT_DIR/logs/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 $APACHE_USER $APACHE_GROUP
    postrotate
        systemctl reload apache2
    endscript
}
EOF

# 16. Configurar limpeza automática de arquivos temporários
print_status "Configurando limpeza automática..."
cat > /etc/cron.daily/folhafacil-cleanup << EOF
#!/bin/bash
# Limpar arquivos temporários antigos (mais de 7 dias)
find $PROJECT_DIR/Horas/media -name "*.pdf" -mtime +7 -delete
find $PROJECT_DIR/Horas/media -name "*.csv" -mtime +7 -delete
find $PROJECT_DIR/Horas/media -name "*.xlsx" -mtime +7 -delete
EOF

chmod +x /etc/cron.daily/folhafacil-cleanup

# 17. Verificar instalação
print_status "Verificando instalação..."
if systemctl is-active --quiet apache2; then
    print_success "Apache está rodando"
else
    print_error "Apache não está rodando"
    systemctl status apache2
fi

# 18. Testar aplicação
print_status "Testando aplicação..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost/folhafacil/monitor/ | grep -q "200\|302"; then
    print_success "Aplicação está respondendo corretamente"
else
    print_warning "Aplicação pode não estar respondendo. Verifique os logs:"
    print_warning "tail -f /var/log/apache2/folhafacil_error.log"
fi

# 19. Informações finais
print_success "🎉 Deploy concluído com sucesso!"
echo ""
echo "📋 Informações importantes:"
echo "   • URL da aplicação: http://$(hostname -f)/folhafacil/"
echo "   • Monitor: http://$(hostname -f)/folhafacil/monitor/"
echo "   • Horas: http://$(hostname -f)/folhafacil/horas/"
echo "   • Admin: http://$(hostname -f)/admin/"
echo ""
echo "📁 Diretórios importantes:"
echo "   • Projeto: $PROJECT_DIR"
echo "   • Logs: $PROJECT_DIR/logs/"
echo "   • Media: $PROJECT_DIR/Horas/media/"
echo "   • Static: $PROJECT_DIR/staticfiles/"
echo ""
echo "🔧 Comandos úteis:"
echo "   • Ver logs: tail -f /var/log/apache2/folhafacil_error.log"
echo "   • Reiniciar Apache: systemctl restart apache2"
echo "   • Atualizar código: cd $PROJECT_DIR && git pull"
echo "   • Coletar estáticos: cd $PROJECT_DIR && source venv/bin/activate && python manage.py collectstatic"
echo ""
echo "⚠️  Lembre-se de:"
echo "   • Configurar SSL/HTTPS para produção"
echo "   • Ajustar as configurações de e-mail no arquivo .env"
echo "   • Configurar backup regular dos dados"
echo "   • Monitorar o uso de disco e logs"
