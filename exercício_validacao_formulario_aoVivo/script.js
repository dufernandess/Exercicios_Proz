// ---------- VARIÁVEIS USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// ---------- VARIÁVEIS EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// ---------- VARIÁVEIS IDADE ---------- //
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");

// ---------- VARIÁVEIS SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

// ---------- VARIÁVEIS CONFIRMA SENHA ---------- //
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");


// ---------- MANIPULAÇÃO POPUP ---------- //

//Função genérica para adicionar e retirar classe Popup
function manutencaoPopup(input, label) {

    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    })
}

manutencaoPopup(usernameInput, usernameLabel);
manutencaoPopup(emailInput, emailLabel);
manutencaoPopup(senhaInput, senhaLabel);
manutencaoPopup(confirmaSenhaInput, confirmaSenhaLabel);



function Validar(input, helper, condicao, mensagem){
    if (condicao == true){
        input.classList.remove("correct");
        input.classList.add("error");
        helper.innerText = mensagem;
        helper.classList.add("visible");
    } else {
        input.classList.add("correct");
        input.classList.remove("error");
        helper.classList.remove("visible");
    }
}



// Validar valor do input de username
usernameInput.addEventListener("change", (e) => {
    let valor = e.target.value;
    condicao = (valor.length < 3) ? true : false;
    let mensagem = "Seu username deve ter 3 ou mais caracteres";
    Validar(usernameInput, usernameHelper, condicao, mensagem);
})

// Validar valor do input de email
emailInput.addEventListener("change", (e) => {
    let valorEmail = e.target.value;
    condicao = (valorEmail.includes("@") && valorEmail.includes(".com")) ? false : true;
    let mensagem = "Digite um email válido (contendo o @ e o .com)";
    Validar(emailInput, emailHelper, condicao, mensagem);
})

// Validar valor do input de idade
idadeInput.addEventListener("change", (e) => {
    let valorIdade = e.target.value;
    condicao = (valorIdade >= 18) ? false : true;
    let mensagem = "Você precisa ser maior de idade para se cadastrar"
    Validar(idadeInput, idadeHelper, condicao, mensagem);
})
    
// Validar valor das senhas do cadastro
confirmaSenhaInput.addEventListener("change", (e) => {
    let valorSenha = senhaInput.value;
    let valorConfirmaSenha = e.target.value;
    condicao = (valorSenha === valorConfirmaSenha) ? false : true;
    let mensagem = "As senhas precisam ser idênticas";
    Validar(confirmaSenhaInput, confirmaSenhaHelper, condicao, mensagem);   
})