// Promesas
/*

Las promesas representan el estado de una petición. Este estado puede ser:
1- Pendiente  = pending
2- Rechazada  = rejected
3- Completada = fulfilled

Las promesas se utilizan para:
1- Hacer peticiones a una base de datos
2- Hacer peticiones a un servidor
3- Trabajar con WebWorkers cuando se necesita hacer un cálculo muy pesado
*/

// Ejemplo en código

// Creando una promesa:
/**
    * Creamos una variable que será una nueva instancia de Promise();
    * Promise recibe una función con 2 argumentos:
        * resolve → se ejecuta cuando la operación sale bien
        * reject  → se ejecuta cuando la operación falla
    * Dentro del callback podemos ejecutar resolve() o reject()
 */
let promesa = new Promise((resolve, reject) => {
    // resolve(42); // Se completó ni bien se ejecutó

    setTimeout(() => resolve('Promesa completada'), 10000);
    // Se completa después de 10 segundos

    // setTimeout(() => reject('Se rechazó por errores'), 10000);
    // Se rechaza después de 10 segundos
});

console.log(promesa);

// Método then() para el manejo de las promesas
/**
    * Llamamos a la variable de la promesa
    * then() recibe 2 argumentos:
        * onFulfilled → se ejecuta cuando la promesa se resuelve exitosamente
        * onRejected  → se ejecuta cuando la promesa es rechazada
 */
promesa.then(
    valor => console.log(valor),
    error => console.log('Error:', error)
);