const formRegistro = document.getElementById("registro");

formRegistro.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const nuevoUsuario = {
        nombre: nombre,
        correo: correo,
        password: password
    };

    localStorage.setItem("userRegister", JSON.stringify(nuevoUsuario));
    
    window.location.href = "/login.html";
});