// Que es un dato?
/*
    Un dato es el valor que guardamos en una variable
*/

// Que tipos de datos existen?
/**
    Tipos de datos primitivos:
        Number = numeros
        String = cadena de caracteres
        Boolean = true o false
        Undefined = no definido
        Null = nulo

    Tipos de datos por referencia:
        Arrays = arreglos []
        Object = objetos {}
        Function = funciones
        Class = clases
*/

// Donde se guardan los tipos de datos?
/*
    Memoria stack:
    Es un bloque de memoria fijo que no se puede modificar, y aquí se guardan los tipos de datos primitivos.

    Memoria heap:
    Es el espacio libre que el sistema operativo puede asignar si es necesario, y aquí se guardan los datos por referencia.
*/

// Diferencias entre primitivos y referencia:
/*
    Primitivo:
    Son los valores de una variable que están almacenados directamente en la misma.

    Referencia:
    Son los valores que cuando los llamamos solo nos devuelven una referencia en memoria.
*/

// PRIMITIVOS:

let numero = 1;
let cadenaDeCaracteres = 'Homanundo desde JavaScript';
let booleano = true;
let indefinido; // No definido.
let nulo = null; // La usamos cuando queremos anular el valor de una variable.

// TYPEOF: Lo usamos para saber el tipo de una variable.

console.log(typeof numero);
console.log(typeof cadenaDeCaracteres);
console.log(typeof booleano);
console.log(typeof indefinido);
console.log(typeof nulo);
