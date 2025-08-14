#!/usr/bin/env python3
"""
Script de setup para o Sistema de Processamento de Horas Extras - UFG
"""

import os
import sys
import subprocess
import platform

def verificar_python():
    """Verifica se o Python está instalado na versão correta"""
    if sys.version_info < (3, 8):
        # print("❌ Python 3.8+ é necessário. Versão atual:", sys.version)
        return False
    # print(f"✅ Python {sys.version.split()[0]} encontrado")
    return True

def criar_ambiente_virtual():
    """Cria ambiente virtual se não existir"""
    if not os.path.exists("venv"):
        # print("📦 Criando ambiente virtual...")
        subprocess.run([sys.executable, "-m", "venv", "venv"])
        # print("✅ Ambiente virtual criado")
    else:
        # print("✅ Ambiente virtual já existe")
        pass

def instalar_dependencias():
    """Instala as dependências do projeto"""
    # print("📦 Instalando dependências...")
    
    # Determinar o comando pip correto
    if platform.system() == "Windows":
        pip_cmd = "venv\\Scripts\\pip"
    else:
        pip_cmd = "venv/bin/pip"
    
    try:
        subprocess.run([pip_cmd, "install", "-r", "requirements.txt"], check=True)
        # print("✅ Dependências instaladas com sucesso")
        return True
    except subprocess.CalledProcessError as e:
        # print(f"❌ Erro ao instalar dependências: {e}")
        return False

def verificar_tesseract():
    """Verifica se o Tesseract está instalado"""
    try:
        from config_tesseract import verificar_instalacao_tesseract
        return verificar_instalacao_tesseract()
    except ImportError:
        # print("❌ Erro ao verificar Tesseract")
        return False

def executar_migracoes():
    """Executa as migrações do Django"""
    # print("🗄️ Executando migrações...")
    
    # Determinar o comando python correto
    if platform.system() == "Windows":
        python_cmd = "venv\\Scripts\\python"
    else:
        python_cmd = "venv/bin/python"
    
    try:
        subprocess.run([python_cmd, "manage.py", "migrate"], check=True)
        # print("✅ Migrações executadas com sucesso")
        return True
    except subprocess.CalledProcessError as e:
        # print(f"❌ Erro ao executar migrações: {e}")
        return False

def criar_diretorios():
    """Cria diretórios necessários"""
    diretorios = ["media", "static", "templates"]
    
    for diretorio in diretorios:
        if not os.path.exists(diretorio):
            os.makedirs(diretorio)
            # print(f"📁 Diretório {diretorio} criado")

def mostrar_instrucoes():
    """Mostra instruções de uso"""
    # print("\n" + "="*60)
    # print("🎉 SETUP CONCLUÍDO COM SUCESSO!")
    # print("="*60)
    # print("\n📋 Para iniciar a aplicação:")
    
    if platform.system() == "Windows":
        # print("   1. Ative o ambiente virtual:")
        # print("      venv\\Scripts\\activate")
        # print("\n   2. Inicie o servidor:")
        # print("      python manage.py runserver")
        pass
    else:
        # print("   1. Ative o ambiente virtual:")
        # print("      source venv/bin/activate")
        # print("\n   2. Inicie o servidor:")
        # print("      python manage.py runserver")
        pass
    
    # print("\n   3. Acesse no navegador:")
    # print("      http://localhost:8000")
    # print("\n📁 Arquivo de exemplo disponível:")
    # print("      exemplo_catraca.csv")
    # print("\n🔧 Para processar arquivos:")
    # print("   - PDFs do sistema SEI")
    # print("   - CSVs de catraca eletrônica")
    # print("\n" + "="*60)

def main():
    """Função principal do setup"""
    # print("🚀 Iniciando setup do Sistema de Processamento de Horas Extras - UFG")
    # print("="*60)
    
    # Verificações iniciais
    if not verificar_python():
        return False
    
    # Setup do ambiente
    criar_ambiente_virtual()
    criar_diretorios()
    
    # Instalação de dependências
    if not instalar_dependencias():
        return False
    
    # Verificação do Tesseract
    verificar_tesseract()
    
    # Migrações do Django
    if not executar_migracoes():
        return False
    
    # Instruções finais
    mostrar_instrucoes()
    
    return True

if __name__ == "__main__":
    success = main()
    if not success:
        # print("\n❌ Setup falhou. Verifique os erros acima.")
        sys.exit(1) 