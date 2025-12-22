// Abortar fetch

const controller = new AbortController(); // Creamos la constante
let { signal } = controller;              // Desestructuramos la propiedad de signal

async function getTodo() {
    const api = 'https://jsonplaceholder.typicode.com/users';
    try {
        const res  = await fetch(api, { signal }); // Le pasamos el objeto de signal
        const data = await res.json();
        console.log(data);
    } catch(error) {
        console.log(` Error ${error} `);
    }
};
getTodo();
controller.abort(); // Llamando al metodo controller

// Forma para abortar un fetch
/**
    * Creamos una constante para new abortController
    * Desestructuramos la propiedad llamada signal
    * En el fetch le pasamos el objeto de signal
    * Despues del llamado a la funcion llamamos al metodo de controller.abort()
*/