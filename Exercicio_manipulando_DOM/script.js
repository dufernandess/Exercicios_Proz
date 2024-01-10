let h1 = document.querySelector("#titulo");
let ul = document.querySelector("ul");
let a = document.querySelector("a");
let ol = document.querySelector("#lista-ordenada");

h1.innerText = "Titudo Adicionado";

a.innerText = "Acesse a plataforma do Proz Educação aqui!";

ul.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`
ol.innerHTML = `
<li><a href="https://facebook.com/">Facebook</a></li>
<li><a href="https://google.com/">Google</a></li>
<li><a href="https://instagram.com/">Instagram</a></li>
`