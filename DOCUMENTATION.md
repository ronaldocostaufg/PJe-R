# Documentação de Utilização - Folha Fácil Monitor TCU

## Introdução

O Folha Fácil Monitor TCU é um sistema desenvolvido para monitorar o status de aposentadoria no Tribunal de Contas da União (TCU). Esta documentação fornece instruções detalhadas sobre como utilizar todas as funcionalidades do sistema.

## Acesso ao Sistema

1. Abra seu navegador web
2. Acesse o endereço: http://127.0.0.1:8000/monitor/
3. Faça login com suas credenciais (se necessário)

## Funcionalidades Principais

### 1. Monitoramento de Status de Aposentadoria

#### Consulta de Status
- Acesse a página inicial do sistema
- Insira o número do processo ou CPF do beneficiário
- Clique em "Consultar"
- O sistema exibirá o status atual do processo

#### Monitoramento Automático
- O sistema realiza consultas automáticas periódicas (configurado para dias uteis as 7:00)
- As atualizações são exibidas no painel principal
- Alertas são gerados quando há mudanças no status

### 2. Cadastro de Pessoas

#### Novo Cadastro
1. Acesse o menu "Cadastros"
2. Selecione "Nova Pessoa"
3. Preencha os campos obrigatórios:
- Matrícula
- Nome completo
- CPF
	- Selecioanar se ativo ou não
4. Clique em "Salvar"

#### Edição de Cadastro
1. Localize a pessoa na lista de cadastros
2. Clique no ícone de edição (ícone lápis)
3. Atualize as informações necessárias
4. Salve as alterações

### 3. Geração de Relatórios

#### Tipos de Relatórios Disponíveis
- Relatório de Status Atual
- Histórico de Alterações
- Relatório de Beneficiários

#### Como Gerar Relatórios
1. Acesse o menu "Relatórios"
2. Os filtros já estão configurados:
   - Servidor ou Pencionista
   - Status
   - Situação
   - Última Atualização
4. No Final da página Exportar CSV para "Gerar Relatório em arquivo .csv"

### 4. Interface Responsiva

O sistema é totalmente responsivo e pode ser acessado de:
- Computadores desktop
- Tablets
- Smartphones

## Dicas de Utilização

1. *Atualizações Automáticas*
   - O sistema atualiza automaticamente as 7 da manhã em dias uteis
   - Você pode forçar uma atualização manual clicando no botão "Atualizar"

2. *Notificações*
   - Configure suas preferências de notificação
   - Receba alertas por e-mail sobre mudanças importantes