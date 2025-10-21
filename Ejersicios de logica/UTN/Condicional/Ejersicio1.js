// Consigna:
/*
    1
Hacer un programa para ingresar por teclado un número y luego emitir por pantalla un cartel aclaratorio indicando si el mismo es positivo, negativo o cero.
Importante: Verifique que el programa emita UN SOLO CARTEL.

*/
// Simplificacion del problema:
/*
    Tengo que crear un programa para mostrar un mensaje indicando si un numero es positivo, negativo o 0
*/
// Analisis:
// Datos de entrada:
/**
    * numero
 */
// Datos de salida:
/**
    * resultado
 */
// Operaciones:
/**
    * Creo un condicional para comparar los numeros
 */
// Estrategia:
/**
    * Creo una variable con un numero
    * Comparo si es positivo, negativo o cero
    * Muestro el dato por pantalla
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

let numero = 0;

if( numero > 0 ) {
    console.log(`El numero ${numero} es positivo`);
} else if( numero < 0 ) {
    console.log(`El numero ${numero} es negativo`);
} else {
    console.log(`El numero ${numero} es cero`);
}