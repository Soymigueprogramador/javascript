// Metodos estaticos
/*
    Los metodos estaticos son metodos que se utilizar para rechazar o resolver promesas de forma
    pragmatica.
*/
// Ejemplo en codigo
let promesa1 = new Promise((resolve, reject) => {
    resolve(5);
});

let promesa2 = new Promise((resolve, reject) => {
    resolve(25);
});

promesa1
    .then((valor) => {
        if (valor > 10) {
            return promesa2;
        }

        // Rechazamos una promesa y devolvemos una nueva instancia de inmediato.
        //return Promise.reject('Valor menor a 10'); // Devuelve una nueva promesa rechazada.
        return Promise.resolve(555); // Devuelve una nueva promesa resuelta.

    })
    .then((valor2) => {
        console.log("Valor de la segunda promesa:", valor2);
        return valor2
    })
    .catch((error) => {
        console.log("El error es:", error.message);
    }).finally(() => {
    console.log("Proceso finalizado");
});
