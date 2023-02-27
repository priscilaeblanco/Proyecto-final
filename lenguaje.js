document.getElementById("boton1").addEventListener("click", function () {
    let lista_valor = "lista1"; 
    let logo_valor = "logo_datos";
    visible (lista_valor, logo_valor);
})

document.getElementById("boton2").addEventListener("click", function () {
    let lista_valor = "lista2"; 
    let logo_valor = "logo_exp";
    visible (lista_valor, logo_valor);
})

document.getElementById("boton3").addEventListener("click", function () {
    let lista_valor = "lista3"; 
    let logo_valor = "logo_habilidad";
    visible (lista_valor, logo_valor);
})

document.getElementById("boton4").addEventListener("click", function () {
    let lista_valor = "lista4"; 
    let logo_valor = "logo_conocimiento";
    visible (lista_valor, logo_valor);
})

agradecimiento();

function visible (lista,logo){
    document.getElementById(lista).style.display = "block";
    document.getElementById(logo).style.display = "block";
}

function agradecimiento () {
    console.log("Muchas gracias por visitar mi primer página web.");
}
