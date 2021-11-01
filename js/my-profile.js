//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    document.getElementById("btnGuardado").addEventListener("click",function () {

        let inputName = document.getElementById("nombre");
        let inputApellido = document.getElementById("apellido");
        let inputTel = document.getElementById("Tel_de_contacto");
        let inputEmail = document.getElementById("emailInput");
        let camposCompletos = true;

        if (inputName.value === '') {
            camposCompletos = false;
            inputName.classList.add("invalid")
        } 
        else {
            inputName.classList.remove("invalid");                     //CONTROL DE VALIDACIÓN!!!!

        }
        if (inputApellido.value === '') {
            camposCompletos = false;
            inputApellido.classList.add("invalid");
        } 
        else {
            inputApellido.classList.remove("invalid");
        }
        if (inputEmail.value === '') {
            camposCompletos = false;
            inputEmail.classList.add("invalid")
        } 
        else {
            inputEmail.classList.remove("invalid");                     //CONTROL DE VALIDACIÓN!!!!
        }
        if (inputTel.value === '') {
            camposCompletos = false;
            inputTel.classList.add("invalid");
        } 
        else {
            inputTel.classList.remove("invalid");

        }
        if (camposCompletos) {
            localStorage.setItem('user-Nombre', JSON.stringify(inputName.value ));
            localStorage.setItem('user-Apellido', JSON.stringify(inputApellido.value ));
            localStorage.setItem('user-mail', JSON.stringify(inputEmail.value ));
            localStorage.setItem('user-Tel', JSON.stringify(inputTel.value ));

            let nombreLocal = localStorage.getItem("user-Nombre");
            let apellidoLocal = localStorage.getItem("user-Apellido");
            let mailLocal = localStorage.getItem("user-mail");
            let telLocal = localStorage.getItem("user-Tel");


            document.getElementById("nombreId").innerHTML = JSON.parse(nombreLocal);
            document.getElementById("apellidoId").innerHTML = JSON.parse(apellidoLocal);;
            document.getElementById("emailId").innerHTML = JSON.parse(mailLocal);;
            document.getElementById("telefonoId").innerHTML = JSON.parse(telLocal);;
            
        }
        else {
            alert("Ingresar los datos por favor");
        }


    });
});