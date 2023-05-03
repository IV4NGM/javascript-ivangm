document.getElementById("backgroundChange").addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
});

document.getElementById("defaultBackground").addEventListener("click", function(){
    document.body.style.backgroundColor = "beige";
});

document.getElementById("addComment").addEventListener("click", function(){
    const form = document.getElementById("formulario");
    var commentAdd = document.createElement("p");
    commentAdd.innerHTML = document.getElementById("comment").value;
    form.parentNode.insertBefore(commentAdd, form.nextSibling);
});

document.getElementById("makeTextBigger").addEventListener("click", function(){
    var textToBigger = document.getElementById("biggerText");
    // textToBigger.style.fontSize = "28px";
    textToBigger.style.fontSize = 2 * parseInt(window.getComputedStyle(textToBigger).fontSize) + "px";
});

document.getElementById("imgChange").addEventListener("click", function(){
    document.getElementById("imgChange").src = "https://cdn.hswstatic.com/gif/airplane-windows.jpg";
    document.getElementById("imgChange").alt = "plane";
    document.getElementById("textImg").innerHTML = "Esta es la imagen cambiada";
});