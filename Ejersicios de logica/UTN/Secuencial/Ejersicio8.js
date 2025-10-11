// Consigna:
/*
    8
Hacer un programa para ingresar por teclado el importe de una venta sin el descuento y el importe de esa misma venta con el descuento aplicado y luego informar por pantalla el porcentaje de descuento aplicada a la misma.
Ejemplo A. Si el importe de la venta sin descuento es $1500 y el importe de la venta con descuento es $1200 entonces el porcentaje de descuento aplicado fue el 20%.
Ejemplo B. Si el importe de la venta sin descuento es $500 y el importe de la venta con descuento es $500 entonces el porcentaje de descuento aplicado fue el 0%.
*/

// Simplificación del problema:
/*
   Tengo que crear un programa para calcular el porcentaje de descuento aplicado a una venta,
   conociendo el precio original (sin descuento) y el precio final (con descuento).
*/

// Análisis:
// Datos de entrada:
/**
    * precioSinDescuento
    * precioConDescuento
 */
// Datos de salida:
/**
    * porcentajeDescuento
 */

// Operaciones:
/**
    * Calcular la diferencia entre el precio original y el final.
    * Dividir esa diferencia por el precio original y multiplicar por 100.
 */

// Estrategia:
/**
    * Pregunto el precio original.
    * Pregunto el precio con descuento.
    * Calculo el porcentaje de descuento.
    * Muestro el resultado por pantalla.
 */

// Codificación:

const precioSinDescuento = Number(prompt('¿Cuál es el precio sin descuento?'));
const precioConDescuento = Number(prompt('¿Cuál es el precio con descuento aplicado?'));

const diferencia = precioSinDescuento - precioConDescuento;
const porcentajeDescuento = (precioSinDescuento !== 0) ? (diferencia / precioSinDescuento) * 100 : 0;

console.log(`El porcentaje de descuento aplicado fue: ${porcentajeDescuento.toFixed(2)}%`);
