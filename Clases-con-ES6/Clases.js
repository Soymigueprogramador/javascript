// Clases

// Ejemplo en código con función constructora
function User(name) {
    this.name = name;
    this.instancia = function () {

    };
}

User.prototype.login = function () {
    console.log('Hola mundo');
};

// Clases en JS
/**
 * Para trabajar con las clases hacemos esto:
 *  - Usamos la palabra reservada class
 *  - Le asignamos un nombre: class Nombre {}
 *  - Dentro va un constructor: class Nombre { constructor() {} }
 *  - En el constructor van los parámetros
 */

class Users {
    constructor(name) {
        this.name = name;
        // Si creamos un método así, se agrega a la instancia (objeto)
        this.instancia = function () {

        };
    }

    // Este método se agrega al prototype de la clase
    login() {
        console.log('Hola mundo');
    }
}

const u = new Users('Miguel');
