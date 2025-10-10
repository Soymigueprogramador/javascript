// Consigna:
/*
    2
Hacer un programa que solicite por teclado que se ingresen dos números y luego guardarlos en dos variables distintas. A continuación se deben intercambiar mutuamente los valores en ambas variables y mostrarlos por pantalla.
Ejemplo: Suponiendo que se ingresan 3 y 8 como valores y que la variables usadas son A y B, entonces A=3 y B=8, pero luego debe quedar A=8 y B=3.
*/
// Simplificacion del problema:
/*
    Tengo que crear un programa para cambiarle los valores de las variables.
*/
// Analisis:
// Datos de entrada:
/**
    * n1
    * n2
    * cambio
 */
// Datos de salida:
/**
    * n1
    * n2
 */
// Operaciones:
/**
    * Cambiamos el valor de las variables.
 */
// Estrategia:
/**
    * Pedimos un numero
    * Pedimos otro numero
    * Cambiamos el valor de las variables
    * Mostramos el resultado por pantalla.
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

let n1 = Number(prompt('Ingresa un numero para N1'));
let n2 = Number(prompt('Ingresa otro numero para N2'));

let cambio = n1;
n1 = n2;
n2 = cambio;

console.log(`El numero que esta en la variable N1 es: ${n1}`);
console.log(`El numero que esta en la variable N2 es: ${n2}`);