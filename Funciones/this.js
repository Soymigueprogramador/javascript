// This
/*
    La palabra reservada "this" hace referencia al objeto que está
    utilizando el código en ese momento.

    ▸ Si "this" está dentro de un objeto ⇒ hace referencia a ese objeto.

    ▸ Si "this" se usa dentro de una función tradicional (no flecha)
      y fuera de un objeto ⇒ hace referencia al objeto "window"
      (en navegadores).

    ▸ En Node.js, en ese mismo caso ⇒ "this" hace referencia al objeto "global".

    ▸ Si usamos la palabra reservada "new" ⇒ "this" hace referencia
      al nuevo objeto que será creado por ese constructor.

*/

// Ejemplo en código

// En caso de un objeto:
const persona = {
    // Este objeto tiene:
    /**
        * Un nombre
        * Una accion
    */
   nombre: 'Pepe',
   login() {
    console.log(this);
   }
};

// Agregando un nuevo metodo
persona.cerrar = function cerrar() {
    console.log(this);
};

persona.login();
persona.cerrar();

console.log('-----------------------------------------------------------------------------------');

// En el caso de una funcion:
function log() {
    // Esto nos muestra al objeto de window
    console.log(this);
};
log();

function log2(MENSAJE) {
    // Esto es una funcion constructura y al usar new hace referencia al nuevo objeto que se crea.
    this.MENSAJE = MENSAJE;
    console.log(this);
};
// Cuando usamos new:
/**
    * Se crea un objeto literal
    * Se vincula este objeto a this
    * Se vincula el prototipo (Explicacion en la carpeta de prototipos)
    * Si no retorna nada entonces retorna this
 */
const l = new log2('Hola mundo');