# 🌐 Tutorial: Sincronizar Pasta Local com Branch Remoto do GitHub

Este tutorial ensina como conectar uma pasta local existente (`static`) com um branch remoto chamado `static` no GitHub. O objetivo é fazer com que essa pasta local possa receber atualizações diretamente com `git pull`.

## 💻 Etapas no Computador com Pasta Local Existente

### 1. Acesse a pasta local
```bash
cd /var/www/html/sistemas/static
```

### 2. Inicialize o repositório Git
```bash
git init
```

### 3. Adicione o repositório remoto
```bash
git remote add origin https://github.com/ViniciusBenevides/Projetos-JF.git
```

### 4. Baixe os branches remotos
```bash
git fetch origin
```

### 5. Troque para o branch `static`
```bash
git checkout -b static origin/static
```

🔎 *Esse comando cria o branch local `static` e o conecta ao remoto, permitindo atualizações com `git pull`.*

## 🔄 Atualizar a pasta futuramente
Uma vez sincronizado, basta executar:
```bash
git pull
```

E pronto! Sua pasta estará sempre atualizada com as mudanças do branch remoto.  
