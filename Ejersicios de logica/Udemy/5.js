// Consigna:
/*
    Ejercicio 5:
    Crear un algoritmo que devuelva el número mayor y el número menor de un array.
*/

// Simplificación del problema:
/*
    Necesito recorrer un array y encontrar sus valores mínimo y máximo.
*/

// Análisis:
// Datos de entrada:
/**
 * - arr: array de números.
 */

// Datos de salida:
/**
 * - Un array o estructura con el número menor y el número mayor.
 */

// Operaciones:
/**
 * - Tomo el array.
 * - Recorro cada número con un bucle.
 * - Comparo para actualizar el menor y el mayor.
 */

// Estrategia:
/**
 * - Paso el array a una función.
 * - Inicializo menor y mayor con el primer elemento.
 * - Recorro el array comparando cada valor.
 * - Devuelvo los valores encontrados.
 */

// Diagrama del código:
/**
 * El diagrama estará en la carpeta de diagramas.
 */

// Codificación:

let arr = [2, 5, 7, 15, -5, -100, 56];

function getMinMax(arr) {
    let nMenor = arr[0];
    let nMayor = arr[0];

    for (const numero of arr) {
        nMenor = numero < nMenor ? numero : nMenor;
        nMayor = numero > nMayor ? numero : nMayor;
    }

    return [nMenor, nMayor];
}

let resultado = getMinMax(arr);

console.log(`Número menor: ${resultado[0]}`);
console.log(`Número mayor: ${resultado[1]}`);

// Esto suele ser un ejersicio de entrevista tecnica.