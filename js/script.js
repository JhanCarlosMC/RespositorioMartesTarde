//mostrarMensaje();

function mostrarMensaje(){
    alert('Mensaje desde una funcion');
    console.log('Mensaje desde la consola');
}

//let resultado = operacionNumeros();
//console.log(resultado);

function operacionNumeros(){
    //let num1 = prompt('Ingrese un numero');
    //let num2 = prompt('Ingrese un numero');
    let num1 = parseInt(prompt('Ingrese un numero'));
    let num2 = parseInt(prompt('Ingrese un numero'));

    return num1 + num2;
}

//funcionEjemplo();
function funcionEjemplo(){
    let num1 = parseInt(prompt('Ingrese un numero'));
    let num2 = parseInt(prompt('Ingrese un numero'));

    let resultadoMultiplicacion = function(a,b){
        return a * b;
    }

    console.log(resultadoMultiplicacion(num1,num2));
}

//funcionEjemplo2();
function funcionEjemplo2(){
    let name = prompt('Ingrese su nombre');

    let mensajePersonal = function(nombre){

        if(nombre == "Jhan"){
            return "Bienvenido"
        }else{
            return "Adios"
        }
    }

    console.log("Mensaje: " + mensajePersonal(name));
}