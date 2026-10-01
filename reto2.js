// Array con las tareas del día
let tareas = [
    "Estudiar JavaScript",
    "Hacer ejercicios de clase",
    "Repasar los apuntes",
    "Hacer los deberes"
];

// Horas disponibles para hacer las tareas
let horasDisponibles = 4;

// Recorremos las tareas y mostramos cada una numerada
for (let i = 0; i < tareas.length; i++) {
    console.log((i + 1) + ". " + tareas[i]);
}

// Comprobamos cuántas horas tenemos disponibles
if (horasDisponibles > 5) {
    console.log("Día tranquilo");
} else if (horasDisponibles >= 3) {
    console.log("Día normal");
} else {
    console.log("Día ajustado");
}