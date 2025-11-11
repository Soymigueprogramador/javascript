// Fat arrow function
/*
    Todas las fat arrow function son anonimas y para poder referenciarlas debemos
    asignarselas a una variable o constante.

    Estas fat arrow function tienen una funcionalidad que es el return impricito, esto
    significa que podemos escribir la funcion en una sola linea siempre y cuando no necesite mas de una linea
    y tambien quiere decir que no es necesario que siempre usemos la palabra reservada de return
*/

// Ejemplo en codigo

// Ambas formas son lo mismo para escribir una fat arrow function
const hola = () => 'Hola mundo';
const hola1 = () => {
    return 'Hola mundo para todos';
};

// Fat arrow function con parametros (Si tiene un solo parametro podemos eliminar los parentesis)
const saludar = nombre => {
    return ` Hola a todos, mi nombre es ${nombre} `;
};

const ver = hola();
const ver1 = hola1();
const ver2 = saludar('Miguel');

console.log(ver);
console.log(ver1);
console.log(ver2);