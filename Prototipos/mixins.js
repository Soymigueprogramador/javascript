// Mixins
/*
    Los mixins permiten agregar funcionalidades a varios objetos
    sin necesidad de usar herencia.
*/

// Función para asignar mixins a un constructor
function mixins(Ctr, ...props) {
    Object.assign(Ctr.prototype, ...props);
}

// Ejemplo en código
function Perro() {
    this.name = 'Pato';
}

function Pez() {}

function Avion() {}

function Pato() {}


// Mixins (objetos con métodos reutilizables)
let vuela = {
    vuela() {
        console.log('Puedo volar!');
    }
};

let nada = {
    nada() {
        console.log('Puedo nadar!!');
    }
};

let banio = {
    banio() {
        console.log('Puedo ir al baño!!');
    }
};

let caminar = {
    caminar() {
        console.log('Puedo caminar!!');
    }
};


// Asignando mixins a funciones constructoras
// Avión puede volar
mixins(Avion, vuela);

console.log(
    Avion.prototype,
    new Avion()
);

// Pez puede nadar y también ir al baño
mixins(Pez, nada, banio);

console.log(
    Pez.prototype,
    new Pez()
);

// Perro puede caminar, ir al baño y nadar
mixins(Perro, caminar, banio, nada);

console.log(
    Perro.prototype,
    new Perro()
);