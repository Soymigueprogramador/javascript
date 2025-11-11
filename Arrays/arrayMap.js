// Array map
/*
    El método map nos permite crear un array nuevo
    a partir de un array que ya existe.
*/

// Ejemplo en código
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

/**
 * Para trabajar con el método map:
 * - Creamos una variable con el nombre de la acción.
 * - Le asignamos el método map → nombreArray.map()
 * - Recibe tres parámetros → nombreArray.map(elemento, indice, array)
 *     - elemento → el valor actual del array
 *     - indice → la posición en el array
 *     - array → el array que se está iterando
 */

// Listando los usuarios
const listaNombres = usuarios.map(u => u.nombre); // Nuevo array de nombres
const listaEdades = usuarios.map(u => u.edad); // Nuevo array de edades

// Creando elementos de HTML
const listaNombresHTML = usuarios.map(u => `<li>${u.nombre}</li>`);
const listaEdadesHTML = usuarios.map(u => `<li>${u.edad}</li>`);
const html = `<ol>${listaNombresHTML.join('')}</ol>`;

// Creando un nuevo array con usuarios mayores de cierta edad
const mayores = usuarios.map(usuario => {
  return {
    ...usuario,
    mayor: usuario.edad > 28
  };
});

// Encadenando métodos (filter + map)
const combinados = usuarios
  .filter(u => u.edad > 28) // 🔹 Corregido: antes decía 'usuarios > 28'
  .map(u => `<li>${u.nombre}</li>`); // 🔹 Mejor usar <li> para listas

// Mostrando resultados
console.log('Lista con los nombres de los usuarios:', listaNombres);
console.log(listaNombresHTML);
console.log('Lista con las edades de los usuarios:', listaEdades);
console.log(listaEdadesHTML);
console.log('HTML generado:', html);
console.log('Usuarios con propiedad "mayor":', mayores);
console.log('Usuarios mayores de 28 (HTML):', combinados);
console.log('Array original:', usuarios);