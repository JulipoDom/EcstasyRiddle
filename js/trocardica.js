console.log('funcionando')

function trocarBasico(){

    if(document.getElementById('dica1').style.display !== "flex"){
        document.getElementById('semdica').style.display = "none";
        document.getElementById('dica1').style.display = "flex";
        document.getElementById('dica2').style.display = "none"
        document.getElementById('dica3').style.display = "none"
    }else{
        document.getElementById('semdica').style.display = "flex";
        document.getElementById('dica1').style.display = "none";
        document.getElementById('dica2').style.display = "none"
        document.getElementById('dica3').style.display = "none"
    }

}
function trocarGrande(){
    if(document.getElementById('dica2').style.display !== "flex"){
        document.getElementById('semdica').style.display = "none";
        document.getElementById('dica1').style.display = "none";
        document.getElementById('dica2').style.display = "flex"
        document.getElementById('dica3').style.display = "none"
    }else{
        document.getElementById('semdica').style.display = "flex";
        document.getElementById('dica1').style.display = "none";
        document.getElementById('dica2').style.display = "none"
        document.getElementById('dica3').style.display = "none"
    }
}
function trocarRes(){
    if(document.getElementById('dica3').style.display !== "flex"){
        document.getElementById('semdica').style.display = "none";
        document.getElementById('dica1').style.display = "none";
        document.getElementById('dica2').style.display = "none"
        document.getElementById('dica3').style.display = "flex"
    }else{
        document.getElementById('semdica').style.display = "flex";
        document.getElementById('dica1').style.display = "none";
        document.getElementById('dica2').style.display = "none"
        document.getElementById('dica3').style.display = "none"
    }
}
