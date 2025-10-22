/*
    10
Hacer un programa para ingresar cinco números y listar el máximo y el mínimo de ellos.
*/

let n1 = Number(prompt('Ingrsa el primer numero'));
let n2 = Number(prompt('Ingrsa el segundo numero'));
let n3 = Number(prompt('Ingrsa el tercer numero'));
let n4 = Number(prompt('Ingrsa el cuarto numero'));
let n5 = Number(prompt('Ingrsa el quinto numero'));

let numeroMaximo = Math.max(n1, n2, n3, n4, n5);
let numeroMinimo = Math.min(n1, n2, n3, n4, n5);

console.log(`El numero maximo es: ${numeroMaximo}`);
console.log(`El numero minimo es: ${numeroMinimo}`);

