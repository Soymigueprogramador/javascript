// Dinamismo
/*
    En JavaScript los objetos son dinamicos, esto quiere decir que nosotros podemos cambiar sus propiedades
    u valores cuando queramos.
*/

// Sintaxys de un objeto.
/**
    * Lo definimos usando una constante o variable.
    * Le asignamos un nombre al objeto.
    * Lo igualamos y usamos llaves {};
 */

// Codigo de ejemplo:
let user = { id: 1 };

// Ejemplo:
user.name = 'Miguel'; // Asi agregamos una propiedad y un valor
user.apodo = 'Gato';

user.id = 2; // Asi modificamos un valor de una propiedad existente

// Asi agregamos una funcion anonima (Sin nombre)
user.mostrar = function() {
    console.log('mostrar', user.id);
    console.log('mostrar', user.name);
    console.log('mostrar', user.apodo);
};

delete user.apodo; // Asi eliminamos una propiedad

user.mostrar(); // Llamado a la funcion

Object.seal({ id: 5 }); // Asi cambiamos el valor de una propiedad pero no se agrega otra propiedad
Object.freeze();        // Asi congelamos el objeto para que no se pueda modificar

console.log(user);

// ACLARACIONES:
/**
    * Si el objeto lo creamos usando const solo podemos agregar propiedades y valores pero no cambiar nada
    * Si el objeto lo creamos usando  let podemos agregar y cambiar propiedades y valores
 */
