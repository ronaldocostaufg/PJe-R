"""
Projeto Oracle 
Autor: Hailton David Lemos
Copyright (c) 2024 Hailton David Lemos. Todos os direitos reservados.
pm2 start .\app.py --name projetoOracle --interpreter python
"""
import cx_Oracle
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_cors import CORS
import platform
from waitress import serve
import sys
import socket

if platform.system() == 'Linux':
    #host = '172.22.3.31'
    host = '172.22.3.95'
else:
    host = '172.22.3.197'  # Padrão    

app = Flask(__name__)
CORS(app) 
app.secret_key = "sua_chave_secreta_aqui"  # Necessário para usar flash messages

# Configurações do banco de dados Oracle
DB_USER = "go2448ps"
DB_PASSWORD = "Tjpyfm98."
DB_HOST = "172.22.3.3"
DB_PORT = 1521
DB_SID = "JFGO"

def get_db_connection():
    # Constrói o DSN utilizando o SID
    dsn = cx_Oracle.makedsn(DB_HOST, DB_PORT, sid=DB_SID)
    connection = cx_Oracle.connect(user=DB_USER, password=DB_PASSWORD, dsn=dsn)
    return connection


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        sql = request.form.get("sql_query")
        if not sql.strip():
            flash("O comando SQL não pode ser vazio.")
            return redirect(url_for("index"))
        try:
            connection = get_db_connection()
            cursor = connection.cursor()
            cursor.execute(sql)

            # Se houver resultados, obtenha os nomes das colunas e todas as linhas
            columns = (
                [col[0] for col in cursor.description] if cursor.description else []
            )
            rows = cursor.fetchall() if cursor.description else []

            cursor.close()
            connection.close()
            return render_template("result.html", query=sql, columns=columns, rows=rows)
        except cx_Oracle.DatabaseError as e:
            (error,) = e.args
            flash("Erro ao executar a consulta: " + str(error.message))
            return redirect(url_for("index"))
    return render_template("index.html")


@app.route("/api/query", methods=["POST"])
def api_query():
    """
    Endpoint para executar uma consulta SQL e retornar o resultado em JSON.
    Espera receber um JSON no corpo da requisição com os campos:
    - db_user: usuário do banco de dados
    - db_password: senha do banco de dados
    - sql_query: comando SQL a ser executado
    """
    data = request.get_json()
    db_user = data.get("db_user")
    db_password = data.get("db_password")
    sql_query = data.get("sql_query")

    if not db_user or not db_password or not sql_query:
        return jsonify({"error": "Os campos 'db_user', 'db_password' e 'sql_query' são obrigatórios."}), 400

    try:
        # Conexão com o banco de dados usando as credenciais fornecidas
        dsn = cx_Oracle.makedsn(DB_HOST, DB_PORT, sid=DB_SID)
        connection = cx_Oracle.connect(user=db_user, password=db_password, dsn=dsn)
        cursor = connection.cursor()

        # Executa a consulta SQL
        cursor.execute(sql_query)

        # Obtém os resultados
        columns = [col[0] for col in cursor.description] if cursor.description else []
        rows = cursor.fetchall() if cursor.description else []

        # Fecha o cursor e a conexão
        cursor.close()
        connection.close()

        # Retorna os resultados em formato JSON
        return jsonify({"columns": columns, "rows": rows})

    except cx_Oracle.DatabaseError as e:
        (error,) = e.args
        return jsonify({"error": f"Erro ao executar a consulta: {error.message}"}), 500


if __name__ == "__main__":
    port_usada = 5011
    
    try:
        serve(app, host=host, port=port_usada, threads=4, connection_limit=1000, url_scheme='http')
        print("Iniciando API") # Debug
        #app.run(host='172.22.3.197', port=port_usada, debug=True)
    except OSError as e:
        if e.errno == socket.errno.EADDRINUSE:  # Error number for "Address already in use"
            print(f"Erro: A API já está sendo executada.")
            sys.exit(98)  # Erro de porta já usada em linux
        else:
            # If it's another type of error, re-raise the exception
            raise
