// IF - ELSE
/*
    El if es una estructura condicional que nos permite dirigir el flujo de nuestro código.
*/

// Ejemplo en código

let edad = 18; // Variable que usamos como condición

// Dentro del paréntesis va la condición a evaluar
if (edad >= 21) {
    // Expresión o bloque de código que se ejecutará si la condición se cumple
    console.log('Sos mayor de edad'); // A modo de ejemplo
} else if (edad >= 18) {
    console.log('Sos mayor de edad (joven)'); // A modo de ejemplo
} else {
    console.log('No sos mayor de edad'); // A modo de ejemplo
}

// Aclaración
/**
    * Todo lo que esté dentro del if es la condición principal a evaluar; si se cumple, se ejecutará ese bloque de código.
    * El else if sirve para evaluar una condición secundaria cuando la primera no se cumple.
    * El else se ejecuta únicamente si ninguna de las condiciones anteriores es verdadera.
 */
