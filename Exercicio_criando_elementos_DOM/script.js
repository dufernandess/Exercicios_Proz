let titulo = document.createElement("h1");

titulo.innerText = "Produto Multifuncional de Limpeza"
titulo.id = "titulo"

const body = document.querySelector("body")
body.appendChild(titulo);


let postagem = document.createElement("div");

postagem.innerHTML = `
<h2>Produto à venda!</h2>
<p>Produto multifuncional para limpeza da sua residência!</p>
<p>Compre por apenas <strong>$59,99</strong></p>
`
body.appendChild(postagem)