// continue y break
/*
    Son palabras reservadas que se pueden usar en todos los loops que ya vimos antes.
    continue:
    Nos permite saltarnos una iteracion.
    break:
    Nos permite cortar y salir de un loop.
*/

// Ejemplo en codigo con while.

let i = 0;

while( i <= 5 ) {
    i++;
    if( i === 2 ) {
        continue; // Se salta esta iteracion
    }
    if( i === 4 ) {
        break; // Corta al llegar a 4
    }
    console.log(i)
}
