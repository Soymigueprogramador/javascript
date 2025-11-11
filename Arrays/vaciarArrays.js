// Vaciar arrays
/*
    Tenemos 4 formas de vaciar un array, estas son:

    1- Podemos asignar el array original a un nuevo array vacío.
       El problema con esto es que el array original sigue existiendo en memoria.

    2- Podemos manipular la longitud del array.

    3- Podemos usar el método splice(0, arr.length) para vaciar un array.

    4- Podemos usar un while que evalúe si la longitud es > 0 y, en caso de serlo,
       eliminar los elementos con .pop() (no recomendado).
*/

// Ejemplo en código (Dejo activa la forma correcta de vaciar un array)

// Forma 1 (Es una forma simple de vaciar el array)
/*
    let arr = [1, 2, 3, 4, 5];
    let arr2 = arr;
    arr = [];

    console.log(arr2, arr);
*/

// Forma 2 (Es una forma directa y eficiente de vaciar el array)
/*
    let arr = [1, 2, 3, 4, 5];
    arr.length = 0;
    console.log(arr);
*/

// Forma 3 (No es la más visual, pero sí la más explícita en cuanto a lo que se hace)
/*
    let arr = [1, 2, 3, 4, 5];
    arr.splice(0, arr.length);
    console.log(arr);
*/

// Forma 4 (Es más lenta y consume más recursos del sistema, no recomendada)
/*
    let arr = [1, 2, 3, 4, 5];
    while (arr.length > 0) {
        arr.pop();
    }
    console.log(arr);
*/

// Ninguna de estas es "la mejor" en todos los casos,
// pero la más utilizada por su simplicidad y rendimiento es: arr.length = 0;