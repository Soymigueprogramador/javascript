// Mixins

/*
    Con los mixins podemos agregarle varias funcionalidades a un mismo metodo.
*/

const Entidad = {
    save() {
        console.log('Guardado en entidad!!');
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

// Ejemplo de uso con mixins
/**
    * Debemos llamar al object.assign()
    * Le indicamos el prototype que nos interesa object.assign(clase.prototype)
    * Le pasamos el nombre de las funcionalidades que le agregamos object.assign(clase.prototype, funcionalidades
    * )
 */
// Ejemplo en codigo
Object.setPrototypeOf(User.prototype, Entidad); // Esto es una que se agregue al prototype
Object.assign(User.prototype, Entidad);

const u = new User('Miguel');
u.save();
console.log(u);