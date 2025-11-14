// Contexto de this

// Ejemplo en codigo
const user = {
    name: 'Miguel',
    cuidadanias: ['Argentina', 'Turquia', 'Canada' ],
    mostrarCuidadanias() {
        //console.log(this.cuidadanias);
        // El .forEach no retorna nada por si mismo asi que si o si se debe crear una funcion.
        this.cuidadanias.forEach( (cuidadanias) => {
            console.log(this.name, cuidadanias);
        });
    }
};

user.mostrarCuidadanias();