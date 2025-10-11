// Consigna:
/*
    7
Hacer un programa para ingresar por teclado el importe de una venta y el porcentaje de descuento aplicado a la misma y luego informar por pantalla el importe a pagar.
Ejemplo A. Si el importe de la venta es $1200 y el descuento es el 15% entonces el total a pagar será de $1020.
Ejemplo B. Si el importe de la venta es $800 y el descuento es el 0% entonces el total a pagar será de $800.
*/

// Simplificación del problema:
/*
    Tengo que desarrollar un programa para calcular el descuento de una compra.
*/

// Análisis:
// Datos de entrada:
/**
    * precio
    * descuento
    * precioDescuento
 */
// Datos de salida:
/**
    * precioDescuento
 */

// Operaciones:
/**
    * Tomo el precio.
    * Le aplico el descuento.
 */

// Estrategia:
/**
    * Pido el monto de la compra.
    * Pido el porcentaje de descuento.
    * Calculo el precio final.
    * Muestro el precio con descuento.
 */

// Codificación:

const precio = Number(prompt('¿Cuál es el precio de la venta?'));
const descuento = Number(prompt('¿Cuánto es el porcentaje de descuento?'));

const precioDescuento = precio - (precio * descuento) / 100;

console.log(`El precio total con descuento es: $${precioDescuento.toFixed(2)}`);
