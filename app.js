const videojuegos = [
    {
        nombre: "Minecraft",
        compania: "Mojang",
        plataforma: "PC",
        valoracion: 9.5,
        precio: 29.99
    },
    {
        nombre: "Grand Theft Auto V",
        compania: "Rockstar Games",
        plataforma: "PC",
        valoracion: 9.3,
        precio: 19.99
    },
    {
        nombre: "The Legend of Zelda: Breath of the Wild",
        compania: "Nintendo",
        plataforma: "Nintendo Switch",
        valoracion: 9.8,
        precio: 59.99
    },
    {
        nombre: "EA Sports FC 27",
        compania: "EA Sports",
        plataforma: "PC",
        valoracion: 8.5,
        precio: 79.99
    },
    {
        nombre: "Red Dead Redemption 2",
        compania: "Rockstar Games",
        plataforma: "PC",
        valoracion: 9.7,
        precio: 39.99
    }
];

const cuerpoTabla = document.querySelector("#tablaJuegos tbody");

function pintarTabla() {
    cuerpoTabla.innerHTML = "";

    videojuegos.forEach(videojuego => {
        const fila = document.createElement("tr");

        const nombre = document.createElement("td");
        nombre.textContent = videojuego.nombre;

        const compania = document.createElement("td");
        compania.textContent = videojuego.compania;

        const plataforma = document.createElement("td");
        plataforma.textContent = videojuego.plataforma;

        const valoracion = document.createElement("td");
        valoracion.textContent = videojuego.valoracion;

        const precio = document.createElement("td");
        precio.textContent = videojuego.precio + " €";

        fila.appendChild(nombre);
        fila.appendChild(compania);
        fila.appendChild(plataforma);
        fila.appendChild(valoracion);
        fila.appendChild(precio);

        cuerpoTabla.appendChild(fila);
    });
}

pintarTabla();

const botonAnadir = document.getElementById("anadirJuego");

botonAnadir.addEventListener("click", function() {

    const nombre = document.getElementById("nombre").value;
const compania = document.getElementById("compania").value;
const plataforma = document.getElementById("plataforma").value;
const valoracion = Number(document.getElementById("valoracion").value);
const precio = Number(document.getElementById("precio").value);

if (nombre === "" || compania === "" || plataforma === "" || valoracion === 0 || precio === 0) {
    alert("Rellena todos los campos.");
    return;
}

const nuevoVideojuego = {
    nombre: nombre,
    compania: compania,
    plataforma: plataforma,
    valoracion: valoracion,
    precio: precio
};

videojuegos.push(nuevoVideojuego);
pintarTabla();
document.getElementById("formularioJuego").reset();

});