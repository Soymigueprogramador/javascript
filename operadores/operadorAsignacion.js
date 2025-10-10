// Operadores de asignación
/*
    Los operadores de asignación son los operadores que usamos para asignar un valor a
    una constante o variable.
*/

// Operadores:
/**
 * =   Asignación simple
 * +=  Asignación con suma
 * -=  Asignación con resta
 * *=  Asignación con multiplicación
 * /=  Asignación con división
 * %=  Asignación con módulo
 * **= Asignación con potencia
 */

// Ejemplo en código:

let a = 5;  // Asignación simple → a vale 5
let b = a;  // b ahora vale lo mismo que a (5)

// Asignación con suma
a += 30;   // a = a + 30 → ahora a vale 35
b = a;     // b también vale 35

console.log("Después de += :", b);

// Asignación con resta
a -= 10;   // a = a - 10 → a vale 25
console.log("Después de -= :", a);

// Asignación con multiplicación
a *= 2;    // a = a * 2 → a vale 50
console.log("Después de *= :", a);

// Asignación con división
a /= 5;    // a = a / 5 → a vale 10
console.log("Después de /= :", a);

// Asignación con módulo
a %= 3;    // a = a % 3 → a vale 1 (10 % 3 = 1)
console.log("Después de %= :", a);

// Asignación con potencia
a **= 3;   // a = a ** 3 → a vale 1 ** 3 = 1
console.log("Después de **= :", a);
