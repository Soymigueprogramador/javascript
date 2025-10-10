// Consigna:
/*
    1
    Hacer un programa para ingresar por teclado la cantidad de horas trabajadas por un operario y el valor que se le paga por hora       trabajada y listar por pantalla el sueldo que le corresponda.

*/
// Simplificacion del problema:
/*
    Tengo que crear un programa para calcular la cantidad de horas trabajas, cuanto se le paga por hora
    y cuanto es el sueldo por semana.
*/
// Analisis:
// Datos de entrada:
/**
    * horasTrabajadas
    * costoDeHorasTrabajada
 */
// Datos de salida:
/**
    * montoTotal
 */
// Operaciones:
/**
    * Multiplicar la cantidad de horas trabajadas por el monto cobrado por cada hora trabajada.
 */
// Estrategia:
/**
    * Preguntamos cuantas horas se trabaja por dia
    * Cuanto se cobra por cada hora trabajada
    * multiplicamos la cantidad de horas trabajadas por el conto que se cobra por hora trabajada
    * Mostramos el monto total
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const horasTrabajadas       = Number(prompt('¿Cuantas horas trabajas por dia?'));
const costoDeHorasTrabajada = Number(prompt('¿Cuanto te pagan por hora trabajada?'));

const montoTotal = horasTrabajadas * costoDeHorasTrabajada;

console.log(` El sueldo mensual es de ${montoTotal} `)