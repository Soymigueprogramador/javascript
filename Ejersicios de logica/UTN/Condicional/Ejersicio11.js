/*
    11
    Hacer un programa para ingresar cinco números y listar
    cuántos de esos cinco números son positivos,
    cuántos son negativos y cuántos son iguales a 0.
*/

let n1 = Number(prompt('Ingresa el primer número'));
let n2 = Number(prompt('Ingresa el segundo número'));
let n3 = Number(prompt('Ingresa el tercer número'));
let n4 = Number(prompt('Ingresa el cuarto número'));
let n5 = Number(prompt('Ingresa el quinto número'));

let positivos = 0;
let negativos = 0;
let ceros = 0;

// --- Primer número ---
if (n1 > 0) {
    positivos++;
} else if (n1 < 0) {
    negativos++;
} else {
    ceros++;
}

// --- Segundo número ---
if (n2 > 0) {
    positivos++;
} else if (n2 < 0) {
    negativos++;
} else {
    ceros++;
}

// --- Tercer número ---
if (n3 > 0) {
    positivos++;
} else if (n3 < 0) {
    negativos++;
} else {
    ceros++;
}

// --- Cuarto número ---
if (n4 > 0) {
    positivos++;
} else if (n4 < 0) {
    negativos++;
} else {
    ceros++;
}

// --- Quinto número ---
if (n5 > 0) {
    positivos++;
} else if (n5 < 0) {
    negativos++;
} else {
    ceros++;
}

// Mostrar resultados
console.log(
  'Cantidad de positivos: ' + positivos +
  '\nCantidad de negativos: ' + negativos +
  '\nCantidad de ceros: ' + ceros
);
