// Alcance (Scope)
/*
    El alcance determina desde dónde se puede acceder a una variable o función.

    🔹 var → Tiene alcance de función (function scope).
              Solo se puede usar dentro de la función donde fue declarada.

    🔹 let y const → Tienen alcance de bloque (block scope).
                      Solo existen dentro del bloque { } donde fueron declaradas.

    🔹 Las funciones crean su propio alcance.
       Las variables declaradas dentro de una función no son accesibles desde fuera.
*/

// Ejemplo en código
function alcance() {
    function saludar() {
        var vieja = "No usar más";
        let variable = "Hola mundo";
        const constante = "Hola constante";

        console.log("Dentro de saludar():");
        console.log(vieja);
        console.log(variable);
        console.log(constante);
    }

    saludar(); // Llamamos a la función interna
}

// Ejecutamos la función principal
alcance();

// Si intentamos acceder a las variables fuera de su alcance, da error:
// console.log(vieja); ❌
// console.log(variable); ❌
// console.log(constante); ❌