//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("logbttn").addEventListener("click", function () {
        let inputEmail = document.getElementById("usuario");
        let inputPassword = document.getElementById("password");
        let camposCompletos = true;
        if (inputEmail.value === '') {
            inputEmail.classList.add("invalid");
            camposCompletos = false;
        } else {
            inputEmail.classList.remove("invalid");                     //CONTROL DE VALIDACIÓN!!!!
                                                                        //CONTROL DE VALIDACIÓN!!!!
        }
        if (inputPassword.value === '') {
            inputPassword.classList.add("invalid");
            camposCompletos = false;
        } else {
            inputPassword.classList.remove("invalid");
        }
        if (camposCompletos) {
            window.location = "inicio.html";
        } else {
            alert("Ingresar los datos por favor");
        }
    })
});
