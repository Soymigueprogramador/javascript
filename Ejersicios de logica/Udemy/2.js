// Consigna:
/*
    Ejersicio 2:
    Crear una funcion que reciba dos parametros (hancho, alto) y devuelva el nombre de la resolucion.
*/
// Simplificacion del problema:
/*
    Tengo que desarrollar una funcion que recibe dos parametros y me devuelve el nombre de la resolucion.
*/
// Analisis:
// Datos de entrada:
/**
    * nombre
 */
// Datos de salida:
/**
    * nombre
 */
// Operaciones:
/**
    * Comparo las resolucion
 */
// Estrategia:
/**
    * Tomo la resolucion
    * La comparo con los datos
    * Muestro el nombre de la resolucion por pantalla.
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

// Nombre resolucion:
/**
    * 8K 7680 × 4320
    * 4K 3840 × 2160
    * WQHD 2560 × 1440
    * FHD 1920 × 1080
    * HD 1280 × 720
 */



function nombreResolucion(hancho, alto) {
    if( hancho > 7680 && alto > 4320 ) {
        return 'La resolucion es 8K'
    } else if( hancho > 3840 && alto > 2160 ) {
        return 'La resolucion es 4K'
    } else if( hancho > 2560 && alto > 1440 ) {
        return 'La resolucion es WQHD'
    } else if( hancho > 1920 && alto > 1080 ) {
        return 'La resolucion es FHD'
    } else {
        return 'La resolucion es HD'
    }
};

let nombre = nombreResolucion(1920, 1080);

console.log(nombre);