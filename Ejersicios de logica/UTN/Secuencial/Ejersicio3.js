// Consigna:
/*
    3
    Una concesionaria de autos paga a los vendedores un sueldo fijo de $5000
    más $700 de premio por cada auto vendido.
    Hacer un programa que permita ingresar por teclado la cantidad de autos vendidos
    por un vendedor y luego informar por pantalla el sueldo total a pagar.
    Ejemplo: Si la cantidad de autos vendidos fuera 4, entonces el sueldo total a pagar es de $7800.
*/

// Simplificación del problema:
/*
    Tengo que crear un programa para calcular el sueldo total de un vendedor
    en base a un sueldo fijo y una comisión por autos vendidos.
*/

// Análisis:
// Datos de entrada:
// - cantidadAutosVendidos
// Datos de salida:
// - sueldoTotal
// Operaciones:
// - sueldoTotal = sueldoFijo + (comisionPorAuto * cantidadAutosVendidos)

// Estrategia:
// 1. Preguntar cuántos autos vendió el vendedor.
// 2. Calcular el total de comisiones.
// 3. Sumar el sueldo fijo y las comisiones.
// 4. Mostrar el resultado.

// Codificación:

const cantidadAutosVendidos = Number(prompt('¿Cuántos autos vendiste?'));

const sueldoFijo      = 5000;
const comisionPorAuto = 700;

const sueldoTotal = sueldoFijo + (comisionPorAuto * cantidadAutosVendidos);

console.log(`Vendiste: ${cantidadAutosVendidos} autos.`);
console.log(`Tu comisión total es de: $${comisionPorAuto * cantidadAutosVendidos}.`);
console.log(`Tu sueldo fijo es de: $${sueldoFijo}.`);
console.log(`Tu sueldo total a pagar es de: $${sueldoTotal}.`);
