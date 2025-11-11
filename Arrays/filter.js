// Filter
/*
    Con el metodo filter vamos a poder filtrar entre los arrays y eliminar objetos
    que no estemos necesitando.
*/

// Ejemplo en codigo
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

// Metodo filter()
/**
 * Para trabajar con el metodo filter hacemos esto
    * Creamos una variable y le asignamos el array
    * Llamamos al array con el metodo filter = nombreArray.filter()
    * Este metodo recibe una funcion = nombreArray.filter(())
    * Esta funcion recibe un valor = nombreArray.filter(())
    * Estos valores son:
    *   El elemento que estamos iterando
    *   El indice del elemento
    *   El array que estamos iterando
    * Despues de filtrar en el array va a crear un nuevo array con los elementos que cumplan la condicion
 */

// Filter() (El indice y el array no son necesarios)
let mayores = usuarios.filter(usuario => usuario.edad < 30); // Filtra por edad
let porNombre = usuarios.filter(usuario => usuario.nombre.startsWith('L')); // Filtra por inicial
let porId = usuarios.filter(usuario => usuario.id === 1); // Filtra por inicial

console.log('Estos son los usuarios mayores de edad', mayores);
console.log('Estos son los usuarios cuyo nombre empieza con M', porNombre);
console.log('Estos son los usuarios cuyo ID inicie con 1', porId);
console.log(usuarios);