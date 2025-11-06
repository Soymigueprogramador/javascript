// Caracteres de escape
/**
 * Los caracteres de escape son:
 *   \n → Nueva línea
 *   \t → Tabulación
 *   \' → Comilla simple
 *   \" → Comilla doble
 *   \\ → Barra invertida (backslash)
 */

const saludo = "Hola \\desde\n JavaScript\t \":D";

console.log(saludo);

// Formas de escribir strings
/*
    Si tenemos un string con comillas simples ('') y dentro usamos otra comilla simple,
    JavaScript interpreta que estamos cerrando el string, lo cual genera un error.
    Lo mismo ocurre si usamos comillas dobles ("") y dentro ponemos otra comilla doble.

    Para evitar el error, tenemos dos opciones:

    ✅ Opción 1: usar comillas diferentes
        const ejemplo1 = 'Hola "Mundo"';
        const ejemplo2 = "Hola 'Mundo'";

    ✅ Opción 2: usar caracteres de escape
        const ejemplo3 = 'Hola \'Mundo\'';
        const ejemplo4 = "Hola \"Mundo\"";
*/