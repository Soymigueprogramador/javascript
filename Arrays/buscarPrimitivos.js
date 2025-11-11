// Buscar primitivos
/*
    Cuando buscamos elementos dentro de un array los podemos buscar de dos formas
    1- Por valores primitivos
    2- Por valores de referencia
*/

// Ejemplo en codigo
let letras = [ 'a', 'b', 'c', 'd' ];

// Nos devuelve el indice del array siempre y cuando el elemento este dentro del mismo.
// Si el elemento esta repetido va a devolver el indice del primer elemento que encontro
console.log(letras.indexOf('c'));
// Nos permite obtener el idice del array pero empezando la busqyeda desde el final del mismo.
console.log(letras.lastIndexOf('a'));
// Nos devuelve un true si el elemento esta en el array o false si no esta en el array
console.log(letras.includes('h'));
// Al indexOf le podemos indicar desde qué índice debe buscar con un segundo argumento
console.log(letras.indexOf('a', 2));

console.log(letras);