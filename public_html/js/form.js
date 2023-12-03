function validarFormulario() {
        const archivos = document.getElementById('imagenes').files;
        const mensajeError = document.getElementById('mensaje-error');
        
    for (let i = 0; i < archivos.length; i++) {
        const archivo = archivos[i];
        const extension = archivo.name.split('.').pop().toLowerCase();

        if (extension !== 'jpg' && extension !== 'png' && extension!='webp') {
            mensajeError.innerHTML = 'Solo se permiten archivos .JPG, .PNG y .webp';
            return false; // Detener el envío del formulario
        }
    }

    // Restablecer el mensaje de error si no hay problemas
    mensajeError.innerHTML = '';
    return true; // Permitir el envío del formulario
}