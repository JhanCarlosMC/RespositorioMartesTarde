
//Obtencion de un elemento
// ID
let divElementId = document.getElementById("miElemento");
// console.log(divElementId);

//Class
let divElementClass = document.getElementsByClassName("classElement");
// console.log(divElementClass);

//Etiqueta
let listDivs = document.getElementsByTagName("div");
// console.log(listDivs);

//Selecctor de css
let divByCss = document.querySelector(".classElement");
// console.log(divByCss);

let divsByCss = document.querySelectorAll(".classElement");
// console.log(divsByCss);

let parrafoTest = document.querySelector("#miElemento p");
console.log(parrafoTest);

//Modificacion de contenido
//Texto
parrafoTest.textContent = "Hola desde TextContent";

//Html
divByCss.innerHTML = "<p> Hola desde un <strong>InnerHTML</strong></p>";

let enlaceDiv = document.querySelector("#divTres a");
//Modificar Atributos
enlaceDiv.setAttribute("id", "enlaceDiv");
enlaceDiv.setAttribute("href", "https://www.google.com/");
enlaceDiv.textContent = "Enlace";

//Agregar clase a una etiqueta
enlaceDiv.classList.add("classStyle");
enlaceDiv.classList.add("classStyle1");

//Quitar clase a una etiqueta
enlaceDiv.classList.remove("classStyle1");

//Crear elementos HTML
let nuevoTitulo = document.createElement("h1");
nuevoTitulo.classList.add("classStyle");
nuevoTitulo.textContent = "Titulo Creado en JS";

divElementId.removeChild(parrafoTest);
divElementId.appendChild(nuevoTitulo);



//Eventos
let eventDiv = document.getElementById("eventDiv");

eventDiv.addEventListener("click", function(){
    let newElement = document.createElement("p");

    newElement.textContent = "Parrafo generado";
    eventDiv.appendChild(newElement);
});

function eventOnClickButton (){
    alert("Accion desde un onAction");
}

let buttonEvent = document.getElementById("actionButton");

buttonEvent.addEventListener("click", function(){
    alert("Mensaje desde un EventListener")
});

let formlogin = document.getElementById("miFormulario");

let listUsers = [];

formlogin.addEventListener("submit", function(e){
    e.preventDefault();

    let newUsuario = {
        nombre: "",
        password: ""
    }

    newUsuario.nombre = document.getElementById("nombre").value;
    newUsuario.password = document.getElementById("password").value;

    listUsers.push(newUsuario);
    localStorage.setItem("listUsers", JSON.stringify(listUsers));

    formlogin.reset();
});

function mostrarLocalStorage(){
    console.log(JSON.parse(localStorage.getItem("listUsers")));
}
