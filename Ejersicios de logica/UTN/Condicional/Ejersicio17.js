// Ejersicio 17
/*
    17
Hacer un programa para ingresar por teclado cuatro números.
Si los valores que se ingresaran están ordenados en forma creciente, emitir el mensaje
“Conjunto Ordenado”, caso contrario emitir el mensaje: “Conjunto Desordenado”.
Ejemplo A: si los números que se ingresan son 8, 10, 12 y 14, entonces están ordenados.
Ejemplo B: si los números que se ingresan son 8, 12, 12 y 14, entonces están ordenados.
Ejemplo C: si los números que se ingresan son 10, 8, 12 y 14, entonces están desordenados.
*/

let n1 = Number(prompt('Ingresa un numero'));
let n2 = Number(prompt('Ingresa otro numero'));
let n3 = Number(prompt('Ingresa otro numero'));
let n4 = Number(prompt('Ingresa otro numero'));

if( n1 <= n2 && n2 <= n3 && n3 <= n4 ) {
    console.log('Conjunto ordenado');
} else {
    console.log('Conjunto no ordenado');
}