//- O link dentro do texto do primeiro post
const link1 = document.querySelector("#post01 .post-texto a");
console.log(link1);

//- A palavra em negrito dentro do texto do segundo post
const negrito1 = document.querySelector("#post02 .post-texto strong");
console.log(negrito1.textContent);

//- O input de nome do formulário
const input = document.getElementById("nome");
console.log(input);

//- Os links da lista de redes no final da página
let redes = document.querySelectorAll("footer .lista_redes a");
console.log(redes)

//- Os links da navegação (só os links, não os elementos de lista)
let listaNavegacao = document.querySelectorAll("header nav ul li a");
for(let i = 0; i < listaNavegacao.length; i++){
    console.log(listaNavegacao[i].innerText);
}

//- Os 4 "Autor:" e "Data:" em negrito nos dois posts
const autoresDataNegrito = document.querySelectorAll(".post-autor strong, .post-data strong")
for(let i = 0; i < autoresDataNegrito.length; i++){
    console.log(autoresDataNegrito[i].innerText);
}

function qntLista(lista){
    console.log("A lista tem " + lista.length + " elementos");
    }
qntLista(listaNavegacao);
