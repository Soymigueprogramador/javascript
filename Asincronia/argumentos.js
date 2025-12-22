// Argumentos

// La forma correcta de pasarle argumentos a una promesa es:
/**
    * Creamos una fat arrow function = const name = () => {};
    * Le pasames los argumentos = const name = (argumentos) => {};
    * Llamamos a la promesa y le pasamos los parametros ) name(parametros);
 */

// Ejemplo en codigo
// Promesa 1
let prom1 = (user) => new Promise((res, rej) => {
    res(user + ', Mundo guanaco');
});

// Promesa 2
let prom2 = (user) => new Promise((res, rej) => {
    res(user);
});

// Resolucion de promesas en serie
prom2('Miguel')
    .then((user) => {
        return prom1(user); // IMPORTANTE: retornar la promesa
    })
    .then((dato) => {
        console.log(dato);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Terminaron las promesas');
    })