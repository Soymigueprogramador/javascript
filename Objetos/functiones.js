// Funciones
/*
    Las funciones en JavaScript tambien son objetos.
    A estos se los conoce como objetos de primera clase esto
    quiere decir que una funcion puede ser:
    1- Pasada como argumento a otra funcion.
    2- Pueden ser asignadas a otras variables
    3- Pueden ser retornadas de otras funciones.
    Las funciones tambien tienen propiedades y se las puede acceder asi como se ve en codigo.
*/

// Ejemplo en codigo.
function Usuario( nombre ) { // Funcion constructora
    this.nombre = nombre;
};

// Accediendo a propiedades
console.log(Usuario.name);   // Devuelve el nombre de la funcion
console.log(Usuario.length); // Devuelve la cantidad de parametros que tiene la funcion

// Asignando una funcion a una variable:
let u = new Usuario('Miguel');

console.log(u);

// Pasando una funcion como argumento:
function of( Fn, arg ) {
    return new Fn(arg);
};

let user1 = of(Usuario, 'Celeste');

console.log(user1)

// Retornando una funcion dentro de otra funcion:
function retornado() {
    return function() {
        console.log('Que onda bro!!');
    };
};

// Esto retorna la funcion anonima que esta dentro de la funcion retornado
let saludo = retornado();
saludo();