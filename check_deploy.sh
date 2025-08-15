#!/bin/bash

# Script para verificar o deploy do FolhaFácil
# Execute após o deploy para verificar se tudo está funcionando

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

# Configurações
PROJECT_DIR="/var/www/folhafacil"
DOMAIN=$(hostname -f)

echo "🔍 Verificando deploy do FolhaFácil..."
echo "======================================"

# 1. Verificar se o diretório do projeto existe
print_status "Verificando diretório do projeto..."
if [ -d "$PROJECT_DIR" ]; then
    print_success "Diretório do projeto encontrado: $PROJECT_DIR"
else
    print_error "Diretório do projeto não encontrado: $PROJECT_DIR"
    exit 1
fi

# 2. Verificar se o ambiente virtual existe
print_status "Verificando ambiente virtual..."
if [ -d "$PROJECT_DIR/venv" ]; then
    print_success "Ambiente virtual encontrado"
else
    print_error "Ambiente virtual não encontrado"
fi

# 3. Verificar se o Apache está rodando
print_status "Verificando status do Apache..."
if systemctl is-active --quiet apache2; then
    print_success "Apache está rodando"
else
    print_error "Apache não está rodando"
    systemctl status apache2
fi

# 4. Verificar configuração do Apache
print_status "Verificando configuração do Apache..."
if apache2ctl configtest 2>&1 | grep -q "Syntax OK"; then
    print_success "Configuração do Apache está correta"
else
    print_error "Erro na configuração do Apache"
    apache2ctl configtest
fi

# 5. Verificar se o site está habilitado
print_status "Verificando se o site está habilitado..."
if [ -L "/etc/apache2/sites-enabled/folhafacil.conf" ]; then
    print_success "Site folhafacil está habilitado"
else
    print_warning "Site folhafacil não está habilitado"
fi

# 6. Verificar permissões
print_status "Verificando permissões..."
if [ -r "$PROJECT_DIR" ] && [ -w "$PROJECT_DIR" ]; then
    print_success "Permissões do diretório do projeto estão corretas"
else
    print_warning "Verificar permissões do diretório do projeto"
fi

# 7. Verificar diretórios importantes
print_status "Verificando diretórios importantes..."

# Verificar diretório media
if [ -d "$PROJECT_DIR/Horas/media" ]; then
    print_success "Diretório media encontrado"
    if [ -w "$PROJECT_DIR/Horas/media" ]; then
        print_success "Diretório media tem permissão de escrita"
    else
        print_warning "Diretório media não tem permissão de escrita"
    fi
else
    print_warning "Diretório media não encontrado"
fi

# Verificar diretório staticfiles
if [ -d "$PROJECT_DIR/staticfiles" ]; then
    print_success "Diretório staticfiles encontrado"
else
    print_warning "Diretório staticfiles não encontrado"
fi

# Verificar diretório logs
if [ -d "$PROJECT_DIR/logs" ]; then
    print_success "Diretório logs encontrado"
else
    print_warning "Diretório logs não encontrado"
fi

# 8. Verificar arquivo .env
print_status "Verificando arquivo .env..."
if [ -f "$PROJECT_DIR/.env" ]; then
    print_success "Arquivo .env encontrado"
    if [ -r "$PROJECT_DIR/.env" ]; then
        print_success "Arquivo .env tem permissão de leitura"
    else
        print_warning "Arquivo .env não tem permissão de leitura"
    fi
else
    print_warning "Arquivo .env não encontrado"
fi

# 9. Verificar dependências Python
print_status "Verificando dependências Python..."
cd "$PROJECT_DIR"
source venv/bin/activate

# Verificar se o Django está instalado
if python -c "import django; print(django.get_version())" 2>/dev/null; then
    print_success "Django está instalado"
else
    print_error "Django não está instalado"
fi

# Verificar se o Tesseract está disponível
if command -v tesseract &> /dev/null; then
    print_success "Tesseract está instalado"
    tesseract --version | head -1
else
    print_warning "Tesseract não está instalado"
fi

# 10. Testar URLs
print_status "Testando URLs..."

# Função para testar URL
test_url() {
    local url=$1
    local description=$2
    
    if curl -s -o /dev/null -w "%{http_code}" "$url" | grep -q "200\|302"; then
        print_success "$description está respondendo"
    else
        print_warning "$description não está respondendo"
    fi
}

# Testar URLs locais
test_url "http://localhost/folhafacil/monitor/" "Monitor (localhost)"
test_url "http://localhost/folhafacil/horas/" "Horas (localhost)"
test_url "http://localhost/admin/" "Admin (localhost)"

# Testar URLs com domínio se disponível
if [ "$DOMAIN" != "localhost" ]; then
    test_url "http://$DOMAIN/folhafacil/monitor/" "Monitor ($DOMAIN)"
    test_url "http://$DOMAIN/folhafacil/horas/" "Horas ($DOMAIN)"
    test_url "http://$DOMAIN/admin/" "Admin ($DOMAIN)"
fi

# 11. Verificar logs
print_status "Verificando logs..."

# Verificar logs do Apache
if [ -f "/var/log/apache2/folhafacil_error.log" ]; then
    print_success "Log de erro do Apache encontrado"
    echo "Últimas 5 linhas do log de erro:"
    tail -5 /var/log/apache2/folhafacil_error.log
else
    print_warning "Log de erro do Apache não encontrado"
fi

# Verificar logs do Django
if [ -f "$PROJECT_DIR/logs/django.log" ]; then
    print_success "Log do Django encontrado"
    echo "Últimas 5 linhas do log do Django:"
    tail -5 "$PROJECT_DIR/logs/django.log"
else
    print_warning "Log do Django não encontrado"
fi

# 12. Verificar uso de recursos
print_status "Verificando uso de recursos..."

# Verificar uso de disco
echo "Uso de disco do projeto:"
df -h "$PROJECT_DIR" | tail -1

# Verificar uso de memória
echo "Uso de memória:"
free -h | grep -E "Mem|Swap"

# Verificar processos Python
echo "Processos Python ativos:"
ps aux | grep python | grep -v grep | wc -l

# 13. Verificar firewall
print_status "Verificando firewall..."
if command -v ufw &> /dev/null; then
    if ufw status | grep -q "Status: active"; then
        print_success "Firewall está ativo"
        echo "Portas abertas:"
        ufw status | grep -E "(80|443|22)"
    else
        print_warning "Firewall não está ativo"
    fi
else
    print_warning "UFW não está instalado"
fi

# 14. Resumo final
echo ""
echo "======================================"
echo "📋 RESUMO DA VERIFICAÇÃO"
echo "======================================"

print_success "✅ Deploy verificado com sucesso!"
echo ""
echo "🌐 URLs de acesso:"
echo "   • Monitor: http://$DOMAIN/folhafacil/monitor/"
echo "   • Horas: http://$DOMAIN/folhafacil/horas/"
echo "   • Admin: http://$DOMAIN/admin/"
echo ""
echo "📁 Diretórios importantes:"
echo "   • Projeto: $PROJECT_DIR"
echo "   • Logs: $PROJECT_DIR/logs/"
echo "   • Media: $PROJECT_DIR/Horas/media/"
echo "   • Static: $PROJECT_DIR/staticfiles/"
echo ""
echo "🔧 Comandos úteis:"
echo "   • Ver logs: sudo tail -f /var/log/apache2/folhafacil_error.log"
echo "   • Reiniciar Apache: sudo systemctl restart apache2"
echo "   • Verificar status: sudo systemctl status apache2"
echo ""
echo "⚠️  Próximos passos recomendados:"
echo "   • Configurar SSL/HTTPS"
echo "   • Configurar backup automático"
echo "   • Configurar monitoramento"
echo "   • Testar todas as funcionalidades"
