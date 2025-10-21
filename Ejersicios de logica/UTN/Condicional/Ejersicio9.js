/*
    9
Hacer un programa para ingresar tres números y listar el máximo de ellos.
*/

const n1 = Number(prompt('Ingrese el primer número:'));
const n2 = Number(prompt('Ingrese el segundo número:'));
const n3 = Number(prompt('Ingrese el tercer número:'));

let maximo;

if (n1 >= n2 && n1 >= n3) {
    maximo = n1;
} else if (n2 >= n1 && n2 >= n3) {
    maximo = n2;
} else {
    maximo = n3;
}

console.log(`El número mayor es: ${maximo}`);
