// Extendiendo propiedades (NO recomendado)

/*
    Extender el objeto global Object.prototype afecta a TODOS los objetos
    del sistema, lo cual puede generar conflictos con librerías o código
    de terceros.

    Por eso, agregar métodos al prototipo de Object es considerado
    una mala práctica.
*/

// ❌ Ejemplo de mala práctica:
Object.prototype.isIgual = function () {
    // Lógica del código.
    // (Esto debería evitarse)
    console.log("Comparando objetos (ejemplo).");
};

let x = {};
x.isIgual({ a: 1 }); // Esto funciona, pero puede causar problemas.
console.log(x);

/*
    Problema:
        Si una librería externa o código de terceros espera que Object.prototype
        NO tenga ciertos métodos, extenderlo puede generar errores inesperados.

    Recomendación:
        ❗ NO extender Object.prototype.
        ✔ Si necesitás comparar objetos, usá funciones externas o utilidades
          separadas, como Object.is(), JSON.stringify(), o librerías como Lodash.
*/