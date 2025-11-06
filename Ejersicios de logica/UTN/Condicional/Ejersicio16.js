// Ejersicio 16
/*
    16
Hacer un programa para ingresar por teclado las cuatro notas de los exámenes obtenidas por un
alumno y luego emitir uno solo de los  cartel de acuerdo a las siguientes condiciones:
- “Promociona”, sí obtuvo en los cuatro exámenes nota 7 o más.
- “Rinde examen final”, si obtuvo nota 4 o más en por lo menos tres exámenes.
- “Recupera Parciales”, si obtuvo nota 4 o más en por lo menos uno de los exámenes.
- “Recursa la materia”, si no aprobó ningún examen parcial.
*/

let examen1 = Number(prompt('Ingresa la nota del primer parcial'));
let examen2 = Number(prompt('Ingresa la nota del segundo parcial'));
let examen3 = Number(prompt('Ingresa la nota del tercero parcial'));
let examen4 = Number(prompt('Ingresa la nota del cuarto parcial'));

let cantidadExamenAprobados = 0;
let cantidadPromocionados   = 0;

if( examen1 >= 4 ) cantidadExamenAprobados++;
if( examen2 >= 4 ) cantidadExamenAprobados++;
if( examen3 >= 4 ) cantidadExamenAprobados++;
if( examen4 >= 4 ) cantidadExamenAprobados++;


if( examen1 >= 7 ) cantidadPromocionados++;
if( examen2 >= 7 ) cantidadPromocionados++;
if( examen3 >= 7 ) cantidadPromocionados++;
if( examen4 >= 7 ) cantidadPromocionados++;

if( cantidadPromocionados == 4 ) {
    console.log('Aprobaste todos los examens, promocionas la materia');
} else if( cantidadPromocionados >= 3 ) {
    console.log('No aprobaste todos los examens, tenes que rendir el final');
} else if( cantidadPromocionados >= 1 ) {
    console.log('No aprobaste todos los examens, tenes que recursar');
} else {
  console.log('Recursas la materia');
}