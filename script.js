const desconto = (p) => p - (p*(20/100));

let nomeProduto = document.querySelector("#nome-do-produto");
let precoInput = document.querySelector("#preço");
const saveButt = document.querySelector("#salvar");
const produtos = document.querySelector("#produtos");
let binary;
let array = JSON.parse(localStorage.getItem('prod')) || []


saveButt.addEventListener('click', () => {
    let novaDiv = document.createElement('div');
    let nome = document.createElement('p');
    nome.classList.add("nome");
    nome.textContent = nomeProduto.value;
    let ValorPreço = document.createElement('p');
    ValorPreço.classList.add("valor-preço");
    let button = document.createElement('button');
    button.classList.add("botao-de-remover");
    button.textContent = "Remover";
    button.addEventListener('click', () => {
        produtos.removeChild(novaDiv);
    })
    if(document.getElementById('sim').checked){
        ValorPreço.textContent = desconto(precoInput.value);
        produtos.appendChild(novaDiv);
        novaDiv.classList.add("preco-com-desconto");
        binary = 1;
    } else{
        ValorPreço.textContent = precoInput.value;
        produtos.prepend(novaDiv);
        novaDiv.classList.add("preco-sem-desconto");
        binary = 0;
    }
    novaDiv.appendChild(nome);
    novaDiv.appendChild(ValorPreço);
    novaDiv.appendChild(button);
    let produto = {
        desconto: binary,
    }
    produto.nome = nomeProduto.value;
    produto.preço = precoInput.value;
    array.push(produto);
    localStorage.setItem("prod", JSON.stringify(array));
});
