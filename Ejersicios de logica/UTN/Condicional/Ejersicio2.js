// Consigna:
/*
    2
    Hacer un programa para ingresar por teclado dos números y luego informar por pantalla
    con un cartel aclaratorio si el primer número es múltiplo del segundo.
*/

// Simplificación del problema:
/*
    Crear un programa que indique si un número es múltiplo de otro.
*/

// Análisis:
// Datos de entrada:
//  - n1
//  - n2
// Datos de salida:
//  - resultado (mensaje indicando si es múltiplo o no)
// Operaciones:
//  - Usar el operador % para verificar si n1 es múltiplo de n2

// Codificación:

let n1 = Number(prompt("Ingrese el primer número:"));
let n2 = Number(prompt("Ingrese el segundo número:"));

if (n2 === 0) {
    console.log("No se puede dividir por cero.");
} else if (n1 % n2 === 0) {
    console.log(`El número ${n1} es múltiplo de ${n2}`);
} else {
    console.log(`El número ${n1} no es múltiplo de ${n2}`);
}
