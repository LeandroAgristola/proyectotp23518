function validarFormulario() {
    // obtengo los datos de los campos del formulario
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var email = document.getElementById('email').value.trim();

    // valido los campos vacios utilizando el operador de comparacion
    if (nombre === '' || apellido === '' || telefono === '' || email === '') {
        alert('Por favor, complete todos los campos.');
        return false; // Evita que el formulario se envíe si hay campos vacíos.
    }

    // Validar el campo de nombre
    var nombreRegex = /^[a-zA-Z ]{2,254}$/;
    if (!nombreRegex.test(nombre)) {
        alert('El campo de nombre debe contener solo letras de A a Z y tener entre 2 y 254 caracteres.');
        return false; // Evita que el formulario se envíe si el nombre no cumple con las condiciones.
    }

    var nombreRegex = /^[a-zA-Z ]{2,254}$/;
    if (!nombreRegex.test(apellido)) {
        alert('El campo de apellido debe contener solo letras de A a Z y tener entre 2 y 254 caracteres.');
        return false; // Evita que el formulario se envíe si el nombre no cumple con las condiciones.
    }

    // Validar el campo de correo electrónico
    var emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese una dirección de correo electrónico válida.');
        return false; // Evita que el formulario se envíe si el email no tiene un formato válido.
    }

    // Validar el campo de teléfono (solo números y formato de 10 dígitos)
    var telefonoRegex = /^\d{10}$/;
    if (!telefono.match(telefonoRegex)) {
        alert('Por favor, ingrese un un numero de telefono valido con codigo de area sin 0 ni 15.');
        return false; // Evita que el formulario se envíe si el teléfono no cumple con las condiciones.
    }

    // Mostrar mensaje de envío exitoso
    alert('Formulario enviado! Nos contactaremos a la brevedad.');

    // Si todos los campos están llenos y son válidos, el formulario se enviará.
    return true;
}

// Manejar el evento "reset" del formulario para mostrar un mensaje
document.getElementById('contacto').addEventListener('reset', function () {
    alert('Formulario borrado.');
});