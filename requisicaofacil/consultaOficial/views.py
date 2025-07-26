from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.decorators.http import require_GET
from django.db.models.expressions import RawSQL
from django.db.models.query import QuerySet
from django.db.models import Q, Avg
from datetime import date, timedelta
import json
import re


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


def apply_filter_range(queryset: QuerySet, field: str, filter_type: str, value, max_value = None) -> QuerySet:
    if filter_type == "menorq":
        return queryset.filter(**{f"{field}__lte": value})
    elif filter_type == "maiorq":
        return queryset.filter(**{f"{field}__gte": value})
    elif filter_type == "igual":
        return queryset.filter(**{field: value})
    elif filter_type == "entre":
        if max_value not in ['', ' ', None]:
            return queryset.filter(**{f"{field}__gte": value, f"{field}__lte": max_value})
    else:
        raise ValueError("Tipo de filtro numérico inválido.")


def apply_filters(queryset: QuerySet, param: dict, filtros: dict) -> QuerySet:
    """
    Aplica filtros ao queryset baseado nos parâmetros
    """
    
    # Filtro por código (int)
    if param.get('codigo') and filtros.get('codigo'):
        if is_valid_codigo(param['codigo']):
            queryset = queryset.filter(**{f"{filtros['codigo']}__startswith": param['codigo']})
        else:
            raise ValueError("O código de materiais deve começar com '30'.")

    # Filtro por descricao (str)
    if param.get('descricao') and filtros.get('descricao'):
        # Filtro para remover DE_MAT que sejam vazios ou só espaços
        queryset = queryset.filter(~Q(**{f"{filtros['descricao']}__regex": r'^\s*$'}))

        descricao = sanitize_search_text(param['descricao'])

        # Define accent and punctuation map
        accent_map_from = 'ÇÇççÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÃÕ,.:;'
        accent_map_to   = 'CCCCAEIOUAEIOUAEIOUAO    '

        field_sql = f"""INSTR(
            UPPER(TRANSLATE({filtros['descricao']}, '{accent_map_from}', '{accent_map_to}')),
            UPPER(TRANSLATE(%s, '{accent_map_from}', '{accent_map_to}'))
        ) > 0"""

        queryset = queryset.extra(
            where=[field_sql],
            params=[descricao]
        )

    # Filtro por saldo (int)
    if (param.get('saldo_filter') and param.get('saldo')) and (filtros.get('saldo')):
        try:
            queryset = apply_filter_range(queryset, filtros['saldo'], param['saldo_filter'], int(param['saldo']), param.get('saldoMax'))
        except Exception as e:
            raise e
    
    # Filtro por uso/desuso (bool)
    if param.get('usoDesuso') and filtros.get('usoDesuso'):
        if param['usoDesuso'] == "uso":
            # Assumindo que FG_DESUSO é 'N' para uso e 'S' para desuso
            queryset = queryset.filter(Q(**{filtros['usoDesuso']: 'N'}) | Q(**{f"{filtros['usoDesuso']}__isnull": True}))
        elif param['usoDesuso'] == "desuso":
            queryset = queryset.filter(**{filtros['usoDesuso']: 'S'})
    
    # Filtro até vencer (int)
    if (param.get('prazoPassadoLinha_filter') and param.get('prazoPassadoLinha')) and (filtros.get('prazoPassadoLinha')):
        # Filtrando produtos vencid0s
        queryset = queryset.filter(**{f"{filtros.get('prazoPassadoLinha')}__gte": date.today()})
        try:
            queryset = apply_filter_range(queryset, filtros['prazoPassadoLinha'], param['prazoPassadoLinha_filter'], param['prazoPassadoLinha'])
        except Exception as e:
            raise e
    
    # Filtro vencido (int)
    if (param.get('prazoVencido_filter') and param.get('prazoVencido')) and (filtros.get('prazoVencido')):
        queryset = queryset.filter(**{f"{filtros.get('prazoVencido')}__lte": date.today()})
        try:
            queryset = apply_filter_range(queryset, filtros['prazoVencido'], param['prazoVencido_filter'], param['prazoVencido'])
        except Exception as e:
            raise e
    
    return queryset


def apply_ordering(queryset:QuerySet, param: dict) -> QuerySet:
    """
    Aplica ordenação ao queryset
    """
    ordem = "" if param['ordemOrdenacao'] == "c" else "-"
    campo_db = param['campoOrdenacao']
    
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
    
    if isinstance(erro, ValueError):
        mensagem_erro = "O código de materiais deve começar com '30'."
    elif isinstance(erro, Timeout):
        mensagem_erro = "Timeout tentando conectar com o banco de dados\nTente novamente em breve."
    elif isinstance(erro, RequestException):
        mensagem_erro = "Não foi possível estabelecer uma conexão com o servidor. Verifique a conexão."
    else:
        import traceback
        mensagem_erro = "Erro ao carregar o banco de dados." + str(erro) + traceback.print_exc()
    
    return mensagem_erro
### Consultando o BD - END
#


#
## Consulta geral de materiais
@require_GET
def material_pesquisa2(request):
    # Logica de login


    try:
        from .models import Material
        filtros_material = {
            'codigo': 'CO_MAT',
            'descricao': 'DE_MAT',
            'saldo': 'QT_SALDO_ATU',
            'usoDesuso': 'FG_DESUSO',
        }

        # Parâmetros de paginação
        page_number = int(request.GET.get("page", 1))
        page_size = int(request.GET.get("page_size", 10))

        # Aplicar filtros com valores padrão seguros
        param = {
            "codigo": request.GET.get("codigo") or "30",
            "descricao": request.GET.get("descricao") or "",
            "saldo_filter": request.GET.get("saldo_filter") or "",
            "saldo": request.GET.get("saldo") or "",
            "saldoMax": request.GET.get("saldo_between_end") or "",
            "usoDesuso": request.GET.get("usoDesuso") or "uso",
            # Ordenação
            "ordemOrdenacao": request.GET.get("ordemOrdenacao") or "c",
            "campoOrdenacao": request.GET.get("campoOrdenacao") or "DE_MAT",
        }
        #return HttpResponse(json.dumps(param)) # debug

        # Preparar o queryset
        queryset = Material.objects.all()
        
        # Aplicar filtros
        queryset = apply_filters(queryset, param, filtros_material)
        
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
## Consulta geral de materiais - END
#

#
## Consulta de validade de materiais
@require_GET
def consultaValidadeMateriais(request):
    # Logica de login


    try:
        from .models import Material, MaterialValidade
        filtros_material = {
            'descricao': 'DE_MAT',
        }
        filtros_material_validade = {
            'codigo': 'sima_co_mat',
            'prazoPassadoLinha': 'sima_dt_validade',
            'prazoVencido': 'sima_dt_validade',
        }

        # Parâmetros de paginação
        page_number = int(request.GET.get("page", 1))
        page_size = int(request.GET.get("page_size", 10))

        # Aplicar filtros com valores padrão seguros
        param = {
            "codigo": request.GET.get("codigo") or "30",
            "descricao": request.GET.get("descricao") or "",
            "prazoPassadoLinha": request.GET.get("prazoValidade") or "",
            "prazoPassadoLinha_filter": request.GET.get("prazoValidade_filter") or "menorq",
            "prazoVencido": request.GET.get("prazoVencido") or "",
            "prazoVencido_filter": request.GET.get("prazoVencido_filter") or "menorq",
            # Ordenar do que tem mais prazo ate vencer
            "ordemOrdenacao": request.GET.get("ordemOrdenacao") or "d",
            "campoOrdenacao": request.GET.get("campoOrdenacao") or "sima_dt_validade",
        }
        #return HttpResponse(json.dumps(param)) # debug
        if param['prazoPassadoLinha']:
            param['prazoPassadoLinha'] = date.today() + timedelta(days=int(param['prazoPassadoLinha']))
        if param['prazoVencido']:
            param['prazoVencido'] = date.today() - timedelta(days=int(param['prazoVencido']))

        materiais = Material.objects.values('CO_MAT', 'DE_MAT')
        materiais = apply_filters(materiais, param, filtros_material)
        materiais_map = {m['CO_MAT']: m['DE_MAT'] for m in materiais}

        validades = MaterialValidade.objects.values('sima_co_mat', 'sima_dt_validade')
        validades = apply_filters(validades, param, filtros_material_validade)
        validades = apply_ordering(validades, param)

        queryset = [
            {
                'codigo': v['sima_co_mat'],
                'descricao': materiais_map.get(v['sima_co_mat']),
                'prazoPassadoLinha': (v['sima_dt_validade'] - date.today()).days,
                'dias_vencido_abs': abs((v['sima_dt_validade'] - date.today()).days),
                'dataValidade': v['sima_dt_validade'].strftime('%d/%m/%Y'),
            }
            for v in validades if v['sima_co_mat'] in materiais_map
        ]

        #return HttpResponse(queryset)

        paginator = Paginator(queryset, page_size)
        
        if page_number > paginator.num_pages and paginator.num_pages > 0:
            page_number = 1
            
        try:
            page_obj = paginator.get_page(page_number)
        except (EmptyPage, PageNotAnInteger):
            page_obj = paginator.get_page(1)
        
        return render(request, "material_validade.html", {
            "page_obj": page_obj,
            "filtros": param,  
        })

    except Exception as e:
        mensagem_erro = lidarErrosGenericos(e)
        messages.error(request, mensagem_erro)
        return render(request, "material_validade.html", {
            "page_obj": None,
            "erro": True,
            "filtros": {}
        })
## Consulta de validade de materiais - END
#

#
## Consulta consumo medio
@require_GET
def consultaConsumoMedioMateriais(request):
    # Logica de login


    try:
        from .models import Material, MovimentoSaidaDefinitivo
        filtros_material = {
            'codigo': 'CO_MAT',
        }
        filtros_material_saida_definitivo = {
            'codigo': 'co_mat',
            'prazoConsumo': 'dt_baixa_req',
        }

        # Parâmetros de paginação
        page_number = int(request.GET.get("page", 1))
        page_size = int(request.GET.get("page_size", 10))

        # Aplicar filtros com valores padrão seguros
        param = {
            "codigo": request.GET.get("codigo") or "30",
            "prazoConsumo": request.GET.get("periodoMedia") or '1',
            # Ordenação
            "ordemOrdenacao": request.GET.get("ordemOrdenacao") or "d",
            "campoOrdenacao": request.GET.get("campoOrdenacao") or "dt_baixa_req",
        }
        param['prazoConsumo_filter'] = "menorq"

        data = {}

        if len(param['codigo']) != 10:
            messages.error(request, "Código inválido!\nForneca o código inteiro do material")
            page_obj = None
        else:
            materiais = Material.objects.values('CO_MAT', 'DE_MAT')
            materiais = apply_filters(materiais, param, filtros_material)
            materiais_map = {m['CO_MAT']: m['DE_MAT'] for m in materiais}
            
            # Converter para mês comercial
            try:
                param['prazoConsumo'] = 30*int(param['prazoConsumo'])
            except Exception as e:
                param['prazoConsumo'] = '30'

            #return HttpResponse(json.dumps(param)) # debug
            saidas = MovimentoSaidaDefinitivo.objects.filter(
                co_mat=param['codigo'],
                dt_baixa_req__gte=date.today() - timedelta(days=int(param['prazoConsumo']))
            ).values('co_mat', 'nu_req', 'dt_baixa_req')
            saidas = apply_filters(saidas, param, filtros_material_saida_definitivo)
            saidas = apply_ordering(saidas, param)
            
            queryset = [
                {
                    'codigo': s['co_mat'],
                    'descricao': materiais_map.get(s['co_mat']),
                    'dataRequisicao': s['dt_baixa_req'].strftime('%d/%m/%Y'),
                    'qtdRequisitada': s['nu_req'],
                }
                for s in saidas if s['co_mat'] in materiais_map
            ]
            data['mediaConsumo'] = round(saidas.aggregate(media_valor=Avg('nu_req'))['media_valor'],1)

            paginator = Paginator(queryset, page_size)
            
            if page_number > paginator.num_pages and paginator.num_pages > 0:
                page_number = 1
                
            try:
                page_obj = paginator.get_page(page_number)
            except (EmptyPage, PageNotAnInteger):
                page_obj = paginator.get_page(1)
        
        return render(request, "material_consumo_medio.html", {
            "data": data,
            "page_obj": page_obj,
            "erro": page_obj is None,
            "filtros": param,  
        })

    except Exception as e:
        mensagem_erro = lidarErrosGenericos(e)
        messages.error(request, mensagem_erro)
        return render(request, "material_consumo_medio.html", {
            "page_obj": None,
            "erro": True,
            "filtros": {}
        })
## Consulta consumo medio - END
#