// Valor y referencia
/*
    Valor:
        Cuando creamos una variable y despues la buscamos para ver su valor eso es
        busqueda por valor y cuando cambiamos el valor de esa variable se cambia el valor original.

    Referencia:
        Cuando creamos un objeto y lo buscamos lo que nos va a llegar es una referencia de donde
        esta ese objeto, si creamos otro objeto se va a asignar en otro espacio de memoria y a nosotros
        nos volvera a dar una referencia de donde esta ese objeto.
*/

// Codigo de ejemplo
let nombre = 'Miguel'; // Valor original
nombre = 'Celeste';    // Nuevo valor
console.log(nombre)

let usuario = {}; // Se guarda en un bloque de memoria
let estudiante = {}; // Se guarda en un bloque de memoria distinto
console.log(usuario, estudiante) // Al buscarlo nos da una direccion de memoria (Referencia)

let a = {};
let b = a;
b.prop = 1;
console.log(a, b)