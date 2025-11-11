// Spread operator
/*
    Con el spread operator podemos combinar arrays de una formas mas flexible
    y visualmente mas limpio
*/

let arr1 = [1, 2];
let arr2 = [5, 6];

// Toma los elementos del arr1 y se los agrega al nuevo arrayDE ARR1
let arr3 = [...arr1, 3, 4, ...arr2]; // Asi le podemos agregar mas elementos al arra

// Usando el spread operator para generar una copia del array
let arr4 = [...arr3]; 
arr3.pop(); // Elimino el ultimo elemento del array.

console.log(arr3);
console.log(arr4);