document.getElementById("alertComment").addEventListener("click", function(){
    alert("El texto ingresado es: " + document.getElementById("comment2").value);
});

document.querySelectorAll("li").forEach(p => p.addEventListener("click", function(){
    alert("Diste click en el elemento: " + p.innerHTML);
}))

document.getElementById("alertImage").addEventListener("click", function(){
    alert("Diste click en la imagen del jet")
});

document.getElementById("comment3").addEventListener("keypress", function(event){
    if(event.key=='Enter'){
        event.preventDefault();
        const form2 = document.getElementById("formulario2");
        var commentAdd = document.createElement("p");
        commentAdd.innerHTML = document.getElementById("comment3").value;
        form2.parentNode.insertBefore(commentAdd, form2.nextSibling);
    }
});
