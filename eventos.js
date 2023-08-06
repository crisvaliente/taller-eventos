const miBoton = document.getElementById("miboton");
const miDiv = document.getElementById("midiv");

miBoton.addEventListener("click", function(event) {
    event.stopPropagation(); 
    alert("Hola!");
});

miDiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
});