// Consigna:
/*
    6
Hacer un programa para que un comercio ingrese por teclado la recaudación en pesos para cada una de las cuatro semanas del mes.
El programa debe listar la recaudación promedio por semana y el porcentaje de recaudación por semana.
Ejemplo. Si se ingresa $1600, $1200, $4800 y $400 se listará como recaudación promedio $2000 y como porcentajes por semana: 20%, 15%, 60% y 5%.
*/

// Simplificación del problema:
/*
    Tengo que desarrollar un programa para calcular la recaudación mensual, el promedio semanal
    y el porcentaje de recaudación de cada semana respecto al total.
*/

// Análisis:
// Datos de entrada:
/**
    * semana1
    * semana2
    * semana3
    * semana4
    * recaudacionTotal
    * promedioSemanal
    * porcentajeSemana1
    * porcentajeSemana2
    * porcentajeSemana3
    * porcentajeSemana4
 */
// Datos de salida:
/**
    * recaudacionTotal
    * promedioSemanal
    * porcentajeSemana1
    * porcentajeSemana2
    * porcentajeSemana3
    * porcentajeSemana4
 */

// Operaciones:
/**
    * Sumo lo recaudado durante las 4 semanas del mes.
    * Calculo el promedio semanal.
    * Calculo el porcentaje de cada semana sobre el total.
 */

// Codificación:

const semana1 = Number(prompt('¿Cuánto recaudaste en la semana 1?'));
const semana2 = Number(prompt('¿Cuánto recaudaste en la semana 2?'));
const semana3 = Number(prompt('¿Cuánto recaudaste en la semana 3?'));
const semana4 = Number(prompt('¿Cuánto recaudaste en la semana 4?'));

const recaudacionTotal = semana1 + semana2 + semana3 + semana4;
const promedioSemanal = recaudacionTotal / 4;

const porcentajeSemana1 = (recaudacionTotal !== 0) ? (semana1 / recaudacionTotal) * 100 : 0;
const porcentajeSemana2 = (recaudacionTotal !== 0) ? (semana2 / recaudacionTotal) * 100 : 0;
const porcentajeSemana3 = (recaudacionTotal !== 0) ? (semana3 / recaudacionTotal) * 100 : 0;
const porcentajeSemana4 = (recaudacionTotal !== 0) ? (semana4 / recaudacionTotal) * 100 : 0;

console.log(`La recaudación total del mes es: $${recaudacionTotal}`);
console.log(`La recaudación promedio por semana es: $${promedioSemanal.toFixed(2)}`);
console.log(`Porcentaje de recaudación Semana 1: % ${porcentajeSemana1.toFixed(2)}`);
console.log(`Porcentaje de recaudación Semana 2: % ${porcentajeSemana2.toFixed(2)}`);
console.log(`Porcentaje de recaudación Semana 3: % ${porcentajeSemana3.toFixed(2)}`);
console.log(`Porcentaje de recaudación Semana 4: % ${porcentajeSemana4.toFixed(2)}`);