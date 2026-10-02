// Datos básicos de la cuenta
const titular = "Daniel Campos";
let saldoInicial = 1000;
const moneda = "€";

// Función que formatea una cantidad como dinero
function formatearDinero(cantidad) {
    return cantidad.toFixed(2).replace(".", ",") + " " + moneda;
}

// Comprobación del nivel 01
console.log("Titular:", titular);
console.log("Saldo inicial:", formatearDinero(saldoInicial));