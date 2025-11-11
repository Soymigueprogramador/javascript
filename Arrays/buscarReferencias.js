// Buscar por referencias
/*
   El método find() nos permite buscar un elemento dentro de un array de objetos
   según una condición específica. Devuelve el primer elemento que cumpla con dicha condición.
*/

// Ejemplo en código
const usuarios = [
  { id: 1, nombre: "Miguel Salazar", edad: 30, email: "miguel@example.com" },
  { id: 2, nombre: "Laura Gómez", edad: 25, email: "laura@example.com" },
  { id: 3, nombre: "Carlos Pérez", edad: 28, email: "carlos@example.com" },
  { id: 4, nombre: "Ana Torres", edad: 32, email: "ana@example.com" },
  { id: 5, nombre: "Julián Rodríguez", edad: 27, email: "julian@example.com" },
  { id: 6, nombre: "Sofía Martínez", edad: 24, email: "sofia@example.com" },
  { id: 7, nombre: "Marcos Díaz", edad: 29, email: "marcos@example.com" },
  { id: 8, nombre: "Valentina López", edad: 26, email: "valentina@example.com" },
  { id: 9, nombre: "Fernando Ruiz", edad: 31, email: "fernando@example.com" },
  { id: 10, nombre: "Camila Herrera", edad: 23, email: "camila@example.com" }
];

// Método find()
// find() devuelve el primer elemento que cumpla con esto condicion
let usuarioEncontrado = usuarios.find(usuario => usuario.nombre === 'Miguel Salazar');
let usuarioEncontradoPorEdad = usuarios.find(usuario => usuario.edad === 28);

/**
 * Explicación:
 * - El método find() ejecuta una función para cada elemento del array.
 * - Dentro de la función comparamos una propiedad del objeto con el valor buscado.
 * - Si la condición se cumple, devuelve ese elemento y detiene la búsqueda.
 *
 * Ejemplo general:
 * const resultado = nombreArray.find(function(elemento) {
 *   return elemento.propiedad === valorBuscado;
 * });
 */

// El metodo findIndex() nos devuelve el indice del elemento en lugar del objeto.
let usuarioEncontradoPorIndice = usuarios.findIndex(usuario => usuario.nombre === 'Miguel Salazar');

console.log(usuarioEncontrado);
console.log(usuarioEncontradoPorEdad);
console.log(usuarioEncontradoPorIndice);
console.log(usuarios);