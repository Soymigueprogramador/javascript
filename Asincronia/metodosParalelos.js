// Metodos paralelos
/*
    All:
    Este metodo cumple todas las promesas en paralelo y es entonces cuando se ejecuta el .then().
    En caso de que alguna promesa sea rechazada automaticamente se ejecuta el .catch().

    Race:
    Es metodo evalua la primer promesa y si es resuelta ejecuta el ,then().
    Pero si la primer promesa es rechazada no evalua las siguientes porque automaticamente
    ejecuta el .catch().

    Any:
    Este metodo evalual la primer promesa y si esta es rechazada va a evaluar la siguiente sin
    importar si es rechazada o no.

    allSettled:
    Este metodo siempre envuelve las promesas en un nuevo objeto llamado status y este siempre
    se ejecutara en el .then().
    En caso de ser completada la promesa nos devolvera la propiedad de value
    En caso de ser completada la promesa nos devolvera la propiedad de reject
*/

// Ejemplo en codigo
let p1 = Promise.resolve(3); // El metodo any salto a la siguiente
let p2 = Promise.reject(42); // El metodo any salto a la siguiente
let p3 = new Promise(( resolve, reject ) => { // Ejecuto el .then()
    setTimeout(resolve, 1000, 'FOO')
});

// 1 Resolvemos todas las promesas
/**
    * Resolviendo todas las promesas al mismo tiempo:
    * Usamos promise.all([todasLasPromesas]);
    * Esto nos devuelve un array con todas las promesas.
 */
/*
    Promise.all([p1, p2, p3])
    .then(valores => {
        console.log('All', valores);
    })
    .catch( e => {
        console.log('Algo salio mal', e)
    })
*/


// 2 Resolviendo primero la primer promesa y despues las demas
/**
    * Resolviendo primero la primer promesa y despues las demas:
    * Usamos promise.race([todasLasPromesas]);
    * Esto nos devuelve un array con todas las promesas.
 */
/*
    Promise.race([p1, p2, p3])
    .then(valores => {
        console.log('Race', valores);
    })
    .catch( e => {
        console.log('Algo salio mal', e)
    })
*/

// 3 Si la primera es rechazada pasa a evaluar la siguiente
/**
    * Resolviendo todas las promesas al mismo tiempo:
    * Usamos promise.all([todasLasPromesas]);
    * Esto nos devuelve un array con todas las promesas.
 */
/*
    Promise.any([p1, p2, p3])
    .then(valores => {
        console.log('Race', valores);
    })
    .catch( e => {
        console.log('Algo salio mal', e)
    })
*/

// 4
Promise.allSettled([p1, p2, p3])
    .then(valores => {
        console.log('Race', valores);
    })
    .catch( e => {
        console.log('Algo salio mal', e)
    })