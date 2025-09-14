// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let cantidad = amigos.length


function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;

    amigos.push(amigo);
    limpiarCaja();
    let mostrarNombre = document.querySelector("#listaAmigos");
    mostrarNombre.innerHTML = amigos;
    
}


function limpiarCaja() {
       document.querySelector("#amigo").value = "";
}


function sortearAmigos() {
       let sorteo = Math.floor(Math.random()*cantidad)-1;
       let nombreSorteado = amigos[sorteo];

}