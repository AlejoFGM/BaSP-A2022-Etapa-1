window.onload = function() {
    var name = document.getElementById("name");
    var nameExp = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,}$/;

    function validateName() {
        if(nameExp.test(name.value)) {
            return true;
        } else return false;
    }

    name.onfocus = function() {
        name.classList.remove("succes")
        name.classList.remove("error")
    }

    name.onblur = function() {
        if(!validateName()) {
            name.classList.remove("succes")
            name.classList.add("error")
        }
        if(validateName()) {
            name.classList.remove("error")
            name.classList.add("succes")
        }
    }

    var lastName = document.getElementById("last-name");
    var lastNameExp = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,}$/;

    function validateLastName() {
        if(lastNameExp.test(lastName.value)) {
            return true;
        } else return false;
    }

    lastName.onfocus = function() {
        lastName.classList.remove("succes")
        lastName.classList.remove("error")
    }

    lastName.onblur = function() {
        if(!validateLastName()) {
            lastName.classList.remove("succes")
            lastName.classList.add("error")
        }
        if(validateLastName()) {
            lastName.classList.remove("error")
            lastName.classList.add("succes")
        }
    }

    var dni = document.getElementById("dni");
    var dniExp = /^[0-9]{7,}$/;

    function validateDni() {
        if(dniExp.test(dni.value)) {
            return true;
        } else return false;
    }

    dni.onfocus = function() {
        dni.classList.remove("succes")
        dni.classList.remove("error")
    }

    dni.onblur = function() {
        if(!validateDni()) {
            dni.classList.remove("succes")
            dni.classList.add("error")
        }
        if(validateDni()) {
            dni.classList.remove("error")
            dni.classList.add("succes")
        }
    }
}