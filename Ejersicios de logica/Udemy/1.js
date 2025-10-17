// Consigna:
/*
    Ejersicio 1:
    Crear una fincion que reciba dos parametros (a, b) y compare cual es el mayor de ambos.
*/
// Simplificacion del problema:
/*
    Tengo que desarrollar una funcion para determinar cual numero es mayor.
*/
// Analisis:
// Datos de entrada:
/**
    * resultado
 */
// Datos de salida:
/**
    * resultado
 */
// Operaciones:
/**
    * rebico dos parametros
    * comparo cual es mayor usando un if
 */
// Estrategia:
/**
    * Tomo ambos parametros
    * Los comparo mediante un if
    * Muestro el resultado
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

function cualEsMayor(a, b) {
    if (a > b) {
        return 'A es mayor que B'; // Podriamos haber usado un "return a;"
    } else {
        return 'B es mayor que A'; // Podriamos haber usado un "return b;"
    }
};

let resultado = cualEsMayor(5, 7);

console.log(resultado);

// Otra forma de resolverlo es:
/*
    function cualEsMayor(a, b) {
        return ( a > b ) ? a : b;
    };
*/