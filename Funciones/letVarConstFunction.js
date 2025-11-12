// let, var, const y function
/*
    🔹 let y const:
    Cuando definimos variables con estas palabras reservadas, JavaScript las lleva a la parte
    superior del archivo (hoisting), pero **no inicializa su valor**.
    Por eso, necesitamos definirlas antes de usarlas.

    🔹 var:
    Cuando definimos una variable con var, JavaScript también la lleva a la parte superior
    del archivo (hoisting), pero con un comportamiento diferente:
    se inicializa con "undefined" hasta que se le asigne un valor.
    Aun así, su uso ya no se recomienda en código moderno.

    🔹 function:
    Cuando creamos una función con la palabra reservada function,
    JavaScript lleva **toda su definición** a la parte superior del archivo.
    Por eso, podemos llamar a una función antes de declararla.
*/

// Ejemplo en código
function saludar() {
  return "Hola desde la función";
}

let hola = "Hola";
const chau = "Chau";
var vieja = "Esto ya no se usa más";

console.log(saludar()); // Ejecuta la función
console.log(vieja);
console.log(hola);
console.log(chau);

// En los navegadores, 'window' representa el objeto global
console.log(window);