// Array reduce
/*
    Usamos el método reduce para reducir o transformar
    el contenido que está dentro de un array en un solo resultado.
*/

// Sintaxis
/**
 * Para trabajar con el método reduce hacemos esto:
 *  - Creamos una nueva variable con un nombre relacionado a la operación.
 *  - Le asignamos el método reduce: nombreArray.reduce().
 *  - El método reduce recibe una función con dos parámetros:
 *      * acc → acumulador.
 *      * elem → elemento actual que se está iterando.
 *  - También recibe un segundo argumento opcional:
 *      * el valor inicial del acumulador.
 */

// Ejemplo en código
const numeros = [12, 5, 8, 21, 3];

// Ejemplo 1: sumar todos los elementos
const suma = numeros.reduce((acc, elem) => {
    // La función se ejecuta una vez por cada elemento del array.
    return acc + elem; // retornamos el acumulador + el elemento
}, 0);

console.log('Suma total:', suma); // 👉 49

// Ejemplo 2: aplanar un array (flatten)
const anidados = [[1, 2], 3, [4, 5]];

const plano = anidados.reduce((acc, elem) => acc.concat(elem), []);
console.log('Array plano:', plano); // 👉 [1, 2, 3, 4, 5]

// Ejemplo 3: usando reduce con arrays de objetos
const usuarios = [
  { id: 1, nombre: "Miguel Salazar", edad: 30, email: "miguel@example.com", pais: "Argentina", activo: true },
  { id: 2, nombre: "Laura Gómez", edad: 25, email: "laura@example.com", pais: "México", activo: false },
  { id: 3, nombre: "Carlos Pérez", edad: 28, email: "carlos@example.com", pais: "Chile", activo: true },
  { id: 4, nombre: "Sofía Martínez", edad: 22, email: "sofia@example.com", pais: "Perú", activo: false },
  { id: 5, nombre: "Andrés López", edad: 35, email: "andres@example.com", pais: "Colombia", activo: true },
  { id: 6, nombre: "Lucía Fernández", edad: 27, email: "lucia@example.com", pais: "España", activo: false },
  { id: 7, nombre: "Diego Torres", edad: 32, email: "diego@example.com", pais: "Uruguay", activo: true },
  { id: 8, nombre: "Valentina Ruiz", edad: 24, email: "valentina@example.com", pais: "Ecuador", activo: false },
  { id: 9, nombre: "Javier Morales", edad: 29, email: "javier@example.com", pais: "Paraguay", activo: true },
  { id: 10, nombre: "Camila Herrera", edad: 26, email: "camila@example.com", pais: "Bolivia", activo: true }
];

// Ejemplo 4: convertir el array en un objeto indexado por nombre
const indexado = usuarios.reduce((acc, elem) => ({
    ...acc,
    [elem.nombre]: elem
}), {});

console.log('Usuarios indexados por nombre:', indexado);
console.log('Array original:', numeros);