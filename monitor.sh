#!/bin/bash

# Script de Monitoramento para Folha Facil
# Execute como root ou com sudo

set -e

# Configurações
PROJECT_NAME="folhafacil"
PROJECT_PATH="/var/www/$PROJECT_NAME"
LOG_FILE="/var/log/folhafacil/monitor.log"
ALERT_EMAIL="admin@seudominio.com"

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Função para log
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" >> $LOG_FILE
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERRO: $1${NC}"
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] ERRO: $1" >> $LOG_FILE
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] AVISO: $1${NC}"
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] AVISO: $1" >> $LOG_FILE
}

# Função para enviar alerta por e-mail
send_alert() {
    local subject="$1"
    local message="$2"
    
    if command -v mail &> /dev/null; then
        echo "$message" | mail -s "$subject" $ALERT_EMAIL
    else
        warn "Comando 'mail' não encontrado. Instale o pacote 'mailutils' para receber alertas por e-mail."
    fi
}

# Verificar se está rodando como root
if [ "$EUID" -ne 0 ]; then
    error "Este script deve ser executado como root ou com sudo"
fi

# Criar diretório de log se não existir
mkdir -p $(dirname $LOG_FILE)

log "Iniciando monitoramento do $PROJECT_NAME..."

# Contador de problemas
PROBLEMS=0

# 1. Verificar se os serviços estão rodando
log "Verificando serviços..."

# Verificar Django/Gunicorn
if ! systemctl is-active --quiet folhafacil; then
    error "Serviço folhafacil não está rodando"
    systemctl restart folhafacil
    send_alert "Folha Facil - Serviço Parado" "O serviço folhafacil foi reiniciado automaticamente."
    PROBLEMS=$((PROBLEMS + 1))
else
    log "✓ Serviço folhafacil está rodando"
fi

# Verificar Nginx
if ! systemctl is-active --quiet nginx; then
    error "Serviço nginx não está rodando"
    systemctl restart nginx
    send_alert "Folha Facil - Nginx Parado" "O serviço nginx foi reiniciado automaticamente."
    PROBLEMS=$((PROBLEMS + 1))
else
    log "✓ Serviço nginx está rodando"
fi

# Verificar PostgreSQL
if ! systemctl is-active --quiet postgresql; then
    error "Serviço postgresql não está rodando"
    systemctl restart postgresql
    send_alert "Folha Facil - PostgreSQL Parado" "O serviço postgresql foi reiniciado automaticamente."
    PROBLEMS=$((PROBLEMS + 1))
else
    log "✓ Serviço postgresql está rodando"
fi

# 2. Verificar uso de recursos
log "Verificando uso de recursos..."

# Verificar uso de disco
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 90 ]; then
    error "Uso de disco crítico: ${DISK_USAGE}%"
    send_alert "Folha Facil - Disco Crítico" "Uso de disco está em ${DISK_USAGE}%. Ação imediata necessária."
    PROBLEMS=$((PROBLEMS + 1))
elif [ $DISK_USAGE -gt 80 ]; then
    warn "Uso de disco alto: ${DISK_USAGE}%"
    PROBLEMS=$((PROBLEMS + 1))
else
    log "✓ Uso de disco: ${DISK_USAGE}%"
fi

# Verificar uso de memória
MEM_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
if [ $MEM_USAGE -gt 90 ]; then
    error "Uso de memória crítico: ${MEM_USAGE}%"
    send_alert "Folha Facil - Memória Crítica" "Uso de memória está em ${MEM_USAGE}%. Ação imediata necessária."
    PROBLEMS=$((PROBLEMS + 1))
elif [ $MEM_USAGE -gt 80 ]; then
    warn "Uso de memória alto: ${MEM_USAGE}%"
    PROBLEMS=$((PROBLEMS + 1))
else
    log "✓ Uso de memória: ${MEM_USAGE}%"
fi

# Verificar uso de CPU
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')
if (( $(echo "$CPU_USAGE > 90" | bc -l) )); then
    error "Uso de CPU crítico: ${CPU_USAGE}%"
    send_alert "Folha Facil - CPU Crítica" "Uso de CPU está em ${CPU_USAGE}%. Ação imediata necessária."
    PROBLEMS=$((PROBLEMS + 1))
elif (( $(echo "$CPU_USAGE > 80" | bc -l) )); then
    warn "Uso de CPU alto: ${CPU_USAGE}%"
    PROBLEMS=$((PROBLEMS + 1))
else
    log "✓ Uso de CPU: ${CPU_USAGE}%"
fi

# 3. Verificar conectividade da aplicação
log "Verificando conectividade da aplicação..."

# Testar se a aplicação está respondendo
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
    log "✓ Aplicação está respondendo corretamente"
else
    error "Aplicação não está respondendo"
    send_alert "Folha Facil - Aplicação Indisponível" "A aplicação não está respondendo às requisições HTTP."
    PROBLEMS=$((PROBLEMS + 1))
fi

# 4. Verificar banco de dados
log "Verificando banco de dados..."

# Testar conexão com o banco
if sudo -u www-data python3 -c "
import os
import sys
sys.path.append('$PROJECT_PATH')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'folhafacil.settings_production')
import django
django.setup()
from django.db import connection
with connection.cursor() as cursor:
    cursor.execute('SELECT 1')
    result = cursor.fetchone()
print('Database OK')
" 2>/dev/null; then
    log "✓ Conexão com banco de dados OK"
else
    error "Problema na conexão com banco de dados"
    send_alert "Folha Facil - Problema no Banco" "Não foi possível conectar ao banco de dados."
    PROBLEMS=$((PROBLEMS + 1))
fi

# 5. Verificar logs por erros
log "Verificando logs por erros..."

# Verificar logs do Django por erros nas últimas 10 linhas
if [ -f "/var/log/folhafacil/django.log" ]; then
    ERROR_COUNT=$(tail -10 /var/log/folhafacil/django.log | grep -i "error\|exception\|traceback" | wc -l)
    if [ $ERROR_COUNT -gt 0 ]; then
        warn "Encontrados $ERROR_COUNT erros nos logs do Django"
        PROBLEMS=$((PROBLEMS + 1))
    else
        log "✓ Logs do Django sem erros recentes"
    fi
fi

# Verificar logs do Gunicorn por erros
if [ -f "/var/log/folhafacil/gunicorn_error.log" ]; then
    ERROR_COUNT=$(tail -10 /var/log/folhafacil/gunicorn_error.log | grep -i "error\|exception\|traceback" | wc -l)
    if [ $ERROR_COUNT -gt 0 ]; then
        warn "Encontrados $ERROR_COUNT erros nos logs do Gunicorn"
        PROBLEMS=$((PROBLEMS + 1))
    else
        log "✓ Logs do Gunicorn sem erros recentes"
    fi
fi

# 6. Verificar tamanho dos logs
log "Verificando tamanho dos logs..."

# Verificar se os logs não estão muito grandes
for log_file in /var/log/folhafacil/*.log; do
    if [ -f "$log_file" ]; then
        LOG_SIZE=$(du -m "$log_file" | cut -f1)
        if [ $LOG_SIZE -gt 100 ]; then
            warn "Log $log_file está muito grande: ${LOG_SIZE}MB"
            PROBLEMS=$((PROBLEMS + 1))
        fi
    fi
done

# 7. Verificar processos
log "Verificando processos..."

# Verificar se há processos zumbi
ZOMBIE_COUNT=$(ps aux | grep -i zombie | grep -v grep | wc -l)
if [ $ZOMBIE_COUNT -gt 0 ]; then
    warn "Encontrados $ZOMBIE_COUNT processos zumbi"
    PROBLEMS=$((PROBLEMS + 1))
else
    log "✓ Nenhum processo zumbi encontrado"
fi

# 8. Verificar conectividade de rede
log "Verificando conectividade de rede..."

# Testar conectividade com internet
if ping -c 1 8.8.8.8 &> /dev/null; then
    log "✓ Conectividade de rede OK"
else
    warn "Problema de conectividade de rede"
    PROBLEMS=$((PROBLEMS + 1))
fi

# Resumo final
log "=== Resumo do Monitoramento ==="
log "Problemas encontrados: $PROBLEMS"

if [ $PROBLEMS -eq 0 ]; then
    log "🎉 Sistema funcionando perfeitamente!"
    echo "OK" > /tmp/folhafacil_status
else
    warn "⚠️  Encontrados $PROBLEMS problema(s) que requerem atenção"
    echo "PROBLEMS" > /tmp/folhafacil_status
fi

# Mostrar estatísticas
echo ""
echo "=== Estatísticas do Sistema ==="
echo "Uso de Disco: ${DISK_USAGE}%"
echo "Uso de Memória: ${MEM_USAGE}%"
echo "Uso de CPU: ${CPU_USAGE}%"
echo "Problemas Detectados: $PROBLEMS"
echo ""

# Salvar status para outros scripts
echo "$(date),$PROBLEMS,$DISK_USAGE,$MEM_USAGE,$CPU_USAGE" >> /var/log/folhafacil/monitor_stats.csv

log "Monitoramento concluído. Log salvo em: $LOG_FILE" 