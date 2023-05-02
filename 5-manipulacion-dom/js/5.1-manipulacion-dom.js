// Cambio de contenido de un elemento

document.getElementById("titulo").innerHTML = "Este es otro texto";

// Cambio de estilo de un elemento
document.getElementById("botonEjemplo").style.backgroundColor = "red";

// Agregar un elemento a la página
var nuevoParrafo = document.createElement("p");
nuevoParrafo.setAttribute("id", "miNuevoParrafo");
nuevoParrafo.innerHTML = "Este es mi párrafo nuevo";
document.body.appendChild(nuevoParrafo);

// Eliminar un elemento de la página
var parrafoAEliminar = document.getElementById("parrafoAEliminar");
parrafoAEliminar.parentNode.removeChild(parrafoAEliminar);