// Evento de clic en botón

document.getElementById("miBoton").addEventListener("click", function(){
    alert("Hiciste click donde no te dije.");
    document.getElementById("miBoton").style.backgroundColor = "red";
});

// Evento de cambio a una etiqueta input
document.getElementById("inputText").addEventListener("change", function(){
    alert("El valor ha cambiado.");
});

// Evento de teclado en un input
document.getElementById("inputText2").addEventListener("keyup", function(){
    alert("Presionaste la tecla: "+event.key);
});

// Evento de carga de una imagen
document.getElementById("miImagen").addEventListener("load", function(){
    alert("Se cargó la imagen de manera exitosa.");
});