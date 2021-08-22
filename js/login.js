//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("submitBtn").addEventListener("click", function () {
        let inputEmail = document.getElementById("email");
        let inputPassword = document.getElementById("contraseña");
        let camposCompletos = true;
        //console.log("inputEmail")
        if (inputEmail.value === '') {
            camposCompletos = false;
            inputEmail.classList.add("invalid")
        } else {
            inputEmail.classList.remove("invalid");                     //CONTROL DE VALIDACIÓN!!!!
        }
        if (inputPassword.value === '') {
            camposCompletos = false;
            inputPassword.classList.add("invalid");
        } else {
            inputPassword.classList.remove("invalid");
        }
        if (camposCompletos) {
            window.location = "index.html";
        } else {
            alert("Ingresar los datos por favor");
        }
    })
});
