// Composición vs Herencia
/*
    Composición:
    Se basa en crear objetos complejos a partir de piezas pequeñas que
    representan comportamientos. En vez de heredar, un objeto “compone”
    funcionalidad de otros módulos.

    Ejemplo: un objeto puede tener métodos como volar(), nadar(), caminar(),
    etc., agregándolos según lo necesite.

    Herencia:
    Es cuando un objeto “hereda” métodos y propiedades desde otro.
    Se usa cuando existe una relación del tipo “es un”.
*/

// --- Comportamientos reutilizables ---
const volar = {
    volar() {
        console.log("Estoy volando!");
    }
};

const nadar = {
    nadar() {
        console.log("Estoy nadando!");
    }
};

const caminar = {
    caminar() {
        console.log("Estoy caminando!");
    }
};

const banio = {
    banio() {
        console.log("Estoy yendo al baño!");
    }
};

// --- "Constructores" usando composición ---

// Vuela, nada, camina, va al baño
function Pato() {
    return Object.assign({}, volar, nadar, caminar, banio);
}

// Nada, camina, va al baño
function Perro() {
    return Object.assign({}, nadar, caminar, banio);
}

// Nada, camina, va al baño
function Pez() {
    return Object.assign({}, nadar, banio); // Pez no camina
}

// Vuela pero no nada, no camina, no va al baño
function Avion() {
    return Object.assign({}, volar);
}

// --- Ejemplos de uso ---
console.log("=== PATO ===");
let pato = Pato();
pato.volar();
pato.nadar();
pato.caminar();
pato.banio();

console.log("\n=== PERRO ===");
let perro = Perro();
perro.nadar();
perro.caminar();
perro.banio();

console.log("\n=== PEZ ===");
let pez = Pez();
pez.nadar();
pez.banio();

console.log("\n=== AVIÓN ===");
let avion = Avion();
avion.volar();