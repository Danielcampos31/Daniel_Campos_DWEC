// Datos básicos de la cuenta
const titular = "Daniel Campos";
let saldoInicial = 1000;
const moneda = "€";

// Función que formatea una cantidad como dinero
function formatearDinero(cantidad) {
    return cantidad.toFixed(2).replace(".", ",") + " " + moneda;
}

// Lista de movimientos de la cuenta
let movimientos = [
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
function calcularSaldo() {
    return saldoInicial + totalIngresos() + totalGastos();
}

// Calcula el total gastado usando reduce
function totalGastado() {
    return movimientos
        .filter(movimiento => movimiento.importe < 0)
        .reduce((total, movimiento) => total + Math.abs(movimiento.importe), 0);
}

// Calcula el gasto total agrupado por categoría
function gastosPorCategoria() {
    return movimientos
        .filter(movimiento => movimiento.importe < 0)
        .reduce((gastos, movimiento) => {

            const categoria = movimiento.categoria;
            const importe = Math.abs(movimiento.importe);

            if (!gastos[categoria]) {
                gastos[categoria] = 0;
            }

            gastos[categoria] += importe;

            return gastos;

        }, {});
}

// Busca la categoría en la que más se ha gastado
function categoriaMayorGasto() {

    const gastos = gastosPorCategoria();

    let categoriaMayor = "";
    let mayorImporte = 0;

    for (let categoria in gastos) {

        if (gastos[categoria] > mayorImporte) {
            mayorImporte = gastos[categoria];
            categoriaMayor = categoria;
        }

    }

    return {
        categoria: categoriaMayor,
        importe: mayorImporte
    };
}

// Pinta los movimientos en la tabla
function pintarTabla(listaMovimientos) {

    const tabla = document.getElementById("tablaMovimientos");

    tabla.innerHTML = "";

    for (let movimiento of listaMovimientos) {

        const fila = document.createElement("tr");

        const claseImporte =
            movimiento.importe > 0 ? "ingreso" : "gasto";

        fila.innerHTML = `
            <td>${movimiento.concepto}</td>

            <td class="${claseImporte}">
                ${formatearDinero(movimiento.importe)}
            </td>

            <td>${movimiento.categoria}</td>

            <td>${movimiento.fecha}</td>

            <td>
                <button onclick="borrarMovimiento(${movimiento.id})">
                    Borrar
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    }
}

// Filtra los movimientos según la categoría seleccionada
function obtenerMovimientosFiltrados() {

    const categoriaSeleccionada =
        document.getElementById("filtroCategoria").value;

    if (categoriaSeleccionada === "Todas") {
        return movimientos;
    }

    return movimientos.filter(
        movimiento =>
            movimiento.categoria === categoriaSeleccionada
    );
}

// Pinta las estadísticas en la página
function pintarEstadisticas() {

    const saldo = calcularSaldo();
    const total = totalGastado();
    const mayorGasto = categoriaMayorGasto();

    document.getElementById("saldoActual").textContent =
        formatearDinero(saldo);

    document.getElementById("totalGastado").textContent =
        formatearDinero(total);

    if (mayorGasto.categoria === "") {

        document.getElementById("mayorGasto").textContent = "-";

    } else {

        document.getElementById("mayorGasto").textContent =
            mayorGasto.categoria +
            " (" +
            formatearDinero(mayorGasto.importe) +
            ")";
    }
}

// Borra un movimiento utilizando filter
function borrarMovimiento(id) {

    movimientos = movimientos.filter(
        movimiento => movimiento.id !== id
    );

    refrescar();
}

// Añade un nuevo movimiento
function añadirMovimiento(evento) {

    evento.preventDefault();

    const concepto =
        document.getElementById("concepto").value.trim();

    const importeTexto =
        document.getElementById("importe").value;

    const categoria =
        document.getElementById("categoria").value;

    const importe = Number(importeTexto);

    // Validar que el concepto no esté vacío
    if (concepto === "") {
        alert("El concepto no puede estar vacío.");
        return;
    }

    // Validar que el importe sea numérico
    if (importeTexto === "" || isNaN(importe)) {
        alert("El importe debe ser un número.");
        return;
    }

    // Convertir el importe en negativo si es un gasto
    let importeFinal = importe;

    if (categoria !== "Ingresos" && importeFinal > 0) {
        importeFinal = -importeFinal;
    }

    // Crear el nuevo movimiento
    const nuevoMovimiento = {
        id: Date.now(),
        concepto: concepto,
        importe: importeFinal,
        categoria: categoria,
        fecha: new Date().toISOString().split("T")[0]
    };

    // Añadir el movimiento al array
    movimientos.push(nuevoMovimiento);

    // Limpiar el formulario
    document.getElementById("formMovimiento").reset();

    // Actualizar la página
    refrescar();
}

// Actualiza la tabla y las estadísticas
function refrescar() {

    const movimientosFiltrados =
        obtenerMovimientosFiltrados();

    pintarTabla(movimientosFiltrados);

    pintarEstadisticas();
}

// Detecta cuando cambia el filtro
document
    .getElementById("filtroCategoria")
    .addEventListener("change", refrescar);

// Detecta cuando se envía el formulario
document
    .getElementById("formMovimiento")
    .addEventListener("submit", añadirMovimiento);

// Mostrar todo al cargar la página
refrescar();