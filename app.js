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