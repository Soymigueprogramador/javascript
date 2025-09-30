// ¿Que es una variable?
/*
    Una variable es un espacio en memoria donde guardamos informacion.
*/

// ¿Como definimos una variable?
/**
    * Para definir una variable hacemos esto:
    * Usamos la palabra reservada let
    * Indicamos el nombre de la variable
    * La igualamos =
    * Le asignamos un valor
    * Cerramos la linea con un ;
 */

// ¿Que reglas se deben seguir para crear variables.?
/**
    *Formas de iniciar una variable progibidas por el lenguaje:
        *No se puede iniciar una variable con un numero
        *No se puede iniciar una variable con palabras reservadas.

    *Convenciones de la industria para crear variables:
        *Debemos utilizar 3 convenciones:
            *UpperCamelCase: La primer letra de las variables comenzara con una mayuscula = IniciandoNuestroProyecto
            *calemCase: Ls primer letra del segundo nombre de la variable comenzara con mayuscula = nuevoProyecto
            *snake_case: Las palabras que forman el nombre de la variable estan separadas por un _ = primer_proyecto
 */

// Aclaraciones:
/**
    * VAR Y LET:
    * var es para variables globales (Se pueden uar en todo el proyecto) pero no es recomendable usarlas.
    * let es para variables que esten dentro de un bloque de codigo como una funcion pero igual se pueden usar en todo el prouecto.
    *
    * CONVENCIONES DE VARIABLES:
    * JavaScript es case sensitive es decir que si escribimos primerNombreUsuario no es lo mismo que si escribimos PrimerNombreUsuario,
    * en este caso entiende que ambas variables son diferentes por mas que tengan el mismo valor.
    *
    * NOMBRE DE VARIABLES CON SENTIDO:
    * Cuando tengamos que crear una variable debemos usar nombres que esten relacionadas con el valor.
 */

// Ejemplo en codigo:
let nombre = 'Miguel';
let primerNombreUsuario = 'Celeste';
let PrimerNombreUsuario = 'Celeste';
let Primer_Nombre_Usuario = 'Perro';

// Definimos una variable sin valor pero se lo asignamos despues.
let apellido; // Variable definida sin valor.
apellido = 'Salazar'; // Se llama a dicha variable y se le agrega un valor.
apellido = 'Olea'; // De esta forma tambien le podemos cambiar el valor de esa variable.

// Llamamos a la variable para ver su valor.
console.log(nombre);
console.log(apellido);
console.log(primerNombreUsuario);
console.log(PrimerNombreUsuario);
console.log(Primer_Nombre_Usuario);