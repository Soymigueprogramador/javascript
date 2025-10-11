// Consigna:
/*
    5
Un comercio vende tres marcas de alfajores distintas A, B y C. Hacer un programa para ingresar por teclado la cantidad de alfajores vendidos de cada una de las tres marcas y luego se informe el porcentaje de ventas para cada una de ellas.
Ejemplo. Si se ingresa 100, 25 y 75 como cantidades vendidas entonces el programa calculará e informará A: 50%, B: 12,50% y C: 37,50%.

*/
// Simplificacion del problema:
/*
    Tengo que crear un programa para calcular cuantos alfajores se vendienon segun su marca
*/
// Analisis:
// Datos de entrada:
/**
    * cantidadVentasTotales
    * alfajorMarcaA
    * alfajorMarcaB
    * alfajorMarcaC
    * porcentajeMarcaA
    * porcentajeMarcaB
    * porcentajeMarcaC
 */
// Datos de salida:
/**
    * cantidadVentasTotales
    * porcentajeMarcaA
    * porcentajeMarcaB
    * porcentajeMarcaC
 */
// Operaciones:
/**
    * Calculo la cantidad total de alfajores vendidos
    * Calculo la cantidad total de alfajores vendidos segun la marca
    * Muestro el resultado
 */
// Estrategia:
/**
    * Pregunto cuantos alfajores se vendieron en total
    * Pregunto cuantos alfajores se vendieron segun su marca
    * calculo el porcentajes de ventas totales y el porcentaje de ventas segun la marca
    * Muestro los resultados por pantalla.
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const alfajorMarcaA = Number(prompt('¿Cuantos alfajores de la marca A vendiste?'));
const alfajorMarcaB = Number(prompt('¿Cuantos alfajores de la marca B vendiste?'));
const alfajorMarcaC = Number(prompt('¿Cuantos alfajores de la marca C vendiste?'));

const cantidadVentasTotales = alfajorMarcaA + alfajorMarcaB + alfajorMarcaC;

const porcentajeMarcaA = (cantidadVentasTotales != 0) ? (alfajorMarcaA / cantidadVentasTotales) * 100 : 0;
const porcentajeMarcaB = (cantidadVentasTotales != 0) ? (alfajorMarcaB / cantidadVentasTotales) * 100 : 0;
const porcentajeMarcaC = (cantidadVentasTotales != 0) ? (alfajorMarcaC / cantidadVentasTotales) * 100 : 0;

console.log(` La cantidad total de alfajores vendidos es: ${cantidadVentasTotales} `);
console.log(` El porcentaje de alfajores de la marca A que fueron vendidos es: % ${porcentajeMarcaA.toFixed(2)} `);
console.log(` El porcentaje de alfajores de la marca B que fueron vendidos es: % ${porcentajeMarcaB.toFixed(2)} `);
console.log(` El porcentaje de alfajores de la marca C que fueron vendidos es: % ${porcentajeMarcaC.toFixed(2)} `);

// .toFixed(2)
/*
    El metodo .toFixed() permite acortar los numeros decimeles.
    Su sintaxys es:
    1- nombreVariable.toFixed()
    2- nombreVariable.toFixed(cantidadDeDecimalesAMostrar)
*/