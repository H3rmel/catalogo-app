/*
  Carrinho do cliente por meio do localStorage do ReactJS
*/

// Cria o carrinho
function createCarrinho() {
  let createCarrinho = { carrinho: [] };
  localStorage.setItem("carrinho", JSON.stringify(createCarrinho));
}

// Insere produto dentro do carrinho na quantidade indicada pelo cliente
export function insertProduct(produto) {
  // Pega carrinho atual
  let currentCarrinho = JSON.parse(localStorage.getItem("carrinho"));
  if (currentCarrinho.carrinho) {
    // Verifica se index "carrinho" existe, pois indica que o localStorage acabou de ser criado e seleciona ele para dar o push.
    currentCarrinho = currentCarrinho.carrinho;
    currentCarrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(currentCarrinho));
  } else {
    // Adiciona novo produto por meio de método push.
    currentCarrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(currentCarrinho));
  }
}

// Remove produto do carrinho
export function removeProduct(idProduto) {
  let currentCarrinho = JSON.parse(localStorage.getItem("carrinho"));
  currentCarrinho.splice(idProduto, 1);
  localStorage.setItem("carrinho", JSON.stringify(currentCarrinho));
}

// Altera quantidade de um produto em específico
export function alterQuantity(idProduto, quantity) {
  let currentCarrinho = JSON.parse(localStorage.getItem("carrinho"));
  // Pega os valores antigos
  let oldPreco = currentCarrinho[idProduto].preco;
  let oldQuantity = currentCarrinho[idProduto].quantidade;
  // Divide pela quantidade atual para conseguir o preço unitário do produto
  oldPreco = oldPreco / oldQuantity;
  // Altera quantidade do produto para nova quantidade
  currentCarrinho[idProduto].quantidade = quantity;
  // Com o preço unitário calcula o novo valor com a nova quantidade
  currentCarrinho[idProduto].preco = oldPreco * quantity;
  localStorage.setItem("carrinho", JSON.stringify(currentCarrinho));
}

// Retorna número de itens do carrinho
export function productsNumber() {
  let currentCarrinho;
  let quantidade = 0;
  if (localStorage.getItem("carrinho")) {
    currentCarrinho = JSON.parse(localStorage.getItem("carrinho"));
  } else {
    createCarrinho();
    currentCarrinho = JSON.parse(localStorage.getItem("carrinho"));
  }

  if (currentCarrinho.length === undefined) {
    quantidade = 0;
  } else {
    for(let i = 0; i < currentCarrinho.length; i++) {
      quantidade += currentCarrinho[i].quantidade
    }
  }

  return quantidade;
}

// Retorna valor total do carrinho
export function returnTotal() {
  let currentCarrinho = JSON.parse(localStorage.getItem("carrinho"));
  let total = 0;

  for (let i = 0; i < currentCarrinho.length; i++) {
    total += currentCarrinho[i].preco;
    for(let j = 0; j < currentCarrinho[i].adicionais.length; j++) {
      total += currentCarrinho[i].adicionais[j].quantidade * 2;
    }
  }

  return parseFloat(total.toFixed(2));
}

// Retorna carrinho completo
export function returnCarrinho() {
  return JSON.parse(localStorage.getItem("carrinho"));
}

// Limpa carrinho
export function emptyCarrinho () {
  let currentCarrinho = JSON.parse(localStorage.getItem("carrinho"));
  currentCarrinho = [];
  localStorage.setItem("carrinho", JSON.stringify(currentCarrinho));
}