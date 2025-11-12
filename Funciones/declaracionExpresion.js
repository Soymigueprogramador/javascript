// Declaracion vs expresion
/*
    Declaracion:
        Para declarar una funcion tenemos que usar la palabra reservada funcion y
        le asignamos un nombre. tambien podemos usar una funcion anonima solo cuando vamos a
        ejecutar un bloque de codigo de forma urgente, generalmente a las funciones anonimas
        las podemos usar cuando estan dentro de algun objeto o array..

    Expresion:
        Las expresiones de funciones son aquellas funciones que fueron asignadas a una variable
        Tambien podemos crear una funcion nombreada, solo que despues de la asignacion
        declaramos la funcion y le agregamos el nombre de la misma.
        Por otro lado tambien podemos crear una funcion de expresion como una fat arrow function
        a estas funciones no se les puede agregar un nombre pero si se las puede asignar a una
        variable o una constante.

    Aclaracion:
        1- Las funciones creadas con la palabra reservada de function se pueden llamas antes de
            ser definidas, es decir que primero las puedo llamar y despues crearlas.
        2- Las funciones de expresion o fat arrow function primero tienen que ser definidas
        para despues poder ser llamadas o de lo contrario dan error.
*/

// Ejemplo en codigo

// Declaracion de funciones
// A este tipo de funcion de la conoce como funcion nombrada (function name)
function suma() {
    // Resto del codigo
    console.log('Sumando!!');
};
// Llamado a la funcion
suma();

// Funcion anonima (anonymous function)
[].map(function () {
    console.log('Funcion anonima');
});

// Expresion de funciones
let resta = function () { // anonymous function expresion
    console.log('Restando!!');
};

let multiplicar = function multi() { // name function expresion
    console.log('Restando!!');
};

let dividir = () => {
    console.log('Dividiendo');
};

console.log(resta);
console.log(multiplicar);
console.log(dividir);