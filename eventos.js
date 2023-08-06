document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el div por su id o clase, por ejemplo, con un id "mi-div":
    const miDiv = document.getElementById("midiv"); // Reemplaza "mi-div" con el id de tu div, si lo tienes con un id.
    
    // Agregar el manejador de eventos para el clic en el div:
    miDiv.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});
