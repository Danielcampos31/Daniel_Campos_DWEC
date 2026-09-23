console.log("¡Hola DWEC! Mi taller ya funciona.");

let boton = document.getElementById("boton");
let aviso = document.getElementById("aviso");

let contador = 0;

boton.addEventListener("click", function() {

    contador++;

    aviso.textContent = "Has pulsado el botón " + contador + " veces";

});

let modonoche = document.getElementById("modonoche");

modonoche.addEventListener("click", function() {

    document.body.classList.toggle("tema-noche");

});