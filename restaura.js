document.addEventListener("DOMContentLoaded", function() {
    // Agregar event listener para el formulario de restauración de contraseña
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener el valor del correo electrónico introducido por el usuario
        const email = document.getElementById("email").value;

        // Validar el correo electrónico (puedes añadir tu propia lógica de validación aquí)
        if (isValidEmail(email)) {
            // Si el correo electrónico es válido, puedes realizar las acciones necesarias, como enviar una solicitud al servidor para restaurar la contraseña
            alert("Se ha enviado una solicitud para restaurar la contraseña al correo electrónico: " + email);
        } else {
            // Si el correo electrónico no es válido, mostrar un mensaje de error
            alert("Por favor, introduzca una dirección de correo electrónico válida.");
        }
    });
});

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
