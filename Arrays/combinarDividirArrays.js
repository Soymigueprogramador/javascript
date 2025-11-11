// Combinar y dividir un array

const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Combinar arrays
/**
 * Para ello hacemos esto:
    * Llamamos a uno de los arrays = nombrePrimerArray
    * Luego llamamos al metodo concat = concat()
    * Dentro le indicamos el nombre del otro arra = concat(nombreSiguienteArray)
    * Definimos una nueva variable y le asignamos array1.concat(array2);
 */

let nuevoArray1 = array1.concat(array2);

// Dividir arrays
/**
 * Para ellos hacemos esto:
    * Creamos una nueva variable
    * Llamamos al nombre del array que vamos a dividir = nombreArray
    * Llamamos al metodo slice = nombreArray.slice()
    * Le indicamos desde que indice tiene que empezar a dividir = nombreArray.slice(1)
    * Le indicamos hasta donde queremos que llegue la divicion = nombreArray.slice(1, 6)
 */

let nuevoArrayDividido = nuevoArray1.slice(1, 6);

// Otra forma de dividir un array
/**
 * Para ello hacemos esto:
    * Creamos una nueva variable
    * Hacemos lo mismo que antes solo que no le asignamos el segundo parametro
 */

let nuevoArrayDividido2 = nuevoArray1.slice(9);

// Genera una copia del array
/**
 * Para ello hacemos esto:
    * Creamos una nueva variable
    * Hacemos lo mismo que antes solo que no le ningun parametro
 */
let nuevoArray1Copiado = nuevoArray1.slice();

console.log(array1);
console.log(array2);
console.log(nuevoArray1);
console.log(nuevoArrayDividido);
console.log(nuevoArrayDividido2);
console.log(nuevoArray1Copiado);