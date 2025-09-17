// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;

    if (amigo != "") {
       amigos.push(amigo);
       limpiarCaja();
       let mostrarNombre = document.querySelector("#listaAmigos");
       mostrarNombre.innerHTML = amigos.join("<br>");
       
    } else{
       alert("Por favor, ingrese un nombre valido");

       }
    
}

function limpiarCaja() {
       document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
       let cantidad = amigos.length;
       let sorteo = Math.floor(Math.random()*cantidad)+1;
       let nombreSorteado = amigos[sorteo-1];
       console.log(nombreSorteado);
       
       let mostrarResultado = document.querySelector("#resultado");
       mostrarResultado.innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;



}