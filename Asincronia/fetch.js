// Fetch
/**
 * Pasos para trabajar con fetch:
 * 1. Guardamos la URL de la API en una constante.
 * 2. Usamos fetch() pasando la URL.
 * 3. Convertimos la respuesta a JSON.
 * 4. Usamos los datos.
 * 5. Manejamos errores.
 */

// URL de la API
const api = 'https://jsonplaceholder.typicode.com/users';

// --------------------
// Con fetch + then
// --------------------

fetch(api)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log('Algo salió mal:', error);
    })
    .finally(() => {
        console.log('La API terminó de traer los datos');
    });

// --------------------
// Con async / await
// --------------------
/**
 * Creamos una fat arrow function con la palabra reservada async
 * Encerramos todo en un try / catch para manejar errores
 * Llamamos a la API con fetch
 * Convertimos la respuesta a JSON
 * Mostramos los datos por consola
 */

const mostrarDatos = async () => {
    try {
        const res = await fetch(api);

        if (!res.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await res.json();
        console.log(data);

    } catch (error) {
        console.log('Algo salió mal:', error);
    }
};

mostrarDatos();