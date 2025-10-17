// for
/*
    El ciclo for es un ciclo que pertenece a la familia de los ciclos exactos.
    Esto quiere decir que en un ciclo for sabemos donde arranca y donde va a terminar.
*/

// Ejemplo en codigo

for(let i = 0; i < 10; i++) {
    console.log('Hola desde JavaScript');
}

// Ejemplo 1:
let numeroPar = 10;

for(let j = 0; j < numeroPar; j++) {
    if( numeroPar % 2 == 0 ) {
        console.log('Numero par', j)
    }
}

// Expreciones del for
/**
    * Se inicia con una variable inicial en 0 (let nombreVariable = 0;)
    * Se le debe indicar la condicion que debe cumpli "Hasta donde debe llegar" (nombreVariable condicion;)
    * Se le debe agregar una variable de incremento "En cada vuelta sume 1" (nombreVariable++;)
    * Dentro de las {} se escribe el codigo a repetir.
 */