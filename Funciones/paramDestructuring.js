// Param Destructuring
/*
    Con la desestructuración podemos extraer una propiedad de un array o de un objeto
    y crear una nueva variable con ese mismo nombre.
*/

// Ejemplo en código
function webServer({ url }) {
    /*
        En caso de tener un objeto con muchas propiedades, pero que solo nos interese `url`,
        podemos usar la desestructuración directamente en los parámetros de la función.
        De esta manera, el objeto pasa solo la propiedad necesaria y se crea una constante con ese nombre.
    */

    // Ejemplo equivalente si lo hiciéramos dentro de la función:
    // const { url } = config;

    // Si fuera un array, se puede hacer algo similar:
    // const [url] = config;

    return url;
}

// Ejemplo de uso
console.log(webServer({ url: 'https://migue-dev.com.ar' }));