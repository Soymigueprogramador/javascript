// DO...WHILE
/*
    El ciclo "do...while" también pertenece a la familia de los ciclos inexactos.
    A diferencia del "while", en este caso el "do...while" primero ejecuta el bloque de código
    y después evalúa si la condición se cumple.
*/

// Ejemplo en código

let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

console.log('Esto está afuera del do...while');
