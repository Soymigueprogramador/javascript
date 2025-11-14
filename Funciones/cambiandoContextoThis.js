// Cambiando el contexto de this
/*

*/

// Ejemplo en codigo
function saludar(...rest) {
    console.log(this, rest);
};

// Cambiando el contexto con el metodo call()
/**
 * Este metodo recibe 2 argumentos:
    * Un objeto con el contexto de this
    * Los argumentos que se le van a pasar a la funcion
 */
saludar.call({propiedad: 'Hola mundo'}, 1, 2);

// Cambiando el contexto con el metodo apply
// En este metodo los argumentos se pasan como arrays []
saludar.apply({propiedad: 'Hola mundo'}, [1, 2]);

// Cambiando el contexto con el metodo bind
// Este metodo solo nos permite cambiar el contexto de this.
let nuevoMetodo = saludar.bind({ saludo: 'Hola' });
nuevoMetodo(1,2 , 3); // Estos argumentos se combierten en un array []

// Forma corta de ejecutar la misma funcion
saludar.bind({ saludo: 'Hola a todos!!' })(1,2, 3, 4, 5);