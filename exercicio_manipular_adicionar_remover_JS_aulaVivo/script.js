let titulo = document.querySelector("h2");

//alterar a cor do elemento
titulo.style.color = "black";

//alterando o tamanho da fonte
titulo.style.fontSize = "40px";

//estilizando o botao
let botao = document.querySelector("button");

botao.style.border = "2px solid";
botao.style.background = "black";
botao.style.color = "white";

//estilizando o campo de input login de usuario e senha
let campoUsuario = document.getElementById("login-usuario");
let campoSenha = document.getElementById("login-senha");

campoUsuario.style.border = "2px black solid";
campoSenha.style.border = "2px black solid";

//adicionar um comentario indicando a primeira interação
console.log("Primeira interação do usuário");




//VERSAO USUARIO CORRETO E SENHA INCORRETA
//capturar o input do nome do usuario pelo ID
let usernameInput = document.getElementById("login-usuario");

//Adiciona a classe de "correct" ao input do nome do usuario
usernameInput.classList.add("correct");

//capturando o input da senha e adicionando a classe "error"
let senhaInput = document.getElementById("login-senha");

senhaInput.classList.add("error");

let fraseErro = document.querySelectorAll("#login form p");

fraseErro[1].classList.add("visible");




/*
//VERSAO USUARIO INCORRETO E SENHA CORRETA
//capturar o input do nome do usuario pelo ID
let loginSenha = document.getElementById("login-senha");

loginSenha.classList.add("correct");

let inputSenha = document.getElementById("login-usuario");

inputSenha.classList.add("error");

let fraseErro = document.querySelectorAll("#login form p");

fraseErro[0].classList.add("visible");
*/



/*
//VERSAO USUARIO E SENHA INCORRETOS
//capturar o input do nome do usuario pelo ID
let loginSenha = document.getElementById("login-senha");

loginSenha.classList.add("error");

let inputUsuario = document.getElementById("login-usuario");

inputUsuario.classList.add("error");

let fraseErro = document.querySelectorAll("#login form p");

fraseErro[0].classList.add("visible");
fraseErro[1].classList.add("visible");
*/


/*
//VERSAO USUARIO E SENHA INCORRETOS
//capturar o input do nome do usuario pelo ID
let loginSenha = document.getElementById("login-senha");

loginSenha.classList.add("correct");

let inputSenha = document.getElementById("login-usuario");

inputSenha.classList.add("correct");
*/
