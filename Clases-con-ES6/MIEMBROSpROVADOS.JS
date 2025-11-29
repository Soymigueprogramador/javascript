// Miembros privados
/*
    En algunos casos vamos a querer acceder a variables o métodos privados.
    Si las variables o los métodos son privados solo se puede acceder a ellos desde la clase.
*/

// Ejemplo en código
class User {
    // Inicializamos una variable privada
    #name;

    constructor(name) {
        // Accedemos a la variable privada
        this.#name = name;
    }

    // Método para acceder al valor de la variable privada
    getName() {
        return this.#name;
        // Esta línea nunca se iba a ejecutar porque está después del return
        // return this.#loger();
    }

    // Método privado
    #loger() {
        console.log('Método privado ejecutado');
    }
}

const u = new User('Miguel');
console.log(u.getName());  // Muestra "Miguel"