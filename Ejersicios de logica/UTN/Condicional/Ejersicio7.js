/*
    7
Hacer un programa para ingresar por teclado tres números e informar
con una leyenda aclaratoria si los tres son todos distintos entre sí, caso contrario no emitir nada.
Tener en cuenta:
Si A es distinto de B y B es distinto de C, eso no significa que A y C sean distintos. Ejemplo: A=8, B=6 y C=8.

*/

let n1 = Number(prompt('Ingrsa el primer numero'));
let n2 = Number(prompt('Ingrsa el segundo numero'));
let n3 = Number(prompt('Ingrsa el tercer numero'));

if( n1 != n2 && n2 != n3 && n3 != n1 ) {
    console.log(`Los numeros ${n1}, ${n2} y ${n3} son distintos entre si`);
} else {
    console.log(`Los numeros ${n1}, ${n2} y ${n3} no son distintos entre si`);
}