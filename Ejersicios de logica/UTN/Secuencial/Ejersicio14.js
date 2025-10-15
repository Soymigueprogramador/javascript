// Consigna:
/*
    14
Hacer un programa para ingresar el importe de una compra y el descuento a aplicar. Listar por pantalla, el importe sin descuento, el descuento aplicado y el importe total a cobrar.
Ejemplo: se ingresa importe 4500, descuento 40; se deberá mostrar
Importe: 4500, Descuento: 1800, total: 2700.

*/
// Simplificacion del problema:
/*
    Tengo que desarrollar un programa al cual le ingreso el monto de una compra, y el descuento
*/
// Analisis:
// Datos de entrada:
/**
    * precio
    * descuento
    * montoDescuento
    * precioFinal
 */
// Datos de salida:
/**
    * precio
    * descuento
    * precioFinal
 */
// Operaciones:
/**
    * Ingreso el monto de la compra
    * Le aplico el descuento
 */
// Estrategia:
/**
    * Pregunto el monto total de la compra
    * Pregunto el monto del descuento
    * Muestro por pantalla el monto de la compre sin descuento, con descuento y el precio final
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const precio    = Number(prompt('¿Cuál es el precio de la compra?'));
const descuento = Number(prompt('¿Cuál es el porcentaje de descuento?'));

const montoDescuento = precio * descuento / 100;
const precioFinal = precio - montoDescuento;

console.log(`Importe sin descuento: $ ${precio}`);
console.log(`Descuento ${montoDescuento}`);
console.log(`Precio final ${precioFinal}`);

// No me gusta como quedo