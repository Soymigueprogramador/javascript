// Consigna:
/*
    12
Una granja vende la caja de 12 unidades a $1000 y cada huevo suelto a $120.
Hacer un programa para ingresar la cantidad de huevos que compra un cliente y mostrar por pantalla el importe total a pagar.
Recordatorio. Por cada 12 huevos se debe calcular una caja y el excedente se calcula como suelto.
Ejemplo A. Si la cantidad ingresada son 15 huevos, el programa calculará 1 caja y 3 sueltos, es decir $1000 + $120 x 3 = $1360.
Ejemplo B. Si la cantidad ingresada son 28 huevos el programa calculará 2 cajas y 4 sueltos, es decir $1000 x 2 + $120 x 4 = $2480.
Ejemplo C. Si la cantidad ingresada son 8 huevos, el programa calculará: 0 cajas y 8 sueltos, es decir $120 x 8 = $960.
Ejemplo D. Si la cantidad ingresada son 200 huevos, el programa calculará: 16 cajas y 8 sueltos, es decir $1000 x 16 + $120 x 8 = $16960.

*/
// Simplificacion del problema:
/*
    Tengo que desarrollar un programa para calcular el costo de cuantos huevos compro sueltos y en caja
*/
// Analisis:
// Datos de entrada:
/**
    * cantidadHuevos
    * precioSueltos
    * precioCaja
    * cantidadCajas
    * huevosSueltos
    * total
 */
// Datos de salida:
/**
    * precioSueltos
    * precioCaja
    * cantidadCajas
    * huevosSueltos
    * total
 */
// Operaciones:
/**
    * calcula la cantidad de huevos comprados en caja y la cantidad de huevos comprados sueltos
 */
// Estrategia:
/**
    * Pido la cantidad de huevos
    * Calculo la cantidad que trae la caja
    * Calculo la cantidad de huegos sueltos
    * Sumo el precio de ambos
    * Muestro el resultado por pantalla
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const cantidadHuevos = Number(prompt('Ingrese la cantidad de huevos que va a llevar'));

const precioCaja = 1000;
const precioSueltos = 120;

const huevosSueltos = cantidadHuevos % 12;

const cantidadCajas = Math.floor( cantidadHuevos / 12 );

const total = ( cantidadCajas * precioCaja ) + ( huevosSueltos * precioSueltos );

console.log(` La caja de huevos cuesta $ ${precioCaja} y los huevos sueltos cuestan $ ${precioSueltos}`)
console.log(` Compraste ${cantidadCajas} cajas de huevos y compraste ${huevosSueltos} huevos sueltos `)