// Ordenando arrays

const numeros = [2, 1, 5, 4, 3];

// Ordenamos el array de menor a mayor
let menorMayor = numeros.sort();

// Ordenamosel array de mayor a menor
let mayorMenor = numeros.reverse();

console.log(numeros.sort());
console.log(numeros.reverse());
console.log(numeros);

console.log('----------------------------------------------------------------------------------------');

let letras = ['z', 'a', 'd'];

// Funciona de la misma manera que en el ejemplo anterior
console.log(letras.sort());
console.log(letras.reverse());

// ¿Que pasaria si una letra esta en mayuscula?
/*
    A los caracteres se les asigna un numero para despues ser referenciados,
    esto quiere decir que si una letra en mayuscula tiene un numero mayor que
    una letra en minuscula esta primer letra se va a mostrar antes sin importar
    el orden alfabetico.
*/

console.log('----------------------------------------------------------------------------------------');

// Ejemplo en codigo
let conMayuscula = ['Z', 'a', 'd'];

console.log(conMayuscula.sort()) // Solucion al problema
/**
 * Para solucionar este problema hacemos esto:
    * Llamamos al metodo sort()
    * Le pasamos una fat arrow function () => {}
    * Dentro de la funcion tenemos que crear dos variables
    * Tenemos que preguntar cual de ambas es mayor
 */

console.log(conMayuscula.sort((a, b) => {
    /**
     * Si queremos que A este antes de que tenemos que retornar -1
     * Si queremos que B este antes de que tenemos que retornar 1
     * Si son iguales tenemos que retornamos 0
     */

    let alowe = a.toLowerCase();
    let blowe = b.toLowerCase();

    // Preguntamos cual es mayor
    if( alowe < blowe ) {
        return -1;
    } else if( alowe > blowe ) {
        return 1;
    } else {
        return 0;
    }
}));

console.log('----------------------------------------------------------------------------------------');

// Aplicando esto ultimo con un objeto
const usuarios = [

    { edad: 33, nombre: 'Miguel' },
    { edad: 25, nombre: 'Celeste' },
    { edad: 28, nombre: 'Araceli' },
];

console.log(usuarios.sort((a, b) => {
    // Los ordenamos por edad de menor a mayor
    if( a.edad < b.edad ) return -1;
    if( a.edad > b.edad ) return 1;
    return 0;
}));