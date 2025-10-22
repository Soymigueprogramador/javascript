/*
    12
Hacer un programa para ingresar tres números diferentes y determinar e informar el número del medio.
Sugerimos probar CADA UNA de las siguientes 6 combinaciones.
N1=8, N2=6, N3=10. Valor del medio: 8. N1=8, N2=10, N3=6. Valor del medio: 8
N1=6, N2=8, N3=10. Valor del medio: 8. N1=10, N2=8, N3=6. Valor del medio: 8
N1=6, N2=10, N3=8. Valor del medio: 8. N1=10, N2=6, N3=8. Valor del medio: 8
*/

let n1 = Number(prompt('Ingresa el primer número'));
let n2 = Number(prompt('Ingresa el segundo número'));
let n3 = Number(prompt('Ingresa el tercer número'));

let medio;

if((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)) {
    medio = n1;
} else if((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)) {
    medio = n2;
} else {
    medio = n3;
}

console.log('El número del medio es: ' + medio);