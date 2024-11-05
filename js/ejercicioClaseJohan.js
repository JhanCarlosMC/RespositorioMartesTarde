let nombre = prompt('Bienvenindo ¿Cuál es tu nombre?');
tareas = new Array;
tareas[0] = prompt('Hola ' + nombre + ', comienza ingresando una tarea');
let opc;

do {
    opc = parseInt(prompt('Estás en menu, selecciona una opcion: \n'
        + '1. Revisar tareas \n'
        + '2. Actualizar tarea \n'
        + '3. Eliminar tarea \n'
        + '4. Agregar tarea \n'
        + '0. Salir'));
    switch (opc) {
        case 1:
            let text = revisarTareas(tareas)
            alert(text);
            break;
        case 2:
            actualizarTarea(tareas)
            break;
        case 3:
            eliminarTarea(tareas)
            break;
        case 4:
            agregarTarea(tareas);
            break;
        case 0:
            alert('Gracias por usar el programa ' + nombre + ', vuelve pronto!');
            break;
        default:
            alert('La opcion selecciona no cumple ninguna función \n'
                + 'Por favor dijite una opcion correta');
            break;
    }
} while (opc != 0);


function revisarTareas(tareas) {
    let text = '';
    for (let i = 0; i < tareas.length; i++) {
        text += i+1 + '. ' + tareas[i] + '\n';
    };
    return(text);
};

function actualizarTarea(tareas) {
    let text = revisarTareas(tareas);
    let auxiliar;
    num = parseInt(prompt('Las tareas que han sido ingresadas en el sistema fueron: \n'
        + text
        + 'Digite el número de la tarea que desea actulizar'));
    auxiliar = tareas[num-1];
    tareas[num-1] = prompt('La tarea seleccionada fue: \n'
        + tareas[num-1] + '\n'
        + 'Describa la nueva tarea');
    if (text != tareas[num-1]) {
        alert('La nueva tarea fue guardada con exito!')
    }else{
        alert('Hubo un error en el guardado, vuelvalo a intentar')
    };
};

function eliminarTarea(tareas) {
    let text = revisarTareas(tareas);
    num = parseInt(prompt('Las tareas que han sido ingresadas en el sistema fueron: \n'
        + text
        + 'Digite el número de la tarea que desea eliminar \n'
        + 'o ingrese "0" para eliminar todas las tareas') - 1);
    if (num < 0 ) {
        tareas.length = 0;
        alert('Todas las tareas fueron eliminadas con exito.')
    }else{
        let auxiliar = tareas[num];
        while (num < tareas.length) {
            tareas[num] = tareas[num+1];
            num++;
        }
        tareas.pop();
        alert('La tarea llamada' + ' "' + auxiliar + '" ' + 'fue eliminada con exito.')
    };
};

function agregarTarea(tareas) {
    let tarea;
    let valor = true;
    while (valor) {
        tarea = prompt('Describe tu nueva tarea');
        tareas.push(tarea);
        valor = confirm('¿Quiere agregar otra tarea?');
    };
};

