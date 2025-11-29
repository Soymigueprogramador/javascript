// Herencia
/**
 * Para empezar a usar herencia en las clases hacemos esto:
    * Usamos la palabra reservada extend en la clase padre
    * Despues de usar extend le indicamos el nombre de la clase a la que queremos heredarle
    * Llamamos al constructor padre con la palabra reservada super()
    * Luego dentro de los parentesis de super le indicamos los argumentos necesarios
    *
 */

// Ejemplo en codigo
class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }

    save() {
        console.log(`Entidad con ID ${this.id} guardada.`);
    }
}

class User extends Entidad {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
}

const u = new User(1, 'Miguel');

console.log(u);
u.save();