// Catch y finally

let promesa1 = new Promise((resolve, reject) => {
    resolve(12);
});

let promesa2 = new Promise((resolve, reject) => {
    resolve(25);
});

// catch
// El metodo catch es se ejecuta unicamente si una de las promesas llega a fallar.
// Su sintaxys es:
/**
    * Usamos la palabra reservada de catch(() >= {})
    * Dentro del metodo catch dejamos un mensaje que se mostrara si la promesa falla.
 */

// finally
// El metodo finally es un metodo que se va a ejecutar siempre sin importar el resultado de las promesas.
// Sy sintaxys es:
/**
    * Usamos la palabra reservada de finally()
    * Dentro del metodo dejamos un mensaje
 */

// Ejemplo en codigo
promesa1
    .then((valor) => {
        if (valor < 10) {
            return promesa2;
        } else {
            // Forzamos un error para que se ejecute el catch
            throw new Error("El valor es menor o igual a 10");
        }
    })
    .then((valor2) => {
        console.log("Valor de la segunda promesa:", valor2);
    })
    .catch((error) => {
        console.log("El error es:", error.message);
    }).finally(() => {
        console.log('Promesa terminada');
    });