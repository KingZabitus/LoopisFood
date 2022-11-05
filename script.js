const desconto = (p) => p - (p*(20/100));

let nomeProduto = document.querySelector("#nome-do-produto");
let precoInput = document.querySelector("#preço");
let promo = document.querySelector("#promocao");
const saveButt = document.querySelector("#salvar");
const produtos = document.querySelector("#produtos");

saveButt.addEventListener('click', () => {
    let novaDiv = document.createElement('div');
    let nome = document.createElement('p');
    nome.classList.add("nome");
    let ValorPreço = document.createElement('p');
    ValorPreço.classList.add("valor-preço");
    let button = document.createElement('button');
    button.classList.add("botao-de-remover");
    if(document.getElementById('sim').checked){
        ValorPreço.textContent = desconto(precoInput.value);
        produtos.appendChild(novaDiv);
        novaDiv.classList.add("preco-com-desconto");
    }else{
        ValorPreço.textContent = precoInput.value;
        produtos.prepend(novaDiv);
        novaDiv.classList.add("preco-sem-desconto");
    }
    nome.textContent = nomeProduto.value;
    button.textContent = "Remover";
    novaDiv.appendChild(nome);
    novaDiv.appendChild(ValorPreço);
    novaDiv.appendChild(button);
    button.addEventListener('click', () => {
        produtos.removeChild(novaDiv);
    });

});
