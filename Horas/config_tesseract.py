"""
Configuração do Tesseract OCR para processamento de PDFs
"""

import os
import platform


def _set_pytesseract_cmd(caminho: str) -> None:
    """
    Garante que o pytesseract use explicitamente o binário encontrado do Tesseract.
    """
    try:
        import pytesseract  # import local para evitar dependência no import do módulo
        pytesseract.pytesseract.tesseract_cmd = caminho
    except Exception as _:
        # Se não conseguir setar, ao menos mantém a variável de ambiente
        return

def configurar_tesseract():
    """
    Configura o caminho do Tesseract baseado no sistema operacional
    """
    sistema = platform.system()
    
    if sistema == "Windows":
        # Caminhos comuns do Tesseract no Windows
        caminhos_windows = [
            r"C:\Program Files\Tesseract-OCR\tesseract.exe",
            r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe",
            r"C:\Users\{}\AppData\Local\Programs\Tesseract-OCR\tesseract.exe".format(os.getenv('USERNAME')),
        ]
        
        for caminho in caminhos_windows:
            if os.path.exists(caminho):
                os.environ['TESSERACT_CMD'] = caminho
                _set_pytesseract_cmd(caminho)
                return caminho
    
    elif sistema == "Darwin":  # macOS
        # Tesseract geralmente está em /usr/local/bin/tesseract no macOS
        caminho_macos = "/usr/local/bin/tesseract"
        if os.path.exists(caminho_macos):
            os.environ['TESSERACT_CMD'] = caminho_macos
            _set_pytesseract_cmd(caminho_macos)
            return caminho_macos
    
    elif sistema == "Linux":
        # Tesseract geralmente está em /usr/bin/tesseract no Linux
        caminho_linux = "/usr/bin/tesseract"
        if os.path.exists(caminho_linux):
            os.environ['TESSERACT_CMD'] = caminho_linux
            _set_pytesseract_cmd(caminho_linux)
            return caminho_linux
    
    return None

def verificar_instalacao_tesseract():
    """
    Verifica se o Tesseract está instalado e configurado
    """
    try:
        import pytesseract
        caminho = configurar_tesseract()
        
        if caminho:
            # print(f"✅ Tesseract encontrado em: {caminho}")
            return True
        else:
            # print("❌ Tesseract não encontrado. Instale o Tesseract OCR:")
            # print("   Windows: https://github.com/UB-Mannheim/tesseract/wiki")
            # print("   Linux: sudo apt-get install tesseract-ocr tesseract-ocr-por")
            # print("   macOS: brew install tesseract tesseract-lang")
            return False
            
    except ImportError:
        # print("❌ pytesseract não está instalado. Execute:")
        # print("   pip install pytesseract")
        return False

if __name__ == "__main__":
    verificar_instalacao_tesseract() 