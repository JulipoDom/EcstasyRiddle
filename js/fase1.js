function verificar(){

    let resposta = document.getElementById('resposta').value;
    
    if(resposta === "pronto"){
        window.location.href = "fase2.html";
        return
    }else{
        alert("Errou!");
    }
    
    
}
