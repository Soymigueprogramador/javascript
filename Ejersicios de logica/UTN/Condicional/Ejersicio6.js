/*
    6
Hacer un programa para ingresar por teclado tres números y luego determinar e informar con una leyenda aclaratoria si los tres son iguales entre sí,
caso contrario no emitir nada.
Tener en cuenta:  Si A es igual a B y B es igual a C, entonces A y C son iguales.

*/

let n1 = Number(prompt('Ingrsa el primer numero'));
let n2 = Number(prompt('Ingrsa el segundo numero'));
let n3 = Number(prompt('Ingrsa el tercer numero'));

if( n1 == n2 && n2 == n3 && n3 == n1 ) {
    console.log(`Los numeros ${n1}, ${n2} y ${n3} son iguales entre si`);
} else {
    console.log(`Los numeros ${n1}, ${n2} y ${n3} no son iguales entre si`);
}; 