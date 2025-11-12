// Arguments
/*
    La palabra reservada "arguments" nos retorna un objeto similar a un array
    que contiene todos los valores pasados a la función,
    aunque no se hayan definido como parámetros.

    🔹 Importante:
    - "arguments" solo existe en funciones normales (no en funciones flecha).
    - No es un arreglo real, pero se puede convertir a uno con Array.from() o el operador spread.
*/

// Ejemplo en código
function suma(a, b) {
    console.log(arguments); // Muestra todos los argumentos recibidos

    // Forma clásica de sumar todos los argumentos
    let total = 0;
    for (let valor of arguments) {
        total += valor;
    }
    console.log("Suma clásica:", total);

    // Forma moderna (con reduce)
    // Convertimos arguments a array y luego sumamos sus valores
    return Array.from(arguments).reduce((acc, el) => acc + el, 0);
}

// Llamamos a la función con varios argumentos
console.log("Resultado final:", suma(1, 2, 3, 4, 5));

// ⚠️ Nota: si pasas solo un argumento, reduce intentará sumar un solo valor y devolverá ese número.
// Ejemplo: suma(5) → retorna 5