window.onload = function() {
    var name = document.getElementById("name");
    var nameExp = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,}$/;

    function validateName() {
        if(nameExp.test(name.value)) {
            return true;
        } else return false;
    }

    name.onfocus = function() {
        name.classList.remove("succes");
        name.classList.remove("error");
    }

    name.onblur = function() {
        if(!validateName()) {
            name.classList.remove("succes");
            name.classList.add("error");
        }
        if(validateName()) {
            name.classList.remove("error");
            name.classList.add("succes");
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
        lastName.classList.remove("succes");
        lastName.classList.remove("error");
    }

    lastName.onblur = function() {
        if(!validateLastName()) {
            lastName.classList.remove("succes");
            lastName.classList.add("error");
        }
        if(validateLastName()) {
            lastName.classList.remove("error");
            lastName.classList.add("succes");
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
        dni.classList.remove("succes");
        dni.classList.remove("error");
    }

    dni.onblur = function() {
        if(!validateDni()) {
            dni.classList.remove("succes");
            dni.classList.add("error");
        }
        if(validateDni()) {
            dni.classList.remove("error");
            dni.classList.add("succes");
        }
    }

    var date = document.getElementById("date");

    function calculateAge(date) {
        var today = new Date();
        var date2 = new Date(date)
        var age = today.getFullYear() - date2.getFullYear();
        var months = today.getMonth() - date2.getMonth();
        if (months < 0 || (months === 0 && today.getDate() < date2.getDate())) {
            age--;
        }
        return age;
    }

    function validateDate() {
        if(calculateAge(date.value) < 18) {
            return false
        } return true
    }

    date.onfocus = function() {
        date.classList.remove("succes");
        date.classList.remove("error");
    }

    date.onblur = function() {
        if(validateDate()) {
            date.classList.remove("error");
            date.classList.add("succes");
        }
        if(!validateDate()) {
            date.classList.remove("succes");
            date.classList.add("error");
        }
    }

    var phone = document.getElementById("phone");
    var phoneExp = /^[0-9]{10,10}$/;

    function validatePhone() {
        if(phoneExp.test(phone.value)) {
            return true;
        } else return false;
    }

    phone.onfocus = function() {
        phone.classList.remove("succes");
        phone.classList.remove("error");
    }

    phone.onblur = function() {
        if(!validatePhone()) {
            phone.classList.remove("succes");
            phone.classList.add("error");
        }
        if(validatePhone()) {
            phone.classList.remove("error");
            phone.classList.add("succes");
        }
    }

    var address = document.getElementById("address");
    var addressExp = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+[\s]+[0-9]+$/;

    function validateAddress() {
        if(addressExp.test(address.value)) {
            return true;
        } else return false;
    }

    address.onfocus = function() {
        address.classList.remove("succes");
        address.classList.remove("error");
    }

    address.onblur = function() {
        if(!validateAddress()) {
            address.classList.remove("succes");
            address.classList.add("error");
        }
        if(validateAddress()) {
            address.classList.remove("error");
            address.classList.add("succes");
        }
    }
}