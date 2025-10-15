// Consigna:
/*
    16
El Laboratorio V&V hace frascos de píldoras para aprender a programar. Cada frasco contiene 75 píldoras y cada píldora contiene 45 mg de Betamol, 2 grs de Micilina y 7 mg de Ácido Sinítico.
Nos solicitan un programa donde se ingrese la cantidad de frascos de un pedido y muestre la cantidad de miligramos de Betamol, Micilina y de Ácido Sinítico que son necesarios para elaborarlos.
*/
// Simplificacion del problema:
/*
    Tengo que desarrollar un programa para calcular cuantas pantillas de ciertas drogas entran en un frasco.
*/
// Analisis:
// Datos de entrada:
/**
    * frascos
    * acidoSinitrico
    * betamol
    * micilina
 */
// Datos de salida:
/**
    * frascos
    * acidoSinitrico
    * betamol
    * micilina
 */
// Operaciones:
/**
    * multiplico la cantidad de frascos por la cantidad de pastillas.
 */
// Estrategia:
/**
    * Pregunto por la cantidad de frascos
    * Muestro por pantalla la cantidad de pastillas y la cantidad de frascos
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const frascos = Number(prompt('¿Cuantos frascos vas a llevar?'));

const acidoSinitrico = frascos * 75 * 45;
const betamol = frascos * 75 * 2 * 1000;
const micilina = frascos * 75 * 7;

console.log(`Te llevas ${frascos} frascos`);
console.log(`Cada frasco tiene ${acidoSinitrico} mg de acido sinitrico`);
console.log(`Cada frasco tiene ${betamol} mg de betamol`);
console.log(`Cada frasco tiene ${micilina} mg de micilina`);