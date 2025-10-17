// for in (Propio de JavaScript)
/*
    Es un tipo de loop que nos permite iterar las propiedades de un objeto.
*/

// Sintaxys del for in
/**
    * Usamos la palabra reservada for
    * LE inficamos el nombre de la variable donde se guardan las pripiedades a iterar
    * Le indicamos el nombre del objeto
 */

// Ejemplo en codigo
let usuario = {
    id: 1,
    name: 'Miguel',
    edad: 33
};

for( prop in usuario ) {
    console.log(prop, usuario['edad']); // Asi accedemos a las propiedades del objeto.
};