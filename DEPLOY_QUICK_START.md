# 🚀 Deploy Rápido - FolhaFácil Linux Apache

## 📋 Passos Rápidos

### 1. Preparar Arquivos
```bash
# No Windows: Compacte toda a pasta Folha
# Transfira para o servidor Linux
```

### 2. No Servidor Linux
```bash
# Extrair e mover
sudo mv /caminho/para/Folha.zip /tmp/
cd /tmp && unzip Folha.zip
sudo mv Folha /var/www/folhafacil
cd /var/www/folhafacil

# Dar permissão de execução
chmod +x deploy_linux.sh

# Executar deploy automático
sudo ./deploy_linux.sh
```

### 3. Verificar Deploy
```bash
# Executar verificação
chmod +x check_deploy.sh
sudo ./check_deploy.sh
```

## 🌐 URLs de Acesso

Após o deploy:
- **Monitor**: `http://IP-DO-SERVIDOR/folhafacil/monitor/`
- **Horas**: `http://IP-DO-SERVIDOR/folhafacil/horas/`
- **Admin**: `http://IP-DO-SERVIDOR/admin/`

## 🔧 Comandos Úteis

```bash
# Ver logs
sudo tail -f /var/log/apache2/folhafacil_error.log

# Reiniciar Apache
sudo systemctl restart apache2

# Verificar status
sudo systemctl status apache2

# Backup manual
sudo ./backup_script.sh
```

## ⚠️ Importante

1. **Substitua** `IP-DO-SERVIDOR` pelo IP real do seu servidor
2. **Configure** SSL/HTTPS para produção
3. **Ajuste** as configurações de e-mail no arquivo `.env`
4. **Monitore** os logs regularmente

## 📞 Problemas?

1. Verifique os logs: `sudo tail -f /var/log/apache2/folhafacil_error.log`
2. Execute o script de verificação: `sudo ./check_deploy.sh`
3. Consulte o `README_DEPLOY.md` para troubleshooting detalhado
