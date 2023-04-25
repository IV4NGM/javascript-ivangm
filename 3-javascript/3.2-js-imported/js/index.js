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
var arrMovies = [{movie: 'Titanic', isFree: true}, {movie:'Xmen', isFree: false, price:20}, {movie:'Avatar', isFree: false, price:100}, {movie:'The Avengers', isFree: true}];
var Movie = prompt('Ingrese nombre de película');
for (let i=0; i<arrMovies.length; i++){
    if (arrMovies[i].movie==Movie){
        if (arrMovies[i].isFree) {
            alert('Puedes ver la película, es gratis.');
        } else {
            alert('Para ver esta película necesitas pagar por ella. El precio es $'+ arrMovies[i].price + '.');
        }
    }
}

var monthNumber = Number(prompt('Ingrese número del mes'));
switch (monthNumber) {
    case 1:
        console.log('Enero');
    break;
    case 2:
        console.log('Febrero');
    break;
    case 3:
        console.log('Marzo');
    break;
    case 4:
        console.log('Abril');
    break;
    case 5:
        console.log('Mayo');
    break;
    case 6:
        console.log('Junio');
    break;
    case 7:
        console.log('Julio');
    break;
    case 8:
        console.log('Agosto');
    break;
    case 9:
        console.log('Septiembre');
    break;
    case 10:
        console.log('Octubre');
    break;
    case 11:
        console.log('Noviembre');
    break;
    case 12:
        console.log('Diciembre');
    break;
    default:
        console.log('El mes ingresado no existe');
    break;
}