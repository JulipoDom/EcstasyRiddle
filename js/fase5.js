function verificar(){

    let resposta = document.getElementById('resposta').value.toLowerCase();
    
    if(resposta === "enigma"){
        window.location.href = "parabens.html";
        return
    }else{
        let popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        setTimeout(() => {
            popup.classList.toggle("show");
        }, 2000);
    }
    
    
}
