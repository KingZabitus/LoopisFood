let nomeProduto = document.querySelector("#nome-do-produto");
let preco = document.querySelector("#preço");
let promo = document.querySelector("#promocao");
const saveButt = document.querySelector("#salvar");
const produtos = document.querySelector("#produtos");

saveButt.addEventListener('click', () => {
    let novaDiv = document.createElement('div');
    let nome = document.createElement('p');
    let preço = document.createElement('p');
    let button = document.createElement('button');
    nome.textContent = nomeProduto.value;
    preço.textContent = preco.value;
    button.textContent = "Remover";
    produtos.appendChild(novaDiv);
    novaDiv.appendChild(nome);
    novaDiv.appendChild(preço);
    novaDiv.appendChild(button);
    button.addEventListener('click', () => {
        produtos.removeChild(novaDiv);
    })
});