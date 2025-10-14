// Consigna:
/*
    10
Hacer un programa para ingresar por teclado una cantidad de horas y mostrar por pantalla a cuantos días y horas equivalen.
Ejemplo A: si se ingresan 26 horas el programa mostrará por pantalla que equivalen a 1 día y 2 horas.
Ejemplo B: si se ingresan 72 horas el programa mostrará por pantalla que equivalen a 3 días y 0 horas.
Ejemplo C: si se ingresan 20 horas el programa mostrará por pantalla que equivalen a 0 días y 20 horas.

*/
// Simplificacion del problema:
/*
    Tengo que crear un programa para ingresar una cantidad de horas y me muestra a cuantos dias y horas equivalen.
*/
// Analisis:
// Datos de entrada:
/**
    * horas
    * horasIngresadas
    * dias
 */
// Datos de salida:
/**
    * dias
    * horas
 */
// Operaciones:
/**
    * Ingreso una cantidad de horas
    * DIVIDO LAS HORAS INGRESADAS POR 24
 */
// Estrategia:
/**
    * Pido la cantidad de horas
    * Divido esas horas por 24
    * Muestro el resultado por pantalla.
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const horasIngresadas = Number(prompt('Ingresa la cantidad de horas'))

const dias = Math.floor(horasIngresadas / 24);
const horas = horasIngresadas % 24;

console.log(`Equivale a ${dias} día(s) y ${horas} hora(s).`)