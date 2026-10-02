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

// Lista de movimientos de la cuenta
const movimientos = [
    {
        id: 1,
        concepto: "Nómina",
        importe: 1200,
        categoria: "Ingresos",
        fecha: "2026-10-01"
    },
    {
        id: 2,
        concepto: "Compra supermercado",
        importe: -65.50,
        categoria: "Comida",
        fecha: "2026-10-01"
    },
    {
        id: 3,
        concepto: "Gasolina",
        importe: -50,
        categoria: "Transporte",
        fecha: "2026-09-30"
    },
    {
        id: 4,
        concepto: "Entrada cine",
        importe: -12,
        categoria: "Ocio",
        fecha: "2026-09-28"
    },
    {
        id: 5,
        concepto: "Venta de un videojuego",
        importe: 30,
        categoria: "Ingresos",
        fecha: "2026-09-27"
    },
    {
        id: 6,
        concepto: "Cena con amigos",
        importe: -25,
        categoria: "Ocio",
        fecha: "2026-09-26"
    }
];