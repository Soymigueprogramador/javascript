// ¿Que son los arrays?
/*
    Un arrays es un conjunto de elementos.
*/

// Ejemplo en codigo.
let numeros = []; // Esto es un array literal.

let nombres = [
    'Miguel',
    'Celeste'
];
// Respeta el orden de como le pasamos los elementos.

// Accediendo a los indices de un array.
console.log(nombres[1]); // Muestre el elemento que este en ese indice.

// Agregando elementos al array.
nombres[2] = 'Araceli'; // Agrega un nuevo indice con un valor.
nombres[3] = 'Yazmin';
nombres[4] = 'Luciana';

// Como los arrays en js son objetos vamos a poder acceder a sus propiedades (Se les llama metodos de array).
console.log(nombres.length); // Esto es un metodo de arrays, muestra la cantidad de elementos del array.

// Mostrando los arrays.
console.log(numeros);
console.log(nombres);
console.log(typeof nombres);