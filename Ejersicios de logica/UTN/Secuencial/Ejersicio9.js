// Consigna:
/*
    9
Hacer un programa para ingresar por teclado una cantidad de minutos y mostrar por pantalla a cuantas horas y minutos equivalen.
Ejemplo A: si se ingresan 380 minutos el programa mostrará por pantalla que equivalen a 6 horas y 20 minutos.
Ejemplo B: si se ingresan 720 minutos el programa mostrará por pantalla que equivalen a 12 horas y 0 minutos.
Ejemplo C: si se ingresan 50 minutos el programa mostrará por pantalla que equivalen a 0 horas y 50 minutos

*/
// Simplificacion del problema:
/*
    Tengo que crear un programa al cual le ingreso una cantidad de minutos y me dice cuantas horas pasaron.
*/
// Analisis:
// Datos de entrada:
/**
    * minutos
    * horas
 */
// Datos de salida:
/**
    * minutosRestantes
 */
// Operaciones:
/**
    * Le paso una cantidad de minutos
    * divido por 60
 */
// Estrategia:
/**
    * Pedimos ingresar una cantidad de minutos
    * Esa cantidad ingresada la dividimos por 60
    * Mostramos la cantidad de horas pasadas.
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const minutos = Number(prompt('Ingresa una cantidad de minutos'));

const horas = Math.floor(minutos / 60);

const minutosRestantes = minutos % 60;

console.log(`Equivalen a ${horas} horas y ${minutosRestantes} minutos`);