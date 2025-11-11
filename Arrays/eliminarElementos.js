// Eliminar elementos

let letras = [ 'a', 'b', 'c', 'd' ];

letras.pop(); // Nos permite eliminar el ultimo elemento del array
letras.shift(); // Nos permite eliminar el primer elemento del array
letras.splice(1, 1); // Nos permite eliminar los elementos determinados del array
/**
 * Para ello hacemos esto:
    * Usamos el metodo de splice nombreDelArray.splice(indice, elementos) y le pasamos 2 parametros
    * El indice desde donde empezamos a eliminar elementos
    * La cantidad de elementos que queremos eliminar
 */

console.log(letras)