// Short Circuit (Cortocircuito)
/*
    El "short circuit" (cortocircuito) es un comportamiento de los operadores lógicos
    en el que, si ya se conoce el resultado de la expresión al evaluar la primera
    condición, JavaScript no evalúa la segunda.

    Esto se usa mucho para asignar valores por defecto o ejecutar código condicional
    de forma más corta.
*/

// Con el operador OR (||):
// Devuelve el primer valor verdadero que encuentre.
// Si todos son falsos, devuelve el último.

let nombre = "" || "Usuario invitado";
// Como "" es un valor falso, se ejecuta el segundo → "Usuario invitado"

console.log(nombre); // Usuario invitado

let edad = 0 || 18;
// Como 0 es falso, devuelve 18
console.log(edad); // 18

let pais = "Argentina" || "Desconocido";
// Como "Argentina" es verdadero, devuelve ese valor
console.log(pais); // Argentina

// Con el operador AND (&&):
// Devuelve el primer valor falso que encuentre.
// Si todos son verdaderos, devuelve el último.

let esMayor = true && "Puede ingresar";
// Como true es verdadero, devuelve el segundo valor
console.log(esMayor); // Puede ingresar

let permiso = false && "Acceso permitido";
// Como false es falso, no evalúa lo segundo
console.log(permiso); // false

// Ejemplo práctico combinando ambos:
let usuario = null;
let nombreUsuario = usuario && usuario.nombre || "Invitado";
// usuario es null → se corta el && y no evalúa usuario.nombre
// Luego con || se asigna "Invitado"
console.log(nombreUsuario); // Invitado
