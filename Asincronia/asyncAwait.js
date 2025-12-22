// Async / Await

/*
    async:
    Se utiliza para declarar una función asíncrona.
    Siempre retorna una promesa.

    await:
    Se usa dentro de una función async.
    Detiene la ejecución hasta que la promesa se resuelve.
*/

const promesa1 = (param1) => new Promise((res, rej) => {
    const nombre = 'Miguel';
    res(nombre);
});

const promesa2 = (param2) => new Promise((res, rej) => {
    res(param2 + ', que calor!!');
});

// Función async que reemplaza el encadenamiento de .then()
const ejecutarPromesas = async () => {
    try {
        const a = await Promise.resolve('Primer valor');
        const b = await promesa1(a);
        const resultadoFinal = await promesa2(b);

        console.log(resultadoFinal);
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
};

ejecutarPromesas();