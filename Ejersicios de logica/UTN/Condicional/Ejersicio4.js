// Consigna:
/*
    4
    Hacer un programa para ingresar por teclado dos números y luego informar por pantalla
    la diferencia entre ambos (siempre un valor positivo).
    Ejemplo A: Si se ingresan 3 y 8 se emite 5.
    Ejemplo B: Si se ingresan -3 y 9 se emite 12.
    Ejemplo C: Si se ingresan -3 y -9 se emite 6.
    Importante: la diferencia absoluta siempre es un valor positivo.
*/

// Simplificación del problema:
/*
    Ingresar dos números y mostrar la diferencia absoluta entre ambos.
*/

// Análisis:
// Datos de entrada: n1, n2
// Dato de salida: diferencia
// Operaciones: diferencia = Math.abs(n1 - n2)

// Estrategia:
/*
    1. Pedir ambos números.
    2. Calcular la diferencia absoluta con Math.abs().
    3. Mostrar el resultado por pantalla.
*/

// Codificación:

const n1 = Number(prompt('Ingrese el primer número:'));
const n2 = Number(prompt('Ingrese el segundo número:'));

// Calcular diferencia absoluta
const diferencia = Math.abs(n1 - n2);

// Mostrar resultado
console.log(`La diferencia entre ambos números es: ${diferencia}`);