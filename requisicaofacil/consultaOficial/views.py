from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.decorators.http import require_GET
from django.db.models.expressions import RawSQL
from django.db.models.query import QuerySet
from django.db.models import Q
import re
import logging
logger = logging.getLogger("consulta")


def index(request):
    return render(request, "index_consultaOficial.html")

#
### Consultando o BD
def is_valid_codigo(codigo) -> bool:
    """
    Valida se o código é válido (começa com 30 e é numérico)
    """
    try:
        codigo_str = str(codigo).strip()
        return codigo_str.startswith('30') and codigo_str.isdigit()
    except:
        return False


def sanitize_search_text(text: str) -> str:
    """
    Remove comandos SQL maliciosos de uma string sem remover acentos ou caracteres especiais.
    """

    # Lista de palavras-chave SQL que queremos bloquear
    sql_keywords = ['DROP', 'DELETE', 'UPDATE', 'INSERT', 'TRUNCATE', 'ALTER', 'REPLACE', 'CREATE', 'EXEC', 'GRANT', 'REVOKE']

    # Converte o texto para maiúsculas para facilitar a detecção de palavras-chave
    text_upper = text.upper()

    # Para cada palavra-chave SQL, substitui as ocorrências no texto original por uma string vazia
    for keyword in sql_keywords:
        # Criando uma regex que procura a palavra-chave com possíveis espaços e pontuação ao redor
        pattern = r'\b' + re.escape(keyword) + r'\b'
        text = re.sub(pattern, '', text_upper, flags=re.IGNORECASE)  # Substitui no texto original (case insensitive)

    return text


def apply_filters(queryset:QuerySet, param: dict) -> QuerySet:
    """
    Aplica filtros ao queryset baseado nos parâmetros
    """
    
    # Filtro por código
    if param['codigo']:
        if is_valid_codigo(param['codigo']):
            queryset = queryset.filter(CO_MAT__startswith=param['codigo'])
        else:
            raise ValueError("O código de materiais deve começar com '30'.")
    
    if param.get('descricao'):
        descricao = sanitize_search_text(param['descricao'])

        # Define accent and punctuation map
        accent_map_from = 'ÇÇççÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÃÕ,.:;'
        accent_map_to   = 'CCCCAEIOUAEIOUAEIOUAO    '

        field_sql = f"""INSTR(
            UPPER(TRANSLATE(DE_MAT, '{accent_map_from}', '{accent_map_to}')),
            UPPER(TRANSLATE(%s, '{accent_map_from}', '{accent_map_to}'))
        ) > 0"""

        queryset = queryset.extra(
            where=[field_sql],
            params=[descricao]
        )

    
    # Filtro por saldo
    if param['saldo_filter'] and param['saldo']:
        try:
            saldo_value = int(param['saldo'])
            
            if param['saldo_filter'] == "menorq":
                queryset = queryset.filter(QT_SALDO_ATU__lt=saldo_value)
            elif param['saldo_filter'] == "maiorq":
                queryset = queryset.filter(QT_SALDO_ATU__gt=saldo_value)
            elif param['saldo_filter'] == "igual":
                queryset = queryset.filter(QT_SALDO_ATU=saldo_value)
            elif param['saldo_filter'] == "entre" and param['saldoMax']:
                saldo_max = int(param['saldoMax'])
                queryset = queryset.filter(
                    QT_SALDO_ATU__gte=saldo_value,
                    QT_SALDO_ATU__lte=saldo_max
                )
        except ValueError:
            raise ValueError("Valor de saldo deve ser um número válido.")
    
    # Filtro por uso/desuso
    if param['usoDesuso']:
        if param['usoDesuso'] == "uso":
            # Assumindo que FG_DESUSO é 'N' para uso e 'S' para desuso
            queryset = queryset.filter(Q(FG_DESUSO='N') | Q(FG_DESUSO__isnull=True))
        elif param['usoDesuso'] == "desuso":
            queryset = queryset.filter(FG_DESUSO='S')
    
    # Filtro para remover DE_MAT que sejam vazios ou só espaços
    queryset = queryset.filter(~Q(DE_MAT__regex=r'^\s*$'))
    
    return queryset


def apply_ordering(queryset:QuerySet, param: dict) -> QuerySet:
    """
    Aplica ordenação ao queryset
    """
    ordem = "" if param['ordemOrdenacao'] == "c" else "-"
    
    campo_ordenacao = param['campoOrdenacao']
    
    # Mapeamento dos campos de ordenação
    campos_ordenacao = {
        "codigo": "CO_MAT",
        "descricao": "DE_MAT",
        "saldo": "QT_SALDO_ATU",
        "prazoValidade": "QT_SALDO_VALIDADE",
        "valor": "VL_ATU"
    }
    
    
    campo_db = campos_ordenacao[campo_ordenacao]
    if campo_db == "DE_MAT":
        queryset = queryset.annotate(
            descricao_sorted=RawSQL(
                "NLSSORT(REGEXP_REPLACE({0}, '^[[:space:]]+', ''), 'NLS_SORT=WEST_EUROPEAN_AI')".format(campo_db),
                []
            )
        )
        queryset = queryset.order_by(f"{ordem}descricao_sorted")
    else:
        queryset = queryset.order_by(f"{ordem}{campo_db}")
    
    return queryset


def lidarErrosGenericos(erro: Exception) -> str:
    from requests.exceptions import Timeout, RequestException
    logger.error([type(erro), erro])
    
    if isinstance(erro, ValueError):
        mensagem_erro = "O código de materiais deve começar com '30'."
    elif isinstance(erro, Timeout):
        mensagem_erro = "Timeout tentando conectar com o banco de dados\nTente novamente em breve."
    elif isinstance(erro, RequestException):
        mensagem_erro = "Não foi possível estabelecer uma conexão com o servidor. Verifique a conexão."
    else:
        mensagem_erro = "Erro ao carregar o banco de dados." + str(erro)
    
    return mensagem_erro
### Consultando o BD - END
#


#
### Consulta geral de materiais
@require_GET
def material_pesquisa2(request):
    from .models import Material
    
    # Logica de login


    try:
        # Parâmetros de paginação
        page_number = int(request.GET.get("page", 1))
        page_size = int(request.GET.get("page_size", 10))

        # Aplicar filtros com valores padrão seguros
        param = {
            "codigo": request.GET.get("codigo") or "30",
            "descricao": request.GET.get("descricao") or "",
            "saldo_filter": request.GET.get("saldo_filter"),
            "saldo": request.GET.get("saldo") or "",
            "saldoMax": request.GET.get("saldo_between_end") or "",
            "ordemOrdenacao": request.GET.get("ordemOrdenacao") or "c",
            "campoOrdenacao": request.GET.get("campoOrdenacao") or "descricao",
            "usoDesuso": request.GET.get("usoDesuso") or "uso",
        }
        #print(param) # debug
        
        # Preparar o queryset
        queryset = Material.objects.all()
        
        # Aplicar filtros
        queryset = apply_filters(queryset, param)
        
        # Aplicar ordenação
        queryset = apply_ordering(queryset, param)

        # Paginação
        paginator = Paginator(queryset, page_size)
        
        if page_number > paginator.num_pages and paginator.num_pages > 0:
            page_number = 1
            
        try:
            page_obj = paginator.get_page(page_number)
        except (EmptyPage, PageNotAnInteger):
            page_obj = paginator.get_page(1)
        
        return render(request, "material_pesquisa.html", {
            "page_obj": page_obj,
            "filtros": param,  
        })

    except Exception as e:
        mensagem_erro = lidarErrosGenericos(e)
        messages.error(request, mensagem_erro)
        return render(request, "material_pesquisa.html", {
            "page_obj": None,
            "erro": True,
            "filtros": {}
        })
### Consulta geral de materiais - END
#