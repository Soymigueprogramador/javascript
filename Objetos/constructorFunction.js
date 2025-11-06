// Constructor function

// Ejemplo en codigo
function CrearUsuario() {
    this.id = 1;
    this.recuperarCuenta = function() {
        console.log('Recuperando cuenta...');
    }
};

// Sintaxys para crear un usuario
/**
    * Creamos una variable o constante
    * Le asignamos un nombre que este relacionado
    * Usamos la palabra reservada de new con el nombre de la funcion
    * Le indicamos los argumentos
 */

let usuario1 = new CrearUsuario();

console.log(usuario1);

// Al usar la palabra reservada new:
/**
    * Se crea un objeto literal del aire.
    * Se vincula el prototipo de la funcion con el objeto recien creado.
    * Las propiedades del nuevo objeto son asignadas a la palabra reservada this.
    * En caso de que la funcion constructora no retorne nada, automaticamente retorna this.
 */

// ACLARACIONES:
/**
    * En este caso se espera que el nombre de la funcion comience con una mayuscula (UpperCamelCase)
    * Para crear una propiedad siempre usamos la palabra reservada de this
    * En este caso a las funciones constructoras se les deja de llamar funciones y se les llama metodos
 */