// String

// Ejemplo en codigo
const saludo = 'Hola Mundo'; // String en una variable

//const despedida = new String("Chau mundo"); // String en un objeto

console.log(typeof saludo); // Tipo de dato string
console.log(typeof despedida); // Toma al string como un objeto

/*
    Esto pasa porque cuando creamos un string con una funcion constructora
    "const despedida = new String("Chau mundo");" lo que hace JavaScript es embolver al string
    como si fuera un objeto pero en realidad no es un objeto
*/

// propiedades de un string
console.log(saludo.length); // Nos devuelve el largo del string (La cantidad de letras que este tiene)

// Metodos de un string
console.log(saludo.indexOf('Mu')); // Nos devuelve el indice de un string que esta dentro de otro string
// Los string parten en base 0
console.log(saludo.includes("Mundo"));  // Nos indica si un texto esta dentro de otro texto
// Devuelve true o false y solo se usa para validar si esxiste o no
console.log(saludo.replace("Mundo", "mundo de mierda"));
// Usamos el metodo de replace() para reemplazar texto, su argumentos son el texto actual y el texto de reemplazo
let nuevoSaludo = saludo.replace("Mundo", "mundo de mierda"); // Para que se guarde el nuevo string
console.log(nuevoSaludo);
console.log(saludo.toLowerCase()); // Toma el texto y lo pasa a minuscula
console.log(saludo.toLocaleUpperCase()); // Toma el texto y lo pasa a matuscula
console.log(saludo.substring(0, 4)); // Nos devuelve una parte del texto segundo el indice que le indiquemos
// Para ello necesite 2 argumentos, el primero es el indice de inicio y el segundo es el indice hasta donde queremos llegar

// Nuevo mensaje
let nuevoMensaje = " Hola perry!! ";

console.log(nuevoMensaje); // Quita los espacios a la izquierdfa y a la derecha
console.log(nuevoMensaje.trim()); // Quita los espacios a la izquierda y a la derecha
console.log(nuevoMensaje.trimEnd()); // Quita los espacios a la derecha
console.log(nuevoMensaje.trimStart()); // Quita los espacios a la izquierda