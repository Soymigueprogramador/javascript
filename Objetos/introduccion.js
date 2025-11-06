// Ejemplo:

let usuario = {
    name: 'Miguel',
    subName: 'Salazar',
    edad: 33,
    direccion: {
        calle: 'Pepe',
        altura: 3,
    },
    saludar: function () {
        console.log(` Hola a todos soy ${this.tname} ${this.subName} vivo en ${this.direccion} `);
    }
};

console.log(usuario);

// Esto es: Programacion Orientada a Objetos (POO)