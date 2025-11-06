// Math
/*
    El objeto Math ya viene incorporado en JavaScript.
    Nos permite realizar operaciones matemáticas comunes de forma más rápida.
*/

// Ejemplo en código:
console.log(
    Math.PI,          // Devuelve el número PI (≈ 3.141592...)
    Math.abs(-15),    // Devuelve el valor absoluto de un número
    Math.round(25.5), // Redondea al entero más cercano (>= .5 redondea hacia arriba)
    Math.floor(15.6), // Redondea hacia abajo
    Math.ceil(15.1),  // Redondea hacia arriba
    Math.pow(2, 3),   // Calcula la potencia (2³ = 8)
    Math.sqrt(9),     // Calcula la raíz cuadrada (√9 = 3)
    Math.random()     // Devuelve un número aleatorio entre 0 y 1
);

// Función para obtener un número aleatorio entre un mínimo y un máximo
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Ejemplo de uso
console.log(getRandom(1, 10));