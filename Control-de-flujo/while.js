// WHILE
/*
    El bucle inexacto "while" pertenece a la familia de los bucles inexactos.
    Se caracterizan porque ejecutan una porción de código mientras la condición
    sea verdadera. Es decir, se sabe dónde comienza la ejecución, pero no
    necesariamente cuántas veces se repetirá ni dónde terminará exactamente.
*/

// Ejemplo en código

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
console.log('Esto ya esta afuera del while')

// Ejemplo 1:
let numeroPar = 0;

while( numeroPar < 10 ) {
    if( numeroPar % 2 == 0 ) {
        console.log('Numero par', numeroPar)
    };
    numeroPar++
}
console.log('Fin de los numeros par')

// Aclaracion:
/**
    * En el ejemplo 1 el nombre de la variable con el ++ debe estar fuera del if o creara un loop infinito.
    * Los loops infinitos son bloques de codigo que se ejecutan sin fin y pueden consumir   la memoria ram.
 */