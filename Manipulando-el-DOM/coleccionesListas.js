// Colecciones vs listas
/*
    Colecciones:
    En HTML las colecciones no tienen métodos que podamos iterar al menos dentro de los prototype, pero
    existen 2 formas en las que sí podemos iterar las colecciones.

    Listas:
*/

// Ejemplo del código
const colecciones = document.getElementsByTagName('p');
const listas = document.querySelectorAll('p');

// Métodos de las colecciones
/**
    * Creamos una variable
    * Se lo asignamos a collection.
    * Le indicamos el método
    * Le pasamos el nombre del elemento
    * EJEMPLO: let item1 = colecciones.namedItem('nombreElemento');
*/
let item1 = colecciones.namedItem('texto');

// Funciona igual solo que le tenemos que pasar el índice del elemento.
let item2 = colecciones.item(1);

// Otra forma de hacer lo mismo.
let item3 = colecciones[2]; // Es un objeto parecido pero no es un array.

// Iterando los elementos de las colecciones.
// Forma 1 con un ciclo for...of
for (let el of colecciones) { // Solo imprime los elementos con número
    console.log(el);
}

console.log('0000000000000000000000000000000000000000000000000000000000000000000');

// Forma 2 transformando una colección en un array para después iterarlo como tal
/**
 * Transformando la colección en un array:
 * Usamos el método de array estático = Array.from()
 * Le pasamos el nombre de la colección = Array.from(nombreCollection)
 */
// Iterando el nuevo array con un foreach
Array.from(colecciones).forEach(x => console.log(x)); // Muestra el objeto

// Otra forma de hacer lo mismo
[...colecciones].forEach(x => console.log(x)); // Muestra el elemento mismo

console.log('0000000000000000000000000000000000000000000000000000000000000000000');

// Elementos de las NodeList
/**
    * Creamos una variable
    * Se lo asignamos a una list.
    * Le pasamos los índices
*/
let iteracion1 = listas.item(3);
let iteracion2 = listas[2];

// Métodos de NodeList
listas.forEach(x => console.log(x)); // Muestra los elementos

// Método entries
let entries = listas.entries(); // Devuelve un iterador

// Método keys
let keys = listas.keys(); // Devuelve las llaves del elemento

// Método values
let values = listas.values(); // Devuelve un iterador con los valores de la NodeList

console.log(
    colecciones,
    listas
);