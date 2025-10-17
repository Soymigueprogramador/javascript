// Consigna:
/*
    Ejersicio 3:
    Crear una funcion la cual recibe dos parametros (arr, idx) y compruebe que:
    - El indice no sea menor a 0
    -Que el elemento exista dentro de arra
*/
// Simplificacion del problema:
/*
    Tengo que crear una funcion la cual recibe dos parametros y comprabar que el indice no sea menos a 0 y que el mismo exista dentro del array.
*/
// Analisis:
// Datos de entrada:
/**
    * arr
    * resultado
 */
// Datos de salida:
/**
    * resultado
 */
// Operaciones:
/**
    * Valudo que no sea menor a 0
    * Valido que el indice exista dentro del array
 */
// Estrategia:
/**
    * Le paso los dos parametros
    * Pregunto si el indice es menor a 0
    * Pregunto si el lemento existe dentro del array
    * Muestro el resultado por pantalla.
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

let arr = [ 1, 2, 3, 4, 5 ];

function getByIdx(arr, idx) {
    if( idx < 0 || arr.length <= idx ) {
        return ` El indice no existe `;
    }
    return arr[idx];
};

let resultado = getByIdx([1, 2], 0);

console.log(resultado);