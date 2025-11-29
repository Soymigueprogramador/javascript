// Method override

class Entidad {
    constructor(id) {
        this.id = id;
        this.create_at = new Date();
    }

    save() {
        console.log('Guardado en entidad!!');
    }
}

class User extends Entidad {
    constructor(name) {
        super(1);
        this.name = name;
    }

    save() {
        super.save();
        /*
            Si un metodo de la clase padre tiene logica que queremos
            reutilizar podemos hacer esto:
            - Usamos la palabra reservada super = super.
            - Despues del punto escribimos el nombre del metodo = super.metodo()
        */

        console.log('Guardado en user!!');
    }
}

/*
    Si tenemos en metodo save en la clase entidad y creamos otro metodo save
    en la clase se user este ultimo anula al metodo anterior, a esto se lo conoce
    como "METHOD OVERRIDE"
*/

const u = new User('Miguel');
u.save();
console.log(u);