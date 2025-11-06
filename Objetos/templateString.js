// Template String
/*
    Los *template strings* (también llamados *plantillas literales*)
    se escriben entre backticks (` `), no entre comillas simples o dobles.

    A diferencia de los strings normales, los template strings permiten:
      ✅ Insertar variables o expresiones con ${...}
      ✅ Escribir en varias líneas sin usar caracteres de escape
    Son una forma más limpia y cómoda de crear textos dinámicos.
*/

// Ejemplo en código
const nombre = String(prompt('Ingresa tu nombre:'));

const mensaje = `Hola ${nombre},
bienvenido al curso
de JavaScript desde cero.`;

console.log(mensaje);
console.log(typeof mensaje);