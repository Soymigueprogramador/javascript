// Clonando objetos
/*
    Formas de clonar un objeto en JavaScript
*/


// Ejemplo en codigo
const punto = {
    x: 10,
    y: 15,
};

// Esta forma es antigua (ECMAScript 2015)
// Asi podemos asignarle nuevos valores y propiedades a un objeto
Object.assign(punto, { z: 20 }); // Nombre del objeto, un nuevo objeto con propiedades y valores

// Asi clonamos un objeto
let nuevoPunto = Object.assign({} ,punto, { z: 20, c: 25 });

// Asi podemos obtener una referencia de un objeto
let referencia = Object.assign(punto, { z: 20, c: 25 });

// Asi creamos una copia de un objeto
let copiaPunto = Object.assign({}, punto);

console.log(
    punto,
    nuevoPunto,
    referencia,
    copiaPunto,
);

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// Forma mas actual
// Para esta nueva forma vamos a usar el express operator (..)

// Ejemplo en codigo

// Asi creamos un objeto literal y las propiedades del objeto original se
// le agregan a este objeto literal
let nuevaCopiaPunto = { ...punto };

console.log(
    nuevaCopiaPunto,
);

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// Forma antigua y no recomendada
let copia = {};
for( let i in punto ) {
    copia[i] = punto[i];
};
console.log(copia);