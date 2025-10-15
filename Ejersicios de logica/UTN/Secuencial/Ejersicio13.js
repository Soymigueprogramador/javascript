// Consigna:
/*
    13
Hacer un programa para un cajero automático para ingresar un importe a retirar y convertir el mismo en la cantidad de billetes de $1.000, $500, $200 y $100 a entregar.
Ejemplo A: Si el importe a retirar es $2500 se mostrará por pantalla que se deberán entregar 2 billetes de $1.000, 1 billete de $500,  0 billetes de $200 y 0 billetes de $100.
Ejemplo B: Si el importe a retirar es $3400 se mostrará por pantalla que se deberán entregar 3 billetes de $1.000, 2 billetes de $200, 0 billetes de $500 y 0 billetes de $100.
Ejemplo C: Si el importe a retirar es $300 se mostrará por pantalla que se deberán entregar 1 billete de $200, 1 billete de $100, 0 billetes de $1.000 y 0 billetes de $500.
Recordatorio. Considerar en todos los casos que el importe a retirar es en todos los casos múltiplo de $100 ya que el cajero no cuenta con billetes de $50, $20 o $10.

*/
// Simplificacion del problema:
/*
    Tengo que desarrollar un cajero automatico que al ingresarle un importe muestre que tipos de billetes va a entregar.
*/
// Analisis:
// Datos de entrada:
/**
    * importe
    * valor1000
    * valor500
    * valor200
    * valor100
 */
// Datos de salida:
/**
    * importe
    * cant1000
    * cant500
    * cant200
    * cant100
 */
// Operaciones:
/**
    * Ingreso el monto a retirar
    * Voy dividiendo la cantidad de billetes solicitados
 */
// Estrategia:
/**
    * Pido un importe a retirar
    * Muestro el importe total a retirar
    * Muestro que tipos de billetes va a entregar
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

let importe = Number(prompt('¿Cuánto dinero vas a retirar?'));

const valor1000 = 1000;
const valor500  = 500;
const valor200  = 200;
const valor100  = 100;

let cant1000 = Math.floor(importe / valor1000);
importe = importe % valor1000;

let cant500 = Math.floor(importe / valor500);
importe = importe % valor500;

let cant200 = Math.floor(importe / valor200);
importe = importe % valor200;

let cant100 = Math.floor(importe / valor100);
importe = importe % valor100;

console.log(`El importe total a retirar es: $${cant1000 * 1000 + cant500 * 500 + cant200 * 200 + cant100 * 100}`);
console.log(`Billetes de $1000: ${cant1000}`);
console.log(`Billetes de $500:  ${cant500}`);
console.log(`Billetes de $200:  ${cant200}`);
console.log(`Billetes de $100:  ${cant100}`);
