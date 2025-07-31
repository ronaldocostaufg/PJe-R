document.addEventListener('DOMContentLoaded', function () {
    // --- ELEMENTOS DO DOM ---
    const filterForm = document.getElementById('filter-form');
    const quantFilterSelect = document.getElementById('quant-filter-select');
    const saldoBetweenContainer = document.getElementById('saldo_between_container');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    const pageInputDirect = document.getElementById('page-input-direct');
    const modalOverlay = document.getElementById('product-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalSaldo = document.getElementById('modal-saldo');
    const modalCodigo = document.getElementById('modal-codigo');
    const modalDescricao = document.getElementById('modal-descricao');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    // --- CORREÇÃO DA PAGINAÇÃO ---
    // Seleciona o campo oculto da página e todos os inputs do filtro.
    const hiddenPageInput = document.getElementById('page-input-hidden');
    const filterInputs = filterForm.querySelectorAll(
        'select, input[type="text"], input[type="number"], textarea'
    );

    // Função para resetar o valor do campo da página para '1'.
    const resetPageNumber = () => {
        if (hiddenPageInput) {
            hiddenPageInput.value = '1';
        }
    };

    // Adiciona um "ouvinte" de mudança a cada campo de filtro.
    filterInputs.forEach(input => {
        // Ignora o campo de input direto da página para não criar um comportamento inesperado.
        if (input.id !== 'page-input-direct') {
            input.addEventListener('change', resetPageNumber);
        }
    });
    // --- FIM DA CORREÇÃO ---


    // --- FUNÇÃO REUTILIZÁVEL PARA ANIMAÇÃO DE CÓPIA ---
    function handleCopyAnimation(clickedIcon) {
        const parentDiv = clickedIcon.parentElement;
        const codeSpan = parentDiv.querySelector('.material-code');
        if (!codeSpan) return;

        const codeToCopy = codeSpan.innerText.trim();

        navigator.clipboard.writeText(codeToCopy).then(() => {
            const feedbackMessage = document.createElement('span');
            feedbackMessage.textContent = 'Copiado! ✓';
            feedbackMessage.style.color = '#28a745';
            feedbackMessage.style.fontWeight = 'bold';
            feedbackMessage.style.fontSize = '0.9em';

            codeSpan.style.display = 'none';
            clickedIcon.style.display = 'none';
            parentDiv.appendChild(feedbackMessage);

            setTimeout(() => {
                feedbackMessage.remove();
                codeSpan.style.display = 'inline';
                clickedIcon.style.display = 'inline';
            }, 2000);
        }).catch(err => {
            console.error('Falha ao copiar:', err);
        });
    }

    // --- MANIPULADORES DE EVENTOS ---

    // Filtro de quantidade "Entre"
    quantFilterSelect.addEventListener('change', () => {
        saldoBetweenContainer.style.display = quantFilterSelect.value === 'entre' ? 'flex' : 'none';
    });

    // Botão Limpar Filtros
    clearFiltersBtn.addEventListener('click', () => {
        window.location.href = window.location.pathname;
    });

    // Input direto da página na paginação
    pageInputDirect?.addEventListener('change', function (e) {
        const page = e.target.value;
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('page', page);
        window.location.search = urlParams.toString();
    });

    // Enviar formulário ao clicar nos ícones de busca
    document.querySelectorAll('.submit-on-click').forEach(icon => {
        icon.addEventListener('click', () => {
            filterForm.submit();
        });
    });

    // Lógica para ABRIR o modal de detalhes do produto
    document.querySelectorAll('.table-row').forEach(row => {
        row.addEventListener('click', (e) => {
            // Não abre o modal se o clique foi na coluna do código (que é para copiar)
            if (e.target.closest('.col-cod')) {
                return;
            }
            modalSaldo.textContent = row.dataset.saldo;
            modalCodigo.textContent = row.dataset.codigo;
            modalDescricao.value = row.dataset.descricao;
            modalOverlay.classList.remove('hidden');
        });
    });

    // Fechar o modal
    closeModalBtn.addEventListener('click', () => modalOverlay.classList.add('hidden'));
    modalOverlay.addEventListener('click', (e) => {
        // Fecha o modal se o clique for no fundo escuro (overlay)
        if (e.target === modalOverlay) {
            modalOverlay.classList.add('hidden');
        }
    });

    // Aplica a função de cópia a TODOS os ícones com a classe .copy-svg
    document.querySelectorAll('.copy-svg').forEach(icon => {
        icon.addEventListener('click', function (event) {
            event.stopPropagation(); // Impede que o clique no ícone abra o modal
            handleCopyAnimation(this);
        });
    });

    // Lógica do Menu Hamburger
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Opcional: fechar o menu ao clicar em um link
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});