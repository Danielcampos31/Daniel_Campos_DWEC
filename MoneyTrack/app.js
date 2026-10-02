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

// Calcula el total de los ingresos
function totalIngresos() {
    let total = 0;

    for (let movimiento of movimientos) {
        if (movimiento.importe > 0) {
            total += movimiento.importe;
        }
    }

    return total;
}

// Calcula el total de los gastos
function totalGastos() {
    let total = 0;

    for (let movimiento of movimientos) {
        if (movimiento.importe < 0) {
            total += movimiento.importe;
        }
    }

    return total;
}

// Calcula el saldo actual
function saldoActual() {
    return saldoInicial + totalIngresos() + totalGastos();
}

// Mostrar los resultados por consola
console.log("Total ingresos:", formatearDinero(totalIngresos()));
console.log("Total gastos:", formatearDinero(totalGastos()));
console.log("Saldo actual:", formatearDinero(saldoActual()));

// Pinta los movimientos en la tabla
function pintarTabla(listaMovimientos) {
    const tabla = document.getElementById("tablaMovimientos");

    tabla.innerHTML = "";

    for (let movimiento of listaMovimientos) {
        const fila = document.createElement("tr");

        const claseImporte = movimiento.importe > 0 ? "ingreso" : "gasto";

        fila.innerHTML = `
            <td>${movimiento.concepto}</td>
            <td class="${claseImporte}">
                ${formatearDinero(movimiento.importe)}
            </td>
            <td>${movimiento.categoria}</td>
            <td>${movimiento.fecha}</td>
        `;

        tabla.appendChild(fila);
    }
}

// Filtra los movimientos según la categoría seleccionada
function filtrarMovimientos() {
    const categoriaSeleccionada =
        document.getElementById("filtroCategoria").value;

    if (categoriaSeleccionada === "Todas") {
        pintarTabla(movimientos);
    } else {
        const movimientosFiltrados = movimientos.filter(
            movimiento => movimiento.categoria === categoriaSeleccionada
        );

        pintarTabla(movimientosFiltrados);
    }
}

// Detecta cuando cambia el filtro
document
    .getElementById("filtroCategoria")
    .addEventListener("change", filtrarMovimientos);

// Mostrar todos los movimientos al cargar la página
pintarTabla(movimientos);