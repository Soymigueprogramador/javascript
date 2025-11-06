// Ejercicio 19
/*
    19
    El costo de un desarrollo de un proyecto de software se calcula en base al lenguaje que se necesita.
*/

const lenguajeIngresado = prompt('¿Con qué lenguaje querés que hagamos el proyecto?');

// Convertimos el texto a minúsculas para ignorar mayúsculas o minúsculas
const lenguaje = lenguajeIngresado.toLowerCase();

let costo;

switch (lenguaje) {
    case 'javascript':
        costo = 1500;
        break;

    case 'java':
        costo = 1800;
        break;

    case 'python':
        costo = 2500;
        break;

    case 'c#':
        costo = 2500;
        break;

    case 'c++':
        costo = 500;
        break;

    default:
        console.log(`No manejamos este lenguaje: ${lenguajeIngresado}`);
        costo = null; 
        break;
}

if (costo !== null) {
    console.log(`Vamos a usar el lenguaje ${lenguajeIngresado}, por eso el costo es de: $${costo}`);
}
