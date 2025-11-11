// Agregar elementos
/**
 * Para agregar un elemento al array hacemos esto:
    * Creamos un array ya sea con let o const
    * Llamamos al array.el metodo
 */

// Ejemplo en codigo
const letras = [ 'a', 'b',  ];

// Metodos de arrays
letras.push('c', 'd'); // Agrega elementos al final de un array
letras.unshift(0, 1); // Agrega elementos al inicio de un array
letras.splice(3, 0, 11); // Agrega un elemento en un lugar determinado del array
/**
 * El metodo splice(indice, elementoEliminar, elementoAgregar) lleva 3 argumentos
    * El indice del array donde vamos a agregar el elemento
    * La cantidad de elementos a eliminar (Con este metodo tambien podemos eliminar elementos)
    * El elemento que vamos a agregar
 */

console.log(letras);