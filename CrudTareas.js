
function main() {
    let listTareas = [];
    let option;
    do {
        option = parseInt(prompt('Bienvenido al menu para la creacion de tareas.\n\n'
            + '1.Crear una tarea.\n'
            + '2.Mostrar lista de tareas.\n'
            + '3.Actualizar una tareas.\n'
            + '4.Eliminar una tarea.\n\n'
            + '0.Salir'));
    
        switch (option) {
            case 1:
                crearTarea(listTareas);
                option = parseInt(prompt('1.Para continuar.\n0.Salir'));
                break;
    
            case 2:
                alert('Caso 2');
                //mostrarListaTareas(listTareas);
                
                break;
    
            case 3:
                alert('Caso 3');
                //actualizarTarea(listTareas);
                break;
    
            case 4:
                alert('Caso 4');
                //eliminarTarea(listTareas);
                break;
    
            case 0:
                alert('Gracias por utilizar nuestro gestor de tareas.');
                break;
    
            default:
                alert('La opcion no esta dentro del menu, seleccione otra.');
                break;
        }
    } while (option != 0);
   
}

function crearTarea(listTareas){

    let nombreTarea = prompt('Ingrese la tarea a guardar: ');

    listTareas.push(nombreTarea);

    alert('Su tarea a sido guardada con exito!')
}



main();
