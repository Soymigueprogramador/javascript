// Rest
/*
    El operador rest (...) nos permite agrupar en un array
    todos los argumentos restantes que no tienen un parámetro asignado.

    🔹 Reglas:
    1) Devuelve un array con los valores “restantes” pasados a la función.
    2) Siempre debe ser el último parámetro en la lista de parámetros.
    3) También puede usarse en funciones flecha (arrow functions).
*/

// Ejemplo en código
function suma(a, b, ...rest) {
    console.log("Valores restantes:", rest);

    // Podemos sumar todos los valores usando reduce
    const total = [a, b, ...rest].reduce((acc, el) => acc + el, 0);
    console.log("Suma total:", total);
}

suma(1, 2, 3, 4);

// Ejemplo de la vida real con una función flecha y el operador rest
const mensajesError = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
};

// Llamamos con varios mensajes
mensajesError("Servidor:", "Error 1", "Petición aceptada", "Socket activo");

// También se puede usar con el operador spread (...)
const mensajes = ["Error 1", "Petición aceptada", "Socket activo"];
mensajesError("Cliente móvil:", ...mensajes, "Otro gato!!");