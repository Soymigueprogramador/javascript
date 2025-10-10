// Consigna:
/*
    4
Hacer un programa para ingresar por teclado la cantidad de asientos totales en un avión y la cantidad de pasajes ocupados y luego calcular e informar el porcentaje de ocupación y el porcentaje de no ocupación del mismo.
Ejemplo si el avión tiene 200 asientos totales y se vendieron 80 pasajes, el porcentaje de ocupación que se informará será de un 40% y el porcentaje de no ocupación será de un 60%.

*/
// Simplificacion del problema:
/*
    Tengo que crear un programa para calcular el porsentaje de asientos vendidos y no vendidos de un avion.
*/
// Analisis:
// Datos de entrada:
/**
    * cantidadAsientosAvion
    * CantidadPasajesVendidos
 */
// Datos de salida:
/**
    * cantidadAsientosTotales
    * porsentajeAsientosVendidos
 */
// Operaciones:
/**
    * Calculo el porsentaje de asientos vendidos
 */
// Estrategia:
/**
    * Pregunto la cantidad de asientos del avions
    * Pregunto cuantos asientos se vendieron
    * Muestro el porsentaje de ocupacion
    * Muestro el porsentaje de desocupacion
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const cantidadAsientosAvion = Number(prompt('¿Cuantos asientos tiene el avion?'));
const CantidadPasajesVendidos = Number(prompt('¿Cuantos asientos vendiste?'));

const porcentajeAientosVendidos = ( CantidadPasajesVendidos * 100 ) / cantidadAsientosAvion;
const porcentajeAientosNoVendidos = 100 - porcentajeAientosVendidos;

console.log(` La cantidad de asientos de tu avion es de: ${cantidadAsientosAvion} `);
console.log(` El porcentaje de ocupacion es del % ${porcentajeAientosVendidos} `);
console.log(` El porcentaje de desocupacion es del % ${porcentajeAientosNoVendidos} `);