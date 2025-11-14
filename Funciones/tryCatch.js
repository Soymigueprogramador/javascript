// Try y catch
/*
    try y catch:
    Se usan para manejar las excepciones y los errores
    de una forma más limpia y prolija.
*/

// Ejemplo en código
function sumarTodo(arr) {
    // Validamos que sea un array
    if (!Array.isArray(arr)) {
        throw new Error('Che, mirá que esto no es un array eh!!');
    }

    return arr.reduce((acc, el) => {
        // Validamos que cada elemento sea un número
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`Che, mirá que '${el}' no es el dato que necesitamos`);
        }
        return acc + el;
    }, 0); // valor inicial recomendado
}

try {
    // console.log(sumarTodo([1, 2, 3, 4, 5]));
    console.log(sumarTodo([1, 2, NaN, 'Hola']));
} catch (e) {
    console.log("Ocurrió un error:", e.message);
}

console.log('Hola desde JavaScript');