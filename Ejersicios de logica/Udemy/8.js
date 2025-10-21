// Consigna:
/*
    Ejersicio 8:
    Crear un algoritmo que tome un array de objetos y devuelva un array de pares.
*/
// Simplificacion del problema:
/*
    Tengo que crear un programa que tome un array de objetos y devuelva un array de pares
*/
// Analisis:
// Datos de entrada:
/**
    * arrayObjeto
 */
// Datos de salida:
/**
    * mostrarNuevoArrayPares
 */
// Operaciones:
/**
    * Tengo que iterar el arrayObjetos con un ciclo for y crear un nuevo array de pares
 */
// Estrategia:
/**
    * Creo un array de objeto
    * Creo una funcion para iterar y crear un nuevo array de pares
    * Muestro el resultado por pantalla
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

let array = [{
    id: 1,
    name: 'Miguel'
}, {
    id: 2,
    name: 'Celeste'
}, {
    id: 3,
    name: 'Araceli'
}];

function toPairs(array) {
    let pares = [];

    for( idx in array ) {
        let elementos = array[idx];
        pares[idx] = [elementos.id, elementos];
    };
    return pares;
};

let mostrarNuevoArrayPares = toPairs(array);

console.log(mostrarNuevoArrayPares);