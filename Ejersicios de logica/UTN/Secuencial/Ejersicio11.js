// Consigna:
/*
    11
Hacer un programa para ingresar por teclado una cantidad de minutos y mostrar por pantalla a cuántos días, horas y minutos equivalen.
Ejemplo A: si se ingresan 1520 minutos el programa mostrará por pantalla que equivalen a 1 día, 1 hora y 20 minutos.
Ejemplo B: si se ingresan 480 minutos el programa mostrará por pantalla que equivalen a 0 día, 8 horas y 0 minutos.

*/
// Simplificacion del problema:
/*
    Tengo que desarrollar un programa al cua le ingreso una cantidad de horas y este calcula cuantos dias, horas y minutos pasaron.
*/
// Analisis:
// Datos de entrada:
/**
    * minutosIngresados
    * dias
    * horas
    * minutos
 */
// Datos de salida:
/**
    * dias
    * horas
    * minutos
 */
// Operaciones:
/**
    * Ingreso una cantidad de minutos
    * los divido por 24
    * El resto lo divido por 60
 */
// Estrategia:
/**
    * Pido que se ingrese una cantidad de horas
    * Calculo esa cantidad de horas
    * calculo la cantidad de minutos
    * Muestro el resultado por pantalla
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const minutosIngresados = Number(prompt('Ingresa una cantidad de minutos'))

const dias    = Math.floor( minutosIngresados / 1440 )
const horas   = Math.floor(( minutosIngresados % 1440 ) / 60 )
const minutos = minutosIngresados % 60

console.log(` Equivale a ${dias} dias, ${horas} horas y ${minutos} minutos `)