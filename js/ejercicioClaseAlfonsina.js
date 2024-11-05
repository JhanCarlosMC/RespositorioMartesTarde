let tareas = [];

function mostrarMenu() {
    alert("C - Crear tarea\nR - Leer tareas\nU - Actualizar tarea\nD - Eliminar tarea\nS - Salir");

}

function crearTarea() {
    let tarea = prompt("Ingrese la nueva tarea:");
    tareas.push(tarea);
    alert(`Tarea "${tarea}" añadida.`);
}

function leerTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas disponibles.");
    } else {
        alert("Tus tareas:");
        tareas.forEach((tarea, index) => {
            alert(`${index + 1}. ${tarea}`);
        });
    }
}

function actualizarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas disponibles para actualizar.");
        return;
    }
    let numeroTarea = parseInt(prompt("Ingrese el número de la tarea a actualizar:")) - 1;
    if (numeroTarea >= 0 && numeroTarea < tareas.length) {
        let nuevaTarea = prompt("Ingrese la tarea actualizada:");
        tareas[numeroTarea] = nuevaTarea;
        alert(`Tarea ${numeroTarea + 1} actualizada a "${nuevaTarea}".`);
    } else {
        alert("Número de tarea inválido.");
    }
}

function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas disponibles para eliminar.");
        return;
    }
    let numeroTarea = parseInt(prompt("Ingrese el número de la tarea a eliminar:")) - 1;
    if (numeroTarea >= 0 && numeroTarea < tareas.length) {
        let tareaEliminada = tareas.splice(numeroTarea, 1);
        alert(`Tarea "${tareaEliminada}" eliminada.`);
    } else {
        alert("Número de tarea inválido.");
    }
}

function principal() {
    let opcion;
    do {
        mostrarMenu();
        opcion = prompt("Elija una opción (C, R, U, D, S):").toUpperCase();
        switch (opcion) {
            case 'C':
                crearTarea();
                break;
            case 'R':
                leerTareas();
                break;
            case 'U':
                actualizarTarea();
                break;
            case 'D':
                eliminarTarea();
                break;
            case 'S':
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción inválida. Por favor, intente nuevamente.");
        }
    } while (opcion !== 'S');
}

principal();


