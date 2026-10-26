document.addEventListener('DOMContentLoaded', () => {

    const visor = document.getElementById('visor');
    const botoesNum = document.querySelectorAll('.btn-num');

    botoesNum.forEach(botao => {
        botao.addEventListener('click', () => {
            visor.innerText += botao.innerText;
            visor.classList.add('visor-text');
        });
    });
});