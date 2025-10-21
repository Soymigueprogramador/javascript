// Consigna:
/*
    Ejercicio 4:
    Crear un programa que muestre por pantalla los números impares del 1 al 10.
*/

// Simplificación del problema:
/*
    Necesito desarrollar un programa que genere y muestre una lista de números impares del 1 al 10.
*/

// Análisis:
// Datos de entrada:
/**
 * No hay datos de entrada (los números están definidos en el rango 1–10).
 */

// Datos de salida:
/**
 * Números impares del 1 al 10 mostrados por consola.
 */

// Operaciones:
/**
 * - Crear un ciclo for que recorra del 1 al 10.
 * - En cada vuelta, usar un condicional para verificar si el número es impar.
 * - Si lo es, mostrarlo por pantalla.
 */

// Estrategia:
/**
 * - Escribir un ciclo for del 1 al 10.
 * - Usar un if con el operador módulo (%) para determinar si es impar.
 * - Mostrar el número impar por consola.
 */

// Diagrama del código:
/**
 * El diagrama estará en la carpeta de diagramas.
 */

// Codificación:

// Ejemplo con el ciclo for
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(`Número impar: ${i}`);
    }
}

// Ejemplo con el ciclo while
let i = 0;

while( i <= 10 ) {
    if( i % 2 !== 0 ) {
        console.log(` Impar ${i} `)
    }
    i++;
};