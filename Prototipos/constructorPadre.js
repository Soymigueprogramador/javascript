// Constructor padre

function Entidad(entidad) {
    // Esto genera un string  aleatorio
    this.id = Math.random().toString('20');
    this.entidad = entidad;
};

function User() {
    /*
        El this que se encuentra en la funcion Entidad es el this del usuario.
        Pero el this que se encuentra dentro de Entidad es el mismo usuario.
    */
    Entidad.call(this, 'user');
    // Agregandole los atributos
    this.atributos = {
        name: 'Miguel',
        edad: 33,
        novia: false,
        email: 'soymigueprogramador@gmail.com',
    };
};

let u = new User();
console.log(u);