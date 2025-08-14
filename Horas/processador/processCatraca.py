import os
import re
import pandas as pd
from datetime import timedelta
import time
from django.conf import settings


def extrair_nome_catraca(texto):
    """
    Extrai nome do funcionário de dados de catraca
    """
    # Padrões para nomes em dados de catraca
    padroes = [
        r'([A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŸ][a-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]+(?:\s+[A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŸ][a-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]+)+)',
        r'Nome:\s*([A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŸa-zàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\s]+)',
    ]
    
    for padrao in padroes:
        match = re.search(padrao, str(texto))
        if match:
            nome = match.group(1).strip()
            # Limpar nome
            nome = re.sub(r'\s+', ' ', nome)
            return nome
    
    return "Nome não encontrado"


def formatar_cpf_para_nome_arquivo(cpf):
    """
    Remove pontos e traços do CPF para usar no nome do arquivo
    """
    if not cpf or cpf == "CPF não encontrado":
        return "sem_cpf"
    
    # Remove pontos e traços
    cpf_limpo = str(cpf).replace('.', '').replace('-', '')
    
    # Verifica se tem 11 dígitos
    if len(cpf_limpo) == 11:
        return cpf_limpo
    else:
        return "cpf_invalido"


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


def processar_csv_catraca(arquivo):
    """
    Processa arquivo CSV de catraca eletrônica
    """
    file_path = None
    
    try:
        # Criar diretório media se não existir
        media_dir = settings.MEDIA_ROOT
        os.makedirs(media_dir, exist_ok=True)
        
        # Salvar arquivo temporariamente
        file_path = os.path.join(media_dir, arquivo.name)
        with open(file_path, 'wb+') as destination:
            for chunk in arquivo.chunks():
                destination.write(chunk)
        
        # Ler arquivo CSV
        try:
            # Tentar ler com diferentes configurações
            df = pd.read_csv(
                file_path,
                sep=";",
                skiprows=5,  # Pular linhas de cabeçalho
                names=["CPF", "Doc. Prov.", "Sentido", "Cartao", "Catraca", "Horario do Evento"],
                encoding='utf-8'
            )
        except pd.errors.EmptyDataError:
            try:
                df = pd.read_csv(
                    file_path,
                    sep=",",
                    skiprows=5,
                    names=["CPF", "Doc. Prov.", "Sentido", "Cartao", "Catraca", "Horario do Evento"],
                    encoding='utf-8'
                )
            except pd.errors.EmptyDataError:
                df = pd.read_csv(
                    file_path,
                    sep="\t",
                    skiprows=5,
                    names=["CPF", "Doc. Prov.", "Sentido", "Cartao", "Catraca", "Horario do Evento"],
                    encoding='utf-8'
                )
        
        if df.empty:
            return {
                'success': False,
                'message': 'Arquivo CSV vazio ou sem dados válidos'
            }
        
        # Limpar dados
        df = df.dropna(subset=['CPF', 'Horario do Evento'])
        
        # Converter horários para datetime
        df['Horario do Evento'] = pd.to_datetime(df['Horario do Evento'], format='%d/%m/%Y %H:%M:%S', errors='coerce')
        
        # Remover registros com horários inválidos
        df = df.dropna(subset=['Horario do Evento'])
        
        if df.empty:
            return {
                'success': False,
                'message': 'Nenhum registro com horário válido encontrado'
            }
        
        # Agrupar por CPF e data para calcular entrada/saída
        df['Data'] = df['Horario do Evento'].dt.date
        df['Hora'] = df['Horario do Evento'].dt.time
        
        # Ordenar por CPF, data e hora
        df = df.sort_values(['CPF', 'Data', 'Hora'])
        
        # Calcular entrada e saída por dia
        registros_processados = []
        
        for (cpf, _), grupo in df.groupby(['CPF', 'Data']):
            if len(grupo) >= 2:
                # Primeiro registro como entrada, último como saída
                entrada = grupo.iloc[0]['Horario do Evento']
                saida = grupo.iloc[-1]['Horario do Evento']
                
                # Calcular diferença
                if entrada < saida:
                    diferenca = saida - entrada
                    horas_decimais = diferenca.total_seconds() / 3600
                    
                    # Formatar horas
                    horas = int(diferenca.total_seconds() // 3600)
                    minutos = int((diferenca.total_seconds() % 3600) // 60)
                    segundos = int(diferenca.total_seconds() % 60)
                    horas_formatadas = f"{horas:02}:{minutos:02}:{segundos:02}"
                    
                    # Extrair nome (usar primeiro registro do grupo)
                    nome = extrair_nome_catraca(grupo.iloc[0]['Doc. Prov.'])
                    
                    registros_processados.append({
                        'CPF': cpf,
                        'Nome': nome,
                        'Matrícula': grupo.iloc[0]['Cartao'],
                        'Data': entrada.strftime('%d/%m/%Y'),
                        'Entrada': entrada.strftime('%H:%M:%S'),
                        'Saída': saida.strftime('%H:%M:%S'),
                        'Horas Trabalhadas': horas_formatadas,
                        'Horas Decimais': horas_decimais,
                        'Dia da Semana': entrada.weekday() + 1,
                        'Local': grupo.iloc[0]['Catraca']
                    })
        
        if not registros_processados:
            return {
                'success': False,
                'message': 'Nenhum registro válido encontrado para processamento'
            }
        
        # Criar DataFrame com resultados
        df_resultados = pd.DataFrame(registros_processados)
        
        # Calcular totais por funcionário e data (não por dia da semana)
        if not df_resultados.empty:
            # Agrupar por CPF e Data para calcular total de horas por dia
            total_horas = df_resultados.groupby(['CPF', 'Data'])['Horas Decimais'].sum().reset_index()
            
            # Formatar horas para HH:MM:SS
            def formatar_horas(horas_decimais):
                horas = int(horas_decimais // 1)
                minutos = int((horas_decimais % 1) * 60)
                segundos = int(((horas_decimais % 1) * 60 % 1) * 60)
                return f"{horas:02}:{minutos:02}:{segundos:02}"
            
            total_horas['Total_Horas_Trabalhadas'] = total_horas['Horas Decimais'].apply(formatar_horas)
            
            # Renomear colunas para padronizar
            total_horas = total_horas.rename(columns={'Data': 'Data_Dia'})
            
            # Selecionar apenas os campos padronizados
            total_horas = total_horas[['CPF', 'Data_Dia', 'Total_Horas_Trabalhadas']]
            
            # Formatar CPF com máscara
            def formatar_cpf_mascara(cpf):
                cpf_str = str(cpf).replace('.', '').replace('-', '')
                if len(cpf_str) == 11:
                    return f"{cpf_str[:3]}.{cpf_str[3:6]}.{cpf_str[6:9]}-{cpf_str[9:]}"
                return cpf
            
            total_horas['CPF'] = total_horas['CPF'].apply(formatar_cpf_mascara)
            
            # Pegar o primeiro CPF para nomear o arquivo
            primeiro_cpf = total_horas['CPF'].iloc[0] if not total_horas.empty else "sem_cpf"
            cpf_arquivo = formatar_cpf_para_nome_arquivo(primeiro_cpf)
            
            # Salvar arquivo CSV
            csv_path = os.path.join(media_dir, f'Total_Horas_{cpf_arquivo}.csv')
            total_horas.to_csv(csv_path, index=False, encoding='utf-8-sig')
            
            # Salvar arquivo XLSX
            xlsx_path = os.path.join(media_dir, f'Total_Horas_{cpf_arquivo}.xlsx')
            with pd.ExcelWriter(xlsx_path, engine='openpyxl') as writer:
                total_horas.to_excel(writer, sheet_name='Horas_Trabalhadas', index=False)
        
        return {
            'success': True,
            'message': f'CSV processado com sucesso! {len(registros_processados)} registros encontrados.',
            'arquivos_gerados': [
                f'Total_Horas_{cpf_arquivo}.csv',
                f'Total_Horas_{cpf_arquivo}.xlsx'
            ]
        }
        
    except (pd.errors.EmptyDataError, pd.errors.ParserError) as e:
        return {
            'success': False,
            'message': f'Erro ao ler o arquivo CSV: {str(e)}'
        }
    except OSError as e:
        return {
            'success': False,
            'message': f'Erro ao manipular o arquivo: {str(e)}'
        }
    except Exception as e:
        return {
            'success': False,
            'message': f'Erro inesperado no processamento do CSV: {str(e)}'
        }
    finally:
        # Garantir que o arquivo temporário seja removido
        if file_path and os.path.exists(file_path):
            limpar_arquivo_temporario(file_path)


def calcular_horas_extras(df_resultados):
    """
    Calcula horas extras baseado em jornada padrão de 8 horas
    """
    if df_resultados.empty:
        return pd.DataFrame()
    
    # Jornada padrão de 8 horas
    jornada_padrao = 8.0
    
    # Calcular horas extras por funcionário e dia
    df_extras = df_resultados.copy()
    df_extras['Horas Extras'] = df_extras['Horas Decimais'] - jornada_padrao
    df_extras['Horas Extras'] = df_extras['Horas Extras'].apply(lambda x: max(0, x))
    
    # Agrupar por CPF e somar horas extras
    total_extras = df_extras.groupby(['CPF', 'Nome'])['Horas Extras'].sum().reset_index()
    total_extras['Total Horas Extras'] = total_extras['Horas Extras'].apply(
        lambda x: str(timedelta(hours=x))
    )
    
    return total_extras 