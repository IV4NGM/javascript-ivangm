//mostrar un mensaje en la consola
console.log("Hola mundo");
/*
las siguientes son para definir e inicializar una variable
para mostrar en consola
*/
var fatherName = "jose";
console.log(fatherName);

var video = {
    name: 'peaches',
    author: 'jack black',
    comments: [
        'el video es buenardo', // [0]
        'a mi no me gusto', // [1]
        'todos somos browser', // [2]
    ]
}
var celular = {
    brand: 'xaomi',
    price: 2000,
    hasStock: true,
    company: { name: 'xaomi company', address: { street: 'callesita no.4' } }
}
var data = [45, 67, 12, { qualifications: [10, 9 , 0] }, false, 23.77 ]
// imprimir el comentario de “a mi no me gusto”
console.log(video.comments[1]);
// imprimir la direccion de la compañia de la var celular
console.log(celular.company.address)
// imprimir si hay piezas disponibles de celular
console.log(celular.hasStock)
// imprimir la segunda calificacion
console.log(data[3].qualifications[1])
// imprimir la penultima posicion del array de data
console.log(data[data.length-2])
// imprimir la marca del celular
console.log(celular.brand)
// imprimir el ultimo comentario del video
console.log(video.comments[video.comments.length-1])


//Tarea:
var arrMovies=[{movie: 'Titanic', isFree: true}, {movie:'Xmen', isFree: false, price:20}];
var Movie=prompt('Ingrese nombre de película');
for (let i=0; i<arrMovies.length; i++){
    if (arrMovies[i].movie==Movie){
        if (arrMovies[i].isFree) {
            alert('Es gratis');
        } else {
            alert('El precio es '+ arrMovies[i].price);
        }
    }
}
