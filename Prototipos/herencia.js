// Herencia
// Ejemplo completo sobre HERENCIA en JavaScript

// ---------------------------------------------
// 1) Herencia en Programación (explicado)
// ---------------------------------------------
/*
La herencia es un principio de la Programación Orientada a Objetos (POO)
que permite que una clase hija obtenga las propiedades y métodos de una
clase padre. Esto evita repetir código y permite extender funcionalidades.

Conceptos claves:
- Clase Padre (superclase): Define propiedades y métodos generales.
- Clase Hija (subclase): Hereda del padre y puede agregar o modificar métodos.
- extends → establece herencia.
- super() → llama al constructor de la clase padre.
- Polimorfismo → capacidad de sobrescribir métodos para cambiar comportamiento.
*/


// ---------------------------------------------
// 2) Ejemplo moderno con class (ES6)
// ---------------------------------------------

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log("Hace un sonido genérico.");
    }
}

class Perro extends Animal { // Hereda de Animal
    hacerSonido() { // Polimorfismo (sobrescritura)
        console.log("Guau!");
    }

    ladrar() {
        console.log("El perro ladra.");
    }
}

const firulais = new Perro("Firulais");
console.log(firulais.nombre); // Hereda propiedad del padre
firulais.hacerSonido(); // Método sobrescrito
firulais.ladrar(); // Método propio



// ---------------------------------------------
// 3) Ejemplo con super()
// ---------------------------------------------

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Estudiante extends Persona {
    constructor(nombre, curso) {
        super(nombre); // Llama al constructor de Persona
        this.curso = curso; // Propiedad nueva
    }
}

const estudiante = new Estudiante("Miguel", "JavaScript");
console.log(estudiante.nombre, estudiante.curso);



// ---------------------------------------------
// 4) Herencia clásica con prototipos (antes de ES6)
// ---------------------------------------------

function Vehiculo(marca) {
    this.marca = marca;
}

Vehiculo.prototype.encender = function () {
    console.log("El vehículo se encendió.");
};

function Auto(marca, modelo) {
    // Hereda propiedades de Vehiculo
    Vehiculo.call(this, marca);
    this.modelo = modelo;
}

// Herencia de métodos
Auto.prototype = Object.create(Vehiculo.prototype);

// Arreglar el constructor
Auto.prototype.constructor = Auto;

// Polimorfismo (sobrescritura de método)
Auto.prototype.encender = function () {
    console.log("El auto está en marcha.");
};

const auto1 = new Auto("Toyota", "Corolla");
console.log(auto1.marca, auto1.modelo);
auto1.encender();