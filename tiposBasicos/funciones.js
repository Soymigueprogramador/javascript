// ¿Que es una funcion?
/*
    Una funcion es un bloque de codigo espesifico que se utiliza para una tarea determinada,
    una funcion se la crea una vez pero se puede llamar varias veces a una misma funcion la cual
    sirve para no tener que estar utilizando el mismo codigo siempre.
*/

// ¿Como definir una funcion (Su sintaxis)?
/*
    Para definir una funcion hacemos esto:
        Palabra reservada function
        Le asugnamos un nombre(Parametros)
*/

// Codigo de ejemplo:
// Funcion tradicional.
function saludar(nombre = 'Miguel') // Lo que esta entre () son los parametros.
{
    // Resto del codigo.
    return ` Hola mi nombre es ${nombre} `;
    // return Permite reutilizar el codigo que esta dentro de una funcion.
};

// Llamado a la funcion.
console.log(saludar('Julieta')); // ('Julieta') esto es los argumentos.

function suma( a, b ) {
    return a + b;
};

let resultado = suma(20, 20);
console.log(resultado);