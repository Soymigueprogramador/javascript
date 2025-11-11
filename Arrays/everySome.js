// Every y Some
/*
    En algunos momentos vamos a tener que evaluar si nuestro array cumple con
    ciertas condiciones.
*/

// Array de usuarios
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

// Método every()
/*
    Devuelve true solo si TODOS los elementos del array cumplen la condición.
*/
let todosActivos = usuarios.every(u => u.activo);

console.log("¿Todos los usuarios están activos?:", todosActivos);
console.log('******************************************************************************************');

// Método some()
/*
    Devuelve true si ALGUNO de los elementos cumple la condición.
*/
let algunoActivo = usuarios.some(u => u.activo);

console.log("¿Algún usuario está activo?:", algunoActivo);
console.log('******************************************************************************************');

console.log("Listado de usuarios:", usuarios);
