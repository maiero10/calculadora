document.addEventListener('DOMContentLoaded', () => {

    const visor = document.getElementById('visor');
    const botoesNum = document.querySelectorAll('.btn-num');
    const multiBtn = document.getElementById('multiplicacao-btn');
    const divBtn = document.getElementById('divisao-btn');
    const subBtn = document.getElementById('subtracao-btn');
    const somaBtn = document.getElementById('soma-btn');

    botoesNum.forEach(botao => {
        botao.addEventListener('click', () => {
            visor.innerText += botao.innerText;
        });
    });

    multiBtn.addEventListener('click', () => {
        visor.innerText = "X";
    });
});