#!/bin/bash

# Script de Backup Automático para FolhaFácil
# Execute diariamente via cron para manter backup dos dados

# Configurações
PROJECT_DIR="/var/www/folhafacil"
BACKUP_DIR="/backup/folhafacil"
DATE=$(date +%Y%m%d_%H%M%S)
RETENTION_DAYS=7

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

# Verificar se está rodando como root
if [[ $EUID -ne 0 ]]; then
   print_error "Este script deve ser executado como root ou com sudo"
   exit 1
fi

print_status "🔄 Iniciando backup do FolhaFácil..."

# 1. Criar diretório de backup se não existir
print_status "Criando diretório de backup..."
mkdir -p "$BACKUP_DIR"

# 2. Verificar se o diretório do projeto existe
if [ ! -d "$PROJECT_DIR" ]; then
    print_error "Diretório do projeto não encontrado: $PROJECT_DIR"
    exit 1
fi

# 3. Criar backup do projeto completo
print_status "Criando backup do projeto..."
BACKUP_FILE="$BACKUP_DIR/folhafacil_$DATE.tar.gz"

# Excluir arquivos desnecessários do backup
tar --exclude="$PROJECT_DIR/venv" \
    --exclude="$PROJECT_DIR/logs" \
    --exclude="$PROJECT_DIR/Horas/media/*.pdf" \
    --exclude="$PROJECT_DIR/Horas/media/*.csv" \
    --exclude="$PROJECT_DIR/Horas/media/*.xlsx" \
    --exclude="$PROJECT_DIR/__pycache__" \
    --exclude="$PROJECT_DIR/*/__pycache__" \
    --exclude="$PROJECT_DIR/*/*/__pycache__" \
    --exclude="$PROJECT_DIR/.git" \
    -czf "$BACKUP_FILE" -C "$PROJECT_DIR" .

if [ $? -eq 0 ]; then
    print_success "Backup do projeto criado: $BACKUP_FILE"
    
    # Verificar tamanho do backup
    BACKUP_SIZE=$(du -h "$BACKUP_FILE" | cut -f1)
    print_status "Tamanho do backup: $BACKUP_SIZE"
else
    print_error "Erro ao criar backup do projeto"
    exit 1
fi

# 4. Backup do banco de dados (se for SQLite)
print_status "Criando backup do banco de dados..."
DB_BACKUP_FILE="$BACKUP_DIR/database_$DATE.sql"

# Encontrar arquivos de banco SQLite
find "$PROJECT_DIR" -name "*.sqlite3" -o -name "db.sqlite3" | while read -r db_file; do
    if [ -f "$db_file" ]; then
        db_name=$(basename "$db_file")
        print_status "Backup do banco: $db_name"
        
        # Backup do SQLite
        sqlite3 "$db_file" ".dump" > "$BACKUP_DIR/${db_name}_$DATE.sql"
        
        if [ $? -eq 0 ]; then
            print_success "Backup do banco $db_name criado"
        else
            print_warning "Erro ao criar backup do banco $db_name"
        fi
    fi
done

# 5. Backup dos arquivos de mídia importantes
print_status "Criando backup dos arquivos de mídia..."
MEDIA_BACKUP_FILE="$BACKUP_DIR/media_$DATE.tar.gz"

# Criar backup apenas de arquivos processados importantes
if [ -d "$PROJECT_DIR/Horas/media" ]; then
    cd "$PROJECT_DIR/Horas/media"
    
    # Encontrar arquivos processados (CSV/XLSX de totais)
    IMPORTANT_FILES=$(find . -name "Total_Horas_*.csv" -o -name "Total_Horas_*.xlsx" 2>/dev/null)
    
    if [ -n "$IMPORTANT_FILES" ]; then
        tar -czf "$MEDIA_BACKUP_FILE" $IMPORTANT_FILES
        if [ $? -eq 0 ]; then
            print_success "Backup de mídia criado: $MEDIA_BACKUP_FILE"
        else
            print_warning "Erro ao criar backup de mídia"
        fi
    else
        print_status "Nenhum arquivo de mídia importante encontrado"
    fi
fi

# 6. Backup das configurações do sistema
print_status "Criando backup das configurações..."
CONFIG_BACKUP_FILE="$BACKUP_DIR/config_$DATE.tar.gz"

# Backup das configurações do Apache
tar -czf "$CONFIG_BACKUP_FILE" \
    /etc/apache2/sites-available/folhafacil.conf \
    /etc/apache2/sites-enabled/folhafacil.conf \
    /etc/logrotate.d/folhafacil \
    /etc/cron.daily/folhafacil-cleanup \
    "$PROJECT_DIR/.env" \
    2>/dev/null

if [ $? -eq 0 ]; then
    print_success "Backup de configurações criado: $CONFIG_BACKUP_FILE"
else
    print_warning "Erro ao criar backup de configurações"
fi

# 7. Criar arquivo de manifesto do backup
print_status "Criando manifesto do backup..."
MANIFEST_FILE="$BACKUP_DIR/manifest_$DATE.txt"

cat > "$MANIFEST_FILE" << EOF
Backup FolhaFácil - $DATE
=====================================

Data/Hora: $(date)
Servidor: $(hostname)
Versão Django: $(cd "$PROJECT_DIR" && source venv/bin/activate && python -c "import django; print(django.get_version())" 2>/dev/null || echo "N/A")

Arquivos de Backup:
- Projeto: folhafacil_$DATE.tar.gz
- Configurações: config_$DATE.tar.gz
- Mídia: media_$DATE.tar.gz
- Banco de dados: database_$DATE.sql

Tamanhos:
$(ls -lh "$BACKUP_DIR"/*"$DATE"* 2>/dev/null | awk '{print $5, $9}')

Verificação de Integridade:
$(md5sum "$BACKUP_DIR"/*"$DATE"* 2>/dev/null)

Status dos Serviços:
- Apache: $(systemctl is-active apache2 2>/dev/null || echo "inactive")
- Uso de disco: $(df -h "$PROJECT_DIR" | tail -1)

Logs de Erro (últimas 10 linhas):
$(tail -10 /var/log/apache2/folhafacil_error.log 2>/dev/null || echo "Log não encontrado")
EOF

print_success "Manifesto criado: $MANIFEST_FILE"

# 8. Limpar backups antigos
print_status "Limpando backups antigos..."
find "$BACKUP_DIR" -name "folhafacil_*.tar.gz" -mtime +$RETENTION_DAYS -delete
find "$BACKUP_DIR" -name "database_*.sql" -mtime +$RETENTION_DAYS -delete
find "$BACKUP_DIR" -name "media_*.tar.gz" -mtime +$RETENTION_DAYS -delete
find "$BACKUP_DIR" -name "config_*.tar.gz" -mtime +$RETENTION_DAYS -delete
find "$BACKUP_DIR" -name "manifest_*.txt" -mtime +$RETENTION_DAYS -delete

print_success "Backups com mais de $RETENTION_DAYS dias removidos"

# 9. Verificar espaço em disco
print_status "Verificando espaço em disco..."
BACKUP_USAGE=$(du -sh "$BACKUP_DIR" | cut -f1)
DISK_USAGE=$(df -h "$BACKUP_DIR" | tail -1 | awk '{print $5}')

print_status "Uso do diretório de backup: $BACKUP_USAGE"
print_status "Uso de disco: $DISK_USAGE"

# 10. Resumo final
echo ""
echo "======================================"
echo "📋 RESUMO DO BACKUP"
echo "======================================"

print_success "✅ Backup concluído com sucesso!"
echo ""
echo "📁 Arquivos criados:"
ls -lh "$BACKUP_DIR"/*"$DATE"* 2>/dev/null | awk '{print $5, $9}'
echo ""
echo "📊 Estatísticas:"
echo "   • Total de backups: $(ls "$BACKUP_DIR"/*.tar.gz 2>/dev/null | wc -l)"
echo "   • Total de bancos: $(ls "$BACKUP_DIR"/*.sql 2>/dev/null | wc -l)"
echo "   • Espaço usado: $BACKUP_USAGE"
echo "   • Retenção: $RETENTION_DAYS dias"
echo ""
echo "🔧 Para restaurar:"
echo "   • Projeto: tar -xzf $BACKUP_FILE -C /var/www/"
echo "   • Banco: sqlite3 database.sqlite3 < database_$DATE.sql"
echo "   • Config: tar -xzf config_$DATE.tar.gz -C /"
echo ""
echo "📅 Próximo backup automático:"
echo "   • Configure no cron: 0 2 * * * /path/to/backup_script.sh"
