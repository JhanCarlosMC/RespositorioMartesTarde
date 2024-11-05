
// function crearPersona(newNombre, newEdad) {
//     let newPersona = {
//         nombre: newNombre,
//         edad: newEdad
//     };

//     return newPersona;
// }

// function pedirDatospersona() {
//     let listPersonas = [];

//     for (let index = 0; index < 2; index++) {

//         let nombre = prompt('Ingrese su nombre');
//         let edad = parseInt(prompt('Ingrese su edad'));

//         listPersonas.push(crearPersona(nombre, edad));
//     }

//     console.log(listPersonas);

// }

// pedirDatospersona();


// let figura = {
//     lados: 4,
//     color: 'Azul',
//     angulos: 4
// };
 
// /**alert(Object.keys(figura));
// */

// console.log(Object.keys(figura));
// console.log(Object.values(figura));
// console.log(Object.entries(figura));

// /** 
// for (let key in figura) {
//     console.log(`key: ${key}  Valor: ${figura[key]}`);
//     console.log('Key: ' + key +" Valor:" + figura[key]);
// }
// */

// //--------------------Funcion Declarativa
// //Nombre OBLIGATORIO
// //Argumentos OPCIONALES
// //Retorno OPCIONAL

// function nombreFuncion() {
//     //Codigo
// }
// function nombreFuncion2(a, b) {
//     //Codigo
// }
// function nombreFuncion3(a, b) {
//     //Codigo
//     return a + b;
// }
// function nombreFuncion3() {
//     //Codigo
//     return "a+b";
// }

// //-------------Funciones anonimas
// let ejemploFuncion = function (x, c) {
//     //codigo
//     return 0;
// }
// //--------------Arrow Function
// let arrow = () => {
//     //Codigo
//     //Codigo
// };

// let arrowS = (nombre) => "Bienvenido " + nombre;

// (condi) ? true : false;

// /**
// let miArreglo = [];

// for (let i = 0; i < 5; i++) {
//     miArreglo.push(Math.trunc(Math.random(50)*1000));
// }

// miArreglo.forEach(element => {
//     console.log(element);
// });
// miArreglo[3]
// miArreglo.indexOf('Jhan'); //-1
// //console.log(miArreglo);
// */


// //let dato = prompt("Hola, ingrese su nombre") //Solicitando
// //console.log('Bienvenido ', dato) //Mostrando

// // Haz un algoritmo que tome un número ingresado por el usuario y
// // devuelva su persistencia multiplicativa.
// // La persistencia multiplicativa es el número de veces que debes multiplicar
// // los dígitos de un número hasta llegar a un solo dígito. Por ejemplo:
// // si el número es 39, entonces tu programa debería devolver 3, porque 3 * 9 = 27,
// // luego 2 * 7 = 14 y finalmente 1 * 4 = 4, y te detienes.

// /** 
// let num = parseInt(prompt('Ingrese el número al cual quiere hallar su persistencia multiplicativa'));
// console.log(num);
// let totalPersistencia = persistenciaMultiplicativa(num);

// console.log("Dado esto la persitencia multiplicativa de", num, "es ", totalPersistencia);


// function persistenciaMultiplicativa(num) {
//     let count = 0;
//     // "123456789" = .length

//     while (num >= 10) {
//         let multiplicacion = 1;
//         let numStr = num.toString();
//         for (let i = 0; i < numStr.length; i++) {
//             multiplicacion *= parseInt(numStr[i]);
//         }
//         num = multiplicacion;
//         count++;
//     }
//     return count;
// }
// */


// /** 
// let num = prompt('Ingrese el número al cual quiere hallar su persistencia multiplicativa');
// let numX = num;
// let contDeWhile = 0;
// let text;
// let i;
// console.log("Para calcular la persitencia de", numX, "vamos a separar sus digitos");
// console.log("y a multiplicarlos para luego hacer lo mismo con su resultado. La cantidad");
// console.log("de veces que hagamos esto, va a hacer lo que llamemos persistencia multiplicativa.");
// console.log("");

// while (num > 10) {
//     num = num * 10;
//     let cont = 0;
//     cont = contarDigitos(num, cont, i);
//     let digitos = new Array(cont);
//     llenarArray(digitos, num, i);
//     text = contDeWhile + 1 + ". " + digitos[cont - 1].toString() + "x";
//     if (num > 10) {
//         num = multDigitos(digitos, cont);
//     }
//     text = llenarText(digitos, cont, num, text);
//     console.log(text);
//     contDeWhile++;
// };
// console.log("");
// console.log("Dado esto la persitencia multiplicativa de", numX, "es", contDeWhile);

// function contarDigitos(num, cont, i) {
//     while (num > 10) {
//         num = Math.trunc(num / 10);
//         i = num;
//         i = i % 10
//         cont++;
//     }
//     return cont;
// };

// function llenarArray(digitos, num, i) {
//     let e = 0;
//     while (num > 10) {
//         num = Math.trunc(num / 10);
//         i = num;
//         i = i % 10
//         digitos[e] = i;
//         e++;
//     }
// };

// function multDigitos(digitos, cont) {
//     let mult = 1;
//     for (let e = 0; e < cont; e++) {
//         mult = mult * digitos[e];
//     }
//     return mult;
// };

// function llenarText(digitos, cont, num, text) {
//     cont = cont - 2;
//     while (cont > -1) {
//         if (cont > 0) {
//             text = text + digitos[cont] + "x";
//             cont = cont - 1;
//         } else {
//             text = text + digitos[cont] + " = " + num;
//             cont = cont - 1;
//         };
//     };
//     return text;
// };

// */



// /** 
// console.log(num/10);

// let dec = num/10;
// console.log(Math.trunc(dec));
// */
// /** 
// let flag = true;
// while(flag){
//     //Codigo
    
//     let palabraClave = prompt('Ingrese alguna opcion');
//     if (palabraClave == 'exit') {
//         flag = false;
//     }
// }

// let x = 1;
// while ( x < 10) {
    
//     x =+ 2;
// }*/

function mensaje(){
    alert("Hola todos");
}