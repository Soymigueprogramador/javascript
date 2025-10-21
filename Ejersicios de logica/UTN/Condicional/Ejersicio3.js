// Consigna:
/*
    3
Hacer un programa para ingresar por teclado un número y luego informar por pantalla con un cartel aclaratorio si el mismo es par o impar.

*/
// Simplificacion del problema:
/*
    Tengo que desarrollar un programa para indicar si el numero es par o inpar
*/
// Analisis:
// Datos de entrada:
/**
    * numero
 */
// Datos de salida:
/**
    * 
 */
// Operaciones:
/**
    * con un if comparo si el numero es par o inpar
 */
// Estrategia:
/**
    * Pido un numero
    * Comparo si el numero es par o inpar
    * Muestro el resultado por pantalla
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const numero = Number(prompt('Ingresa un numero'));

if( numero % 2 === 0 ) {
    console.log(`El numero ${numero} es par`);
} else {
    console.log(`El numero ${numero} es inpar`);
}