/*
    14
    Hacer un programa para ingresar por teclado la fecha de nacimiento de una persona,
    ingresando día, mes y año como 3 datos individuales.
    Luego ingresar la fecha actual ingresando día, mes y año como 3 datos individuales.
    Calcular luego la edad en años de esa persona y listar por pantalla.
*/

const diaNacimiento = Number(prompt('Ingrese el día en que naciste:'));
const mesNacimiento = Number(prompt('Ingrese el mes en que naciste:'));
const anioNacimiento = Number(prompt('Ingrese el año en que naciste:'));

const diaActual = Number(prompt('Ingrese el día actual:'));
const mesActual = Number(prompt('Ingrese el mes actual:'));
const anioActual = Number(prompt('Ingrese el año actual:'));

let edad = anioActual - anioNacimiento;

if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
}

console.log(`Esta persona tiene ${edad} años de edad`);
