document.getElementById('formularioComentarios').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    // Aquí puedes agregar la lógica para enviar los datos al servidor con Ktor
    // usando fetch o XMLHttpRequest.

    console.log("Nombre:", nombre);
    console.log("Comentario:", comentario);

    // Opcional: Mostrar un mensaje de éxito al usuario
    alert("Comentario enviado con éxito!");
    this.reset(); // Limpiar el formulario
});