function verificar(){

    let resposta = document.getElementById('resposta').value.toLowerCase();
    
    if(resposta === "para"){
        window.location.href = "fase3.html";
        return
    }else{
        let popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        setTimeout(() => {
            popup.classList.toggle("show");
        }, 2000);
    }
    
    
}
