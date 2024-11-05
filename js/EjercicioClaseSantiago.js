
function main() {

    let newTarea = {
        nombre: "",
        fecha: "",
        creador: "",
    }

    let listaTareas = [];
    listaTareas.push(newTarea);

    let opcion;

    do {
        opcion = parseInt(prompt('¡Bienvenido al sistema de gestión de tareas!\n\n'
            + 'Por favor ingrese una opción:\n\n'
            + '1 - Crear una nueva tarea.\n'
            + '2 - Mostrar lista de tareas.\n'
            + '3 - Actualizar una tarea.\n'
            + '4 - Eliminar una tarea.\n'
            + '0 - Salir.'));

        switch (opcion) {
            case 1:
                crearTarea(listaTareas);
                break;

            case 2:
                mostrarListaTareas(listaTareas);
                break;

            case 3:
                actualizarTarea(listaTareas);
                break;

            case 4:
                eliminarTarea(listaTareas);
                break;

            case 0:
                alert('¡Gracias por utilizar nuestro gestor de tareas!');
                break;

            default:
                alert('Por favor ingrese una opción correcta.');
                break;
        }
    } while (opcion != 0);
}

//Funcion encargada de pedir la informacion de una tarea y agregarla a la lista de tareas.
function crearTarea(listaTareas) {
    let nombreTarea = prompt('Ingrese la tarea a guardar: ');
    if (nombreTarea.trim() === '') {
        alert('El campo no puede estar vacío. Intente nuevamente.');
    } else {
        listaTareas.push(nombreTarea);

        alert('¡Su tarea a sido guardada con exito!');
    }

}

function mostrarListaTareas(listaTareas) {

    if (listaTareas.length === 0) {
        alert('No hay tareas en la lista.');
    } else {
        let mensaje = 'Lista de tareas\n\n'
        listaTareas.forEach((tarea, index) => {
            mensaje += `${index + 1} - ${tarea}\n`;
        });
        alert(mensaje);
    }
}

function actualizarTarea(listaTareas) {
    if (listaTareas.length === 0) {
        alert('No hay tareas para actualizar.');
    } else {
        let mensaje = 'Lista de tareas: \n\n';
        listaTareas.forEach((tarea, index) => {
            mensaje += `${index + 1} - ${tarea}\n`;
        });

        mensaje += '\nIngrese el número de la tarea que desea actualizar: ';

        let indice = parseInt(prompt(mensaje));

        if (indice > 0 && indice <= listaTareas.length) {
            let nuevaTarea = prompt('Por favor ingrese el nuevo nombre para la tarea:');
            listaTareas[indice - 1] = nuevaTarea;
            alert('Tarea actualizada con éxito');
        } else {
            alert('Ingrese un número de tarea válido e intente de nuevo.');
        }
    }
}

function eliminarTarea(listaTareas) {
    if (listaTareas.length === 0) {
        alert('No hay tareas para eliminar.');
    } else {
        let mensaje = 'Lista de tareas: \n\n';
        listaTareas.forEach((tarea, index) => {
            mensaje += `${index + 1} - ${tarea}\n`;
        });

        mensaje += '\nIngrese el número de la tarea que desea eliminar: ';

        let indice = parseInt(prompt(mensaje));

        if (indice > 0 && indice <= listaTareas.length) {
            listaTareas.splice(indice - 1, 1);
            alert('Tarea eliminada con éxito.');
        } else {
            alert('Índice inválido. Intente de nuevo.');
        }
    }

}

main();