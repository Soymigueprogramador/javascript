// Join
/*
    Con el método join() podemos unir los elementos de un array en un solo string.
    Podemos pasarle como parámetro el separador que queremos usar.
*/

const nombres = ["Miguel", "Laura", "Carlos", "Sofía"];
let mensaje = nombres.join("/"); // El parámetro es opcional, pero define el separador

// Split
/*
    Con el método split() podemos dividir un string en un array,
    indicando el separador que se usará para cortar el texto.
*/

const mensaje2 = "Hola mundo desde JavaScript";
let dividir = mensaje2.split(" "); // El parámetro es obligatorio

console.log(mensaje);   // Miguel/Laura/Carlos/Sofía
console.log(dividir);   // ["Hola", "mundo", "desde", "JavaScript"]

// Ejemplo adicional: crear una "URL friendly"
let urlFriendly = dividir.join("-");
console.log(urlFriendly); // Hola-mundo-desde-JavaScript