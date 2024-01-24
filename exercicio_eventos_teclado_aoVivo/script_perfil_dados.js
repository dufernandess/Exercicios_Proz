const linkIndex = document.querySelector("a");

window.addEventListener("keyup", (e) =>{
    console.log(e.key);
    console.log(e.code);
 
    if(e.code == "Backspace"){
        console.log("Voltar para a página index")
        linkIndex.click();
      }
   
})