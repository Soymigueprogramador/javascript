// for of (Propio de JavaScript)
/*
    Es un tipo de loop que podemos usar para iterar cosas como un array.
*/

// Sintaxys del for of
/**
    * Usamos la palafra reservada for
    * Le indicamos como se llamara la variable en la que guardamos los elementos
    * Le indicamos el nombre del array a iterar
 */


// Ejemplo en codigo
let numero = [ 1, 2, 3, 4, 5 ];

for ( let numeros of numero ) {
    console.log(numero);
    if ( numeros % 2 == 0 ) {
        console.log('Este numero es un numero par', numeros)
    }
};