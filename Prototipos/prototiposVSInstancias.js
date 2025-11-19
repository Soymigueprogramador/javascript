// Prototipos vs instancias
/*
    Prototipos:
        - Son objetos especiales que contienen métodos y propiedades
          que las instancias creadas a partir de una función constructora
          pueden usar.
        - Permiten ahorrar memoria porque todos los objetos comparten
          los mismos métodos.

    Instancias:
        - Son los objetos creados a partir de una función constructora.
        - Cada instancia tiene sus propias propiedades internas,
          pero comparte los métodos definidos en el prototipo.
*/

// Ejemplo en código
function User() {
    // Propiedad propia de cada instancia
    this.name = 'Miguel';

    // Método propio de cada instancia (no recomendado si se repite)
    this.logger = function () {
        console.log('Usuario logueado');
    };
}

// Métodos agregados al prototipo (se comparten entre todas las instancias)
User.prototype.login = function () {
    console.log('Iniciando sesión!!', this.name);
    this.logger();
};

User.prototype.toString = function () {
    console.log('Usuario:', this.name);
};

const user1 = new User();
const user2 = new User();

console.log(user1);              // Muestra la instancia con sus propiedades propias
console.log(User.prototype);     // Muestra el prototipo compartido