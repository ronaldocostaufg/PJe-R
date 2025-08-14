import os
import re
import pandas as pd
from dateutil import parser
import pytesseract
import pdfplumber
import time
from django.conf import settings

import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config_tesseract import configurar_tesseract


def extrair_nome(texto):
    """
    Extrai nome do funcionário usando regex
    """
    # Padrões para extrair nomes
    padroes = [
        r'Nome:\s*([A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŸa-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\s]+)',
        r'Funcionário:\s*([A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŸa-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\s]+)',
        r'([A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŸ][a-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]+(?:\s+[A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŸ][a-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]+)+)',
    ]
    
    for padrao in padroes:
        match = re.search(padrao, texto)
        if match:
            nome = match.group(1).strip()
            # Limpar nome
            nome = re.sub(r'\s+', ' ', nome)
            return nome
    
    return "Nome não encontrado"


def extrair_cpf(texto):
    """
    Extrai CPF do funcionário usando regex
    """
    # Padrão para CPF (XXX.XXX.XXX-XX ou XXXXXXXXXXX)
    padroes = [
        r'CPF:\s*(\d{3}\.\d{3}\.\d{3}-\d{2})',
        r'CPF:\s*(\d{11})',
        r'(\d{3}\.\d{3}\.\d{3}-\d{2})',
        r'(\d{11})',
    ]
    
    for padrao in padroes:
        match = re.search(padrao, texto)
        if match:
            cpf = match.group(1).strip()
            # Formatar CPF se necessário
            if len(cpf) == 11:
                cpf = f"{cpf[:3]}.{cpf[3:6]}.{cpf[6:9]}-{cpf[9:]}"
            return cpf
    
    return "CPF não encontrado"


def formatar_cpf_para_nome_arquivo(cpf):
    """
    Remove pontos e traços do CPF para usar no nome do arquivo
    """
    if cpf == "CPF não encontrado":
        return "sem_cpf"
    
    # Remove pontos e traços
    cpf_limpo = cpf.replace('.', '').replace('-', '')
    
    # Verifica se tem 11 dígitos
    if len(cpf_limpo) == 11:
        return cpf_limpo
    else:
        return "cpf_invalido"


def extrair_horarios(texto):
    """
    Extrai e organiza horários por dia, suportando múltiplas entradas/saídas no mesmo dia.
    Retorna lista de registros com pares entrada/saída por data.
    """
    padrao_data = r'(\d{1,2}/\d{1,2}/\d{4})'
    padrao_horario = r'(\d{1,2}:\d{2}(?::\d{2})?)'

    linhas = texto.splitlines()
    mapa_data_para_horarios = {}
    ultima_data_detectada = None

    for linha in linhas:
        if not linha:
            continue
        datas_na_linha = re.findall(padrao_data, linha)
        horarios_na_linha = re.findall(padrao_horario, linha)

        if datas_na_linha:
            # Se houver mais de uma data na mesma linha, tratamos cada uma
            for data_str in datas_na_linha:
                ultima_data_detectada = data_str
                if data_str not in mapa_data_para_horarios:
                    mapa_data_para_horarios[data_str] = []
            # Associa horários que estejam nessa mesma linha com a última data da linha
            if horarios_na_linha and ultima_data_detectada:
                mapa_data_para_horarios[ultima_data_detectada].extend(horarios_na_linha)
        else:
            # Linhas sem data explícita: se houver horários e conhecemos a última data, associamos
            if horarios_na_linha and ultima_data_detectada:
                mapa_data_para_horarios[ultima_data_detectada].extend(horarios_na_linha)

    registros = []

    for data_str, lista_horarios in mapa_data_para_horarios.items():
        # Normaliza e ordena horários desse dia
        horarios_dt = []
        for h in lista_horarios:
            try:
                dt = parser.parse(f"{data_str} {h}", dayfirst=True)
                horarios_dt.append(dt)
            except Exception:
                continue

        horarios_dt = sorted(horarios_dt)

        # Faz o pareamento sequencial (1-2, 3-4, ...). Ignora último se ímpar
        for i in range(0, len(horarios_dt) - 1, 2):
            entrada_dt = horarios_dt[i]
            saida_dt = horarios_dt[i + 1]
            if entrada_dt < saida_dt:
                registros.append({'entrada': entrada_dt, 'saida': saida_dt})

    return registros


def calcular_horas_trabalhadas(entrada, saida):
    """
    Calcula horas trabalhadas entre entrada e saída
    """
    diferenca = saida - entrada
    
    # Converter para horas decimais
    horas_decimais = diferenca.total_seconds() / 3600
    
    # Formatar para HH:MM:SS
    horas = int(diferenca.total_seconds() // 3600)
    minutos = int((diferenca.total_seconds() % 3600) // 60)
    segundos = int(diferenca.total_seconds() % 60)
    
    horas_formatadas = f"{horas:02}:{minutos:02}:{segundos:02}"
    
    return {
        'horas_decimais': horas_decimais,
        'horas_formatadas': horas_formatadas,
        'diferenca': diferenca
    }


def limpar_arquivo_temporario(file_path, max_tentativas=5):
    """
    Tenta remover arquivo temporário com retry
    """
    for tentativa in range(max_tentativas):
        try:
            if os.path.exists(file_path):
                os.remove(file_path)
            return True
        except OSError as e:
            if tentativa < max_tentativas - 1:
                time.sleep(0.5)  # Aguardar 500ms antes da próxima tentativa
                continue
            else:
                # print(f"Erro ao remover arquivo temporário após {max_tentativas} tentativas: {e}")
                return False
    return False


def processar_pdf_sei(arquivo):
    """
    Processa PDF do SEI e extrai dados de catraca
    """
    file_path = None
    pdf = None
    
    try:
        # Configurar Tesseract
        tesseract_path = configurar_tesseract()
        if not tesseract_path:
            return {
                'success': False,
                'message': 'Tesseract OCR não encontrado. Por favor, instale o Tesseract OCR:\n'
                          'Windows: https://github.com/UB-Mannheim/tesseract/wiki\n'
                          'Linux: sudo apt-get install tesseract-ocr tesseract-ocr-por\n'
                          'macOS: brew install tesseract tesseract-lang'
            }
        
        # Criar diretório media se não existir
        media_dir = settings.MEDIA_ROOT
        os.makedirs(media_dir, exist_ok=True)
        
        # Salvar arquivo temporariamente
        file_path = os.path.join(media_dir, arquivo.name)
        with open(file_path, 'wb+') as destination:
            for chunk in arquivo.chunks():
                destination.write(chunk)
        
        # Extrair texto do PDF
        texto_completo = ""
        
        # Usar context manager para garantir que o PDF seja fechado
        with pdfplumber.open(file_path) as pdf:
            for pagina in pdf.pages:
                # Extrair texto "vivo"
                texto = pagina.extract_text() or ""
                if texto:
                    texto_completo += texto + "\n"

                # Se texto for escasso, usar OCR com melhor resolução
                if len(texto.strip()) < 50:
                    try:
                        page_image = pagina.to_image(resolution=300)
                        pil_image = page_image.original
                        # Normalização simples para OCR
                        if pil_image.mode != 'RGB':
                            pil_image = pil_image.convert('RGB')
                        pil_image = pil_image.convert('L')

                        # OCR principal (português)
                        texto_ocr = pytesseract.image_to_string(
                            pil_image,
                            lang='por',
                            config='--oem 1 --psm 6'
                        )
                        if not texto_ocr or len(texto_ocr.strip()) < 5:
                            # Fallback com português+inglês
                            texto_ocr = pytesseract.image_to_string(
                                pil_image,
                                lang='por+eng',
                                config='--oem 1 --psm 6'
                            )
                        if not texto_ocr or len(texto_ocr.strip()) < 5:
                            # fallback final com inglês
                            texto_ocr = pytesseract.image_to_string(
                                pil_image,
                                lang='eng',
                                config='--oem 1 --psm 6'
                            )
                        if texto_ocr:
                            texto_completo += texto_ocr + "\n"
                    except Exception as e:
                        # print(f"Erro no OCR: {e}")
                        pass
        
        # Extrair CPF do funcionário
        cpf = extrair_cpf(texto_completo)
        
        # Extrair horários
        horarios = extrair_horarios(texto_completo)
        
        # Processar registros por dia
        dados_por_dia = {}
        
        for registro in horarios:
            if registro['entrada'] < registro['saida']:
                calculo = calcular_horas_trabalhadas(registro['entrada'], registro['saida'])
                data = registro['entrada'].strftime('%d/%m/%Y')
                
                if data not in dados_por_dia:
                    dados_por_dia[data] = {
                        'horas_decimais': 0,
                        'registros': []
                    }
                
                dados_por_dia[data]['horas_decimais'] += calculo['horas_decimais']
                dados_por_dia[data]['registros'].append({
                    'entrada': registro['entrada'].strftime('%H:%M:%S'),
                    'saida': registro['saida'].strftime('%H:%M:%S'),
                    'horas_trabalhadas': calculo['horas_formatadas']
                })
        
        if not dados_por_dia:
            return {
                'success': False,
                'message': 'Nenhum registro válido encontrado no PDF'
            }
        
        # Criar DataFrame com dados por dia
        dados_finais = []
        
        for data, info in dados_por_dia.items():
            # Formatar total de horas do dia
            total_horas = info['horas_decimais']
            horas = int(total_horas // 1)
            minutos = int((total_horas % 1) * 60)
            segundos = int(((total_horas % 1) * 60 % 1) * 60)
            total_formatado = f"{horas:02}:{minutos:02}:{segundos:02}"
            
            # Garantir que o CPF esteja formatado com máscara
            cpf_formatado = cpf
            if cpf != "CPF não encontrado" and len(cpf.replace('.', '').replace('-', '')) == 11:
                cpf_limpo = cpf.replace('.', '').replace('-', '')
                cpf_formatado = f"{cpf_limpo[:3]}.{cpf_limpo[3:6]}.{cpf_limpo[6:9]}-{cpf_limpo[9:]}"
            
            dados_finais.append({
                'CPF': cpf_formatado,
                'Data_Dia': data,
                'Total_Horas_Trabalhadas': total_formatado
            })
        
        # Criar DataFrame
        df = pd.DataFrame(dados_finais)
        
        # Gerar nome do arquivo baseado no CPF
        cpf_arquivo = formatar_cpf_para_nome_arquivo(cpf)
        
        # Salvar arquivo CSV
        csv_path = os.path.join(media_dir, f'Total_Horas_{cpf_arquivo}.csv')
        df.to_csv(csv_path, index=False, encoding='utf-8-sig')
        
        # Salvar arquivo XLSX
        xlsx_path = os.path.join(media_dir, f'Total_Horas_{cpf_arquivo}.xlsx')
        with pd.ExcelWriter(xlsx_path, engine='openpyxl') as writer:
            df.to_excel(writer, sheet_name='Horas_Trabalhadas', index=False)
        
        return {
            'success': True,
            'message': f'PDF processado com sucesso! {len(dados_finais)} dias processados.',
            'arquivos_gerados': [
                f'Total_Horas_{cpf_arquivo}.csv',
                f'Total_Horas_{cpf_arquivo}.xlsx'
            ]
        }
        
    except Exception as e:
        return {
            'success': False,
            'message': f'Erro no processamento do PDF: {str(e)}'
        }
    finally:
        # Garantir que o arquivo temporário seja removido
        if file_path and os.path.exists(file_path):
            limpar_arquivo_temporario(file_path) 


def processar_pdf_sei_caminho(caminho_pdf: str):
    """
    Processa um PDF já existente no disco (ex.: em MEDIA_ROOT), útil para depuração
    e para lidar com PDFs adicionados manualmente na pasta media.
    Não altera nem remove o arquivo de origem.
    """
    try:
        # Configurar Tesseract
        tesseract_path = configurar_tesseract()
        if not tesseract_path:
            return {
                'success': False,
                'message': 'Tesseract OCR não encontrado. Por favor, instale o Tesseract OCR:\n'
                          'Windows: https://github.com/UB-Mannheim/tesseract/wiki\n'
                          'Linux: sudo apt-get install tesseract-ocr tesseract-ocr-por\n'
                          'macOS: brew install tesseract tesseract-lang'
            }

        if not os.path.exists(caminho_pdf):
            return {'success': False, 'message': 'Arquivo PDF não encontrado no caminho informado'}

        texto_completo = ""

        with pdfplumber.open(caminho_pdf) as pdf:
            for pagina in pdf.pages:
                texto = pagina.extract_text() or ""
                if texto:
                    texto_completo += texto + "\n"

                if len(texto.strip()) < 50:
                    try:
                        page_image = pagina.to_image(resolution=300)
                        pil_image = page_image.original
                        if pil_image.mode != 'RGB':
                            pil_image = pil_image.convert('RGB')
                        pil_image = pil_image.convert('L')
                        texto_ocr = pytesseract.image_to_string(
                            pil_image,
                            lang='por',
                            config='--oem 1 --psm 6'
                        )
                        if not texto_ocr or len(texto_ocr.strip()) < 5:
                            texto_ocr = pytesseract.image_to_string(
                                pil_image,
                                lang='por+eng',
                                config='--oem 1 --psm 6'
                            )
                        if not texto_ocr or len(texto_ocr.strip()) < 5:
                            texto_ocr = pytesseract.image_to_string(
                                pil_image,
                                lang='eng',
                                config='--oem 1 --psm 6'
                            )
                        if texto_ocr:
                            texto_completo += texto_ocr + "\n"
                    except Exception as e:
                        # print(f"Erro no OCR: {e}")
                        pass

        cpf = extrair_cpf(texto_completo)
        horarios = extrair_horarios(texto_completo)

        dados_por_dia = {}
        for registro in horarios:
            if registro['entrada'] < registro['saida']:
                calculo = calcular_horas_trabalhadas(registro['entrada'], registro['saida'])
                data = registro['entrada'].strftime('%d/%m/%Y')
                if data not in dados_por_dia:
                    dados_por_dia[data] = {'horas_decimais': 0, 'registros': []}
                dados_por_dia[data]['horas_decimais'] += calculo['horas_decimais']
                dados_por_dia[data]['registros'].append({
                    'entrada': registro['entrada'].strftime('%H:%M:%S'),
                    'saida': registro['saida'].strftime('%H:%M:%S'),
                    'horas_trabalhadas': calculo['horas_formatadas']
                })

        if not dados_por_dia:
            return {'success': False, 'message': 'Nenhum registro válido encontrado no PDF'}

        dados_finais = []
        for data, info in dados_por_dia.items():
            total_horas = info['horas_decimais']
            horas = int(total_horas // 1)
            minutos = int((total_horas % 1) * 60)
            segundos = int(((total_horas % 1) * 60 % 1) * 60)
            total_formatado = f"{horas:02}:{minutos:02}:{segundos:02}"

            cpf_formatado = cpf
            if cpf != "CPF não encontrado" and len(cpf.replace('.', '').replace('-', '')) == 11:
                cpf_limpo = cpf.replace('.', '').replace('-', '')
                cpf_formatado = f"{cpf_limpo[:3]}.{cpf_limpo[3:6]}.{cpf_limpo[6:9]}-{cpf_limpo[9:]}"

            dados_finais.append({'CPF': cpf_formatado, 'Data_Dia': data, 'Total_Horas_Trabalhadas': total_formatado})

        df = pd.DataFrame(dados_finais)

        media_dir = settings.MEDIA_ROOT
        os.makedirs(media_dir, exist_ok=True)
        cpf_arquivo = formatar_cpf_para_nome_arquivo(cpf)
        csv_path = os.path.join(media_dir, f'Total_Horas_{cpf_arquivo}.csv')
        xlsx_path = os.path.join(media_dir, f'Total_Horas_{cpf_arquivo}.xlsx')
        df.to_csv(csv_path, index=False, encoding='utf-8-sig')
        with pd.ExcelWriter(xlsx_path, engine='openpyxl') as writer:
            df.to_excel(writer, sheet_name='Horas_Trabalhadas', index=False)

        return {
            'success': True,
            'message': f'PDF processado com sucesso! {len(dados_finais)} dias processados.',
            'arquivos_gerados': [
                f'Total_Horas_{cpf_arquivo}.csv',
                f'Total_Horas_{cpf_arquivo}.xlsx'
            ]
        }
    except Exception as e:
        return {'success': False, 'message': f'Erro no processamento do PDF: {str(e)}'}