// ¿Que es un objeto?
/*
    Los objetos son una agrupacion de datos.
*/

// Codigo de ejemplo.
let persona = {}; // Si lo dejamos vacio es un objeto literal.
let persona1 = {
//  Llave     Valor
    nombre:   'Miguel',
    apellido: 'Salazar',
    edad:     33,
    apodo:    'Perri',
};
// Si se ve desordenado es porque JavaScript no asegura ese orden.

// Accediendo a las propiedades de un objeto.
// Primera forma.
console.log(persona1.apellido);
// Segunda forma.
console.log(persona1['edad']);

// Modificando una propiedad del objeto.
persona1.nombre = 'Guimar';
persona1.apodo = 'Migue';

// Eliminando propiedades de un objeto.
delete persona1.apodo;

// Mostrando los objetos.
console.log(persona);
console.log(persona1);