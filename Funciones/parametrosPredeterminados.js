// Parámetros predeterminados
/*
    Los parámetros predeterminados son aquellos que se ejecutan en caso de que
    al llamar a la función no se le pasen argumentos.
*/

// Ejemplo en código

const config = {
    url: 'https://migue.com'
};

/**
 * Cuando queremos sacar un parámetro de un objeto y pasarlo a una función hacemos esto:
 *  - Creamos el objeto con las propiedades y valores necesarios.
 *  - En los parámetros de la función usamos la desestructuración de objetos = ({}).
 *  - Hacemos el llamado a la función y le pasamos el nombre del objeto.
 */

// Usando parámetros predeterminados y desestructuración
function configurarApi({ url = 'https://default.com', bucket = 'default-bucket', port = 8080 }) {
    return `${url}/${bucket}:${port}`;
}

// Ejemplo de uso
console.log(configurarApi({ url: 'https://migue.com', bucket: '144', port: 80 }));

// También se puede usar sin pasar todos los parámetros
console.log(configurarApi({ url: 'https://migue.com' }));