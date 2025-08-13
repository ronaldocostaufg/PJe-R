#!/bin/bash

# Script de Backup para Folha Facil
# Execute como root ou com sudo

set -e

# Configurações
PROJECT_NAME="folhafacil"
PROJECT_PATH="/var/www/$PROJECT_NAME"
BACKUP_DIR="/var/backups/$PROJECT_NAME"
DB_NAME="folhafacil"
DB_USER="folhafacil_user"
RETENTION_DAYS=30

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

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

# Criar diretório de backup se não existir
mkdir -p $BACKUP_DIR

# Data e hora do backup
BACKUP_DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="backup_${BACKUP_DATE}"

log "Iniciando backup do $PROJECT_NAME..."

# Backup do banco de dados
log "Fazendo backup do banco de dados..."
sudo -u postgres pg_dump $DB_NAME > $BACKUP_DIR/${BACKUP_FILE}.sql

# Verificar se o backup foi criado
if [ ! -f $BACKUP_DIR/${BACKUP_FILE}.sql ]; then
    error "Falha ao criar backup do banco de dados"
fi

# Comprimir backup do banco
gzip $BACKUP_DIR/${BACKUP_FILE}.sql

# Backup dos arquivos de configuração
log "Fazendo backup dos arquivos de configuração..."
tar -czf $BACKUP_DIR/${BACKUP_FILE}_config.tar.gz \
    -C $PROJECT_PATH \
    .env \
    gunicorn.conf.py \
    requirements.txt \
    folhafacil/settings_production.py \
    folhafacil/wsgi_production.py \
    monitor/migrations/ \
    2>/dev/null || warn "Alguns arquivos de configuração não foram encontrados"

# Backup dos logs
log "Fazendo backup dos logs..."
tar -czf $BACKUP_DIR/${BACKUP_FILE}_logs.tar.gz \
    -C /var/log \
    folhafacil/ \
    2>/dev/null || warn "Logs não foram encontrados"

# Backup dos arquivos estáticos
log "Fazendo backup dos arquivos estáticos..."
if [ -d $PROJECT_PATH/staticfiles ]; then
    tar -czf $BACKUP_DIR/${BACKUP_FILE}_static.tar.gz \
        -C $PROJECT_PATH \
        staticfiles/
else
    warn "Diretório de arquivos estáticos não encontrado"
fi

# Criar arquivo de metadados do backup
log "Criando metadados do backup..."
cat > $BACKUP_DIR/${BACKUP_FILE}_metadata.txt << EOF
Backup do Folha Facil
Data: $(date)
Versão do Django: $(cd $PROJECT_PATH && source venv/bin/activate && python -c "import django; print(django.get_version())")
Tamanho do banco: $(du -h $BACKUP_DIR/${BACKUP_FILE}.sql.gz | cut -f1)
Arquivos incluídos:
- Banco de dados: ${BACKUP_FILE}.sql.gz
- Configurações: ${BACKUP_FILE}_config.tar.gz
- Logs: ${BACKUP_FILE}_logs.tar.gz
- Estáticos: ${BACKUP_FILE}_static.tar.gz
EOF

# Limpar backups antigos
log "Limpando backups antigos (mais de $RETENTION_DAYS dias)..."
find $BACKUP_DIR -name "backup_*" -type f -mtime +$RETENTION_DAYS -delete

# Verificar espaço em disco
DISK_USAGE=$(df $BACKUP_DIR | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 80 ]; then
    warn "Uso de disco alto: ${DISK_USAGE}%. Considere limpar backups antigos."
fi

# Calcular tamanho total do backup
TOTAL_SIZE=$(du -sh $BACKUP_DIR/${BACKUP_FILE}* | awk '{sum+=$1} END {print sum}')
log "Backup concluído! Tamanho total: $TOTAL_SIZE"

# Listar backups disponíveis
log "Backups disponíveis:"
ls -lh $BACKUP_DIR/backup_* | tail -5

log "=== Backup concluído com sucesso! ==="
log "Localização: $BACKUP_DIR"
log "Arquivos criados:"
ls -la $BACKUP_DIR/${BACKUP_FILE}*

# Função para restore (comentada para segurança)
restore_instructions() {
    echo ""
    echo "=== INSTRUÇÕES PARA RESTORE ==="
    echo "Para restaurar o backup, use os seguintes comandos:"
    echo ""
    echo "1. Parar a aplicação:"
    echo "   sudo systemctl stop folhafacil"
    echo ""
    echo "2. Restaurar banco de dados:"
    echo "   gunzip $BACKUP_DIR/${BACKUP_FILE}.sql.gz"
    echo "   sudo -u postgres psql $DB_NAME < $BACKUP_DIR/${BACKUP_FILE}.sql"
    echo ""
    echo "3. Restaurar configurações (se necessário):"
    echo "   tar -xzf $BACKUP_DIR/${BACKUP_FILE}_config.tar.gz -C $PROJECT_PATH"
    echo ""
    echo "4. Reiniciar aplicação:"
    echo "   sudo systemctl start folhafacil"
    echo ""
    echo "5. Verificar se tudo está funcionando:"
    echo "   sudo systemctl status folhafacil"
    echo "   curl -I http://localhost"
}

# Mostrar instruções de restore
restore_instructions 