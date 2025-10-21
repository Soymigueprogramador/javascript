/*
    8
Basado en los 2 ejercicios anteriores, hacer un programa para ingresar por teclado la longitud
de los tres lados de un triángulo y luego listar qué tipo de triángulo es:
- Equilátero: si los tres lados son iguales.
- Isósceles: si dos de los tres lados son iguales.
- Escaleno: si los tres lados son distintos entre sí.
*/

let lado1 = Number(prompt('Ingresa el primer lado del triangulo'));
let lado2 = Number(prompt('Ingresa el primer lado del triangulo'));
let lado3 = Number(prompt('Ingresa el primer lado del triangulo'));

let tipo;

if( lado1 === lado2 && lado2 === lado3 ) {
    tipo = 'Equilatero';
} else if( lado1 === lado2 || lado1 === lado3 || lado2 === lado3 ) {
    tipo = "Isósceles";
} else {
    tipo = 'Escaleno';
}

console.log(`El triángulo es ${tipo}.`);