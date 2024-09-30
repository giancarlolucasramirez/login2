let usarioCorrecto = "admin";
let contraseñaCorrecta = "admin2024";
let resultado = document.getElementById("resultado")

function login() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario === usarioCorrecto && contraseña === contraseñaCorrecta) {
        resultado.style.color = "green";
        resultado.innerHTML = "acceso concedido";
    } else {
        resultado.style.color = "red";
        resultado.innerHTML = "acceso denegado";
        usuario = document.getElementById("usuario").value="";
        contraseña = document.getElementById("contraseña").value=""
    }


}

