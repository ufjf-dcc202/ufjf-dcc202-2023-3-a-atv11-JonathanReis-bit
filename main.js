

const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

atualizarListaOrdenada();
btnAdicionar.addEventListener('click',adicionaItemDaEntrada);



function adicionaElementoNaListaOrdenada(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}


