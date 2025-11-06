// Atajos de constructores en JavaScript

// Crear un objeto literal (forma más común)
let objeto = {};

// Otras formas de crear objetos con constructores:
/*
    new Array([])    → Crea un array vacío o con elementos
    new String('')   → Crea un objeto String (NO un string primitivo)
    new Number(5)    → Crea un objeto Number (NO un número primitivo)
    new Boolean(true)→ Crea un objeto Boolean (NO un valor booleano primitivo)
*/

// Ejemplos:
let objeto3 = new Array([]);     // []
let objeto4 = new String("");    // String vacío como objeto
let objeto5 = new String('');    // Igual que el anterior
let objeto6 = new Number(5);     // Objeto Number con valor 5
let objeto7 = new Boolean(true); // Objeto Boolean con valor true

// Nota: se recomienda usar los literales directamente:
// [], '', 5, true