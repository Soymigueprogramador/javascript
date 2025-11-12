// Fat arrow function
/*
    Las fat arrow function no cuentan con la variable de arguments asi como tampoco cuentan
    con la funcion super ni con el contecto de this por eso no se pueden usar en la
    Programacion Orientada a objetos (POO) en JavaScript.
    Las fat arrow function son versiones reducidas de las funciones normales y solo se deben usar
    para hacer calculos.
*/

const suma = (a, b) => {
    console.log(arguments);

    let total = 0;
    for (let valor of arguments) {
        total += valor;
    }
    console.log("Suma clásica:", total);

    return Array.from(arguments).reduce((acc, el) => acc + el, 0);
}

console.log("Resultado final:", suma(1, 2, 3, 4, 5));