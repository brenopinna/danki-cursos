const vitrine = document.querySelector('.produtos-vitrine-container');
const legendaCarrinho = document.querySelector('.legenda-carrinho');
const carrinho = document.querySelector('.produtos-carrinho-container');

var iconsLixeira;

const quantidades = {};

const precos = {
   sapato: 100,
   camisa: 68,
   calça: 120,
   chinelo: 20
}

Object.entries(precos).forEach(entries => {
   const nome = entries[0];
   const preco = entries[1];

   const produtoContainer = document.createElement('div');
   const produtoNome = document.createElement('p');
   const produtoPreco = document.createElement('p');
   const botao = document.createElement('button');

   produtoContainer.classList.add('produto-vitrine');
   produtoNome.classList.add('titulo-produto-vitrine');
   botao.id = nome;

   produtoNome.innerText = capitalize(nome);
   produtoPreco.innerText = 'R$' + preco.toFixed(2).replace('.', ',')
   botao.innerText = 'Adicionar'

   produtoContainer.append(produtoNome, produtoPreco, botao);

   vitrine.append(produtoContainer)
})

document.querySelectorAll('button').forEach(button => {
   button.addEventListener('click', function(){
      const nome = this.id;
      if(quantidades[nome]){
         quantidades[nome]++;
      }else{
         quantidades[nome] = 1;
      }
      atualizarCarrinho();
   })
});

function capitalize(string){
   return string.slice(0,1).toUpperCase() + string.slice(1);
}

function atualizarCarrinho(){
   carrinho.innerHTML = '';
   carrinho.appendChild(legendaCarrinho)
   Object.entries(quantidades).forEach(entries => {
      const quantidade = entries[1];

      if(quantidade){
         if(legendaCarrinho.style.display === 'none') legendaCarrinho.style.display = 'flex';
   
         const nome = entries[0];
         const preco = precos[nome] * quantidade;
   
         const item = document.createElement('div');
         const nomeProduto = document.createElement('p');
         const quantidadeProduto = document.createElement('p');
         const precoProduto = document.createElement('p');
         const iconeLixeira = document.createElement('img');
   
         item.classList.add('item-carrinho');
         iconeLixeira.id = nome;
         iconeLixeira.classList.add('lixeira');
   
         nomeProduto.innerText = capitalize(nome);
         quantidadeProduto.innerText = quantidade;
         precoProduto.innerText = preco.toFixed(2).replace('.',',');
         iconeLixeira.src = './lixeira.svg';
         iconeLixeira.alt = 'Lixeira'
   
         item.append(nomeProduto, quantidadeProduto, precoProduto, iconeLixeira);
   
         carrinho.append(item);
      }
   })
   iconsEventListener();
}

function iconsEventListener(){
   document.querySelectorAll('.lixeira').forEach(icon => {
      icon.addEventListener('click', () => {
         const produto = icon.id;
         const del = confirm(`Deseja excluir algum dos itens [${produto}]?`);
         if(del){
            let toBeDeleted;
            do{
               const input = prompt(`Qual quantidade de [${produto}] deseja excluir?`)
               if(quantidades[produto] >= input && input >= 0){
                  toBeDeleted = +input;
               }else{
                  alert('Insira uma quantidade de itens válida!')
               }
            }while(toBeDeleted === undefined);
            quantidades[produto] -= toBeDeleted;
            atualizarCarrinho();
         }
      })
   })
}