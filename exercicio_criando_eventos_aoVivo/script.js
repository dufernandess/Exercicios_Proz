let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};
let btnAdicionar = document.querySelector("#btn-adicionar-produto-01")

let quantidade1 = document.querySelector("#quantidade-produto-01")

let btnSubtrair = document.querySelector("#btn-subtrair-produto-01")

let quantidadeDeProdutos = 10

let valorProduto = 11.66;

function atualizarValor(){
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}
atualizarValor()


function adicionarValor (){
 
    quantidade1.value = Number(quantidade1.value) +1;
    subtotalInfo.quantidade = quantidade1.value
    subtotalInfo.valor = subtotalInfo.valor + valorProduto;
    atualizarValor()
  }
 
btnAdicionar.addEventListener("click",adicionarValor)

function retirarValor (){
  if (quantidade1.value >1){
    quantidade1.value = Number(quantidade1.value) -1;
    subtotalInfo.quantidade = quantidade1.value
    subtotalInfo.valor = subtotalInfo.valor - valorProduto;
    atualizarValor()
  }
  else{
    alert("Digite um numero maior que 0")
  }
}
btnSubtrair.addEventListener("click",retirarValor)