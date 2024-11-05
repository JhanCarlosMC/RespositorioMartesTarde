const formLogin = document.getElementById("login");

formLogin.addEventListener("submit", function(e){
    e.preventDefault();

    const correo = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuarioRegistrado = JSON.parse(localStorage.getItem("userRegister"));

    console.log(usuarioRegistrado.correo + " " + correo);
    console.log(usuarioRegistrado.password + " " + password);

    if(usuarioRegistrado.correo == correo && usuarioRegistrado.password == password){
        window.location.href = "/index.html";

    }else{
        alert("El usuario y contraseña no coinciden.")
    }
});