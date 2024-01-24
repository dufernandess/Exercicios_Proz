const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block";
})

const linkPerfilDados = document.getElementById("link-perfil-dados");
const linkLogout = document.querySelectorAll("#nav-perfil li");


window.addEventListener("keyup", (e) =>{
    //imprimindo a informação Key e Code da tecla pressionada:
    console.log(e.key);
    console.log(e.code);
  
  //Se o menu secundario já estiver aberto:
  if(navPerfil.style.display == "block"){

      if(e.code == "Digit1" || e.code == "Numpad1"){
        linkPerfilDados.click();
      }
  //Se o menu secundario ainda não estiver aberto:   
  } else if (e.code == "Digit1" || e.code == "Numpad1"){
    console.log("Abre o menu de perfil")
    navPerfil.style.display = "block"
    }
  //Fechar o menu secundário:
    if(e.code == "Escape"){
      console.log("Fecha o menu de perfil")
      navPerfil.style.display = "none"
    }
})

/*
//Adicionando evento para abrir e fechar o menu de perfil usando a tecla 1 e esc respectivamente
window.addEventListener("keyup", (e) => {
  console.log(e.key);
  console.log(e.code);

  if(e.code == "Digit1" || e.code == "Numpad1"){
    console.log("Abre o menu de perfil")
    navPerfil.style.display = "block";
  }
  if(e.code == "Escape"){
    console.log("Fecha o menu de perfil")
    navPerfil.style.display = "none";
  }
})*/