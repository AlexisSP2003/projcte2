class Usuarios {
    constructor() {
        // Inicializar un arreglo vacío para almacenar los usuarios registrados
        this.usuariosRegistrados = [];
    }

    // Método para registrar un nuevo usuario
    registrarUsuario(nombre, contraseña) {
        // Verificar si el usuario ya está registrado
        const usuarioExistente = this.usuariosRegistrados.find(user => user.nombre === nombre);
        if (usuarioExistente) {
            alert('El usuario ya está registrado.');
        } else {
            // Si el usuario no está registrado, agregarlo al arreglo de usuarios
            this.usuariosRegistrados.push({ nombre, contraseña });
            alert('Usuario registrado exitosamente.');
        }
        // Vaciar los campos de entrada después de registrar
        this.vaciarCampos();
    }

    // Método para iniciar sesión
    iniciarSesion(nombre, contraseña) {
        // Buscar al usuario en la lista de usuarios registrados
        const usuario = this.usuariosRegistrados.find(user => user.nombre === nombre && user.contraseña === contraseña);
        if (usuario) {
            alert('Inicio de sesión exitoso.');
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
        // Vaciar los campos de entrada después de iniciar sesión
        this.vaciarCampos();
    }

    // Método para vaciar los campos de entrada
    vaciarCampos() {
        document.getElementById('nombre').value = '';
        document.getElementById('contraseña').value = '';
    }
}

// Crear una instancia de la clase Usuarios
const usuarios = new Usuarios();

// Obtener los elementos del DOM
const registrarBtn = document.getElementById('registrar-btn');
const iniciarSesionBtn = document.getElementById('iniciar-sesion-btn');

// Evento para registrar un nuevo usuario cuando se cliquea el botón de "Registrar-se"
registrarBtn.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const contraseña = document.getElementById('contraseña').value;
    usuarios.registrarUsuario(nombre, contraseña);
});

// Evento para iniciar sesión cuando se cliquea el botón de "Iniciar Sessió"
iniciarSesionBtn.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const contraseña = document.getElementById('contraseña').value;
    usuarios.iniciarSesion(nombre, contraseña);
});
