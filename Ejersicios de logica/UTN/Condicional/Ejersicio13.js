/*
    13
    Hacer un programa para ingresar tres números distintos y listarlos ordenados de menor a mayor.
    Sugerimos probar CADA UNA de las siguientes 6 combinaciones.
    Si N1=8, N2=6, N3=10 ó N1=8, N2=10, N3=6 → Se muestra: 6, 8, 10.
    Si N1=6, N2=8, N3=10 ó N1=10, N2=8, N3=6 → Se muestra: 6, 8, 10.
    Si N1=6, N2=10, N3=8 ó N1=10, N2=6, N3=8 → Se muestra: 6, 8, 10.
*/

const n1 = Number(prompt('Ingrese el primer número:'));
const n2 = Number(prompt('Ingrese el segundo número:'));
const n3 = Number(prompt('Ingrese el tercer número:'));

let menor, medio, mayor;

if (n1 < n2 && n1 < n3) {
  menor = n1;
  if (n2 < n3) {
    medio = n2;
    mayor = n3;
  } else {
    medio = n3;
    mayor = n2;
  }
} else if (n2 < n1 && n2 < n3) {
  menor = n2;
  if (n1 < n3) {
    medio = n1;
    mayor = n3;
  } else {
    medio = n3;
    mayor = n1;
  }
} else {
  menor = n3;
  if (n1 < n2) {
    medio = n1;
    mayor = n2;
  } else {
    medio = n2;
    mayor = n1;
  }
}

console.log("Orden de menor a mayor:", menor, medio, mayor);
