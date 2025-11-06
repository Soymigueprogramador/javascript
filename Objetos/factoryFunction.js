// Factory function
/*
    Es un tipo de funcion que nos permite crear objetos de formal sencilla.
*/

// Sintaxys de una factory function
/**
    * Usamos la palabra reservada function
    * Le asignamos un nombre() {}
    * Dentro de la funcion creamos el objeto
 */

// Codigo de ejemplo
function crearUsuario(name, email) {
    return {
        name: name,
        email: email,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave');
        }
    };
}

// Creando los usuarios
/**
    * Creamos una variable o una constante
    * Le asignamos un nombre
    * Igualamos usa variable a la funcion com la que creamos el objeto
    * Completamos con los argumentos
 */

let user1 = crearUsuario('Miguel', 'm@gmail.com');
let user2 = crearUsuario('Melisa', 'meli@gmail.com');
let user3 = crearUsuario('Celeste', 'c@gmail.com');

// Imprimiento los nuevos objetos
console.log(user1, user2, user3)

// ACLARACIONES:
/**
    * Se debe usar camelCase para el nombre
    * Los vamores que vamos a cambiar se los pasamos por parametros
    * Si las propiedades son igual a los valores se los podemos omitir.
 */