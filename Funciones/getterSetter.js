// Getter y Setter
/*
    Getter: permite obtener un valor calculado.
    Setter: permite modificar valores de forma controlada.
*/

// Ejemplo en código
const usuarios = {
    nombre: 'Miguel',
    apellido: 'Salazar',

    // Método getter
    get nombreCompleto() {
        return `Datos del usuario:
        ${this.nombre} ${this.apellido}`;
    },

    // Método setter
    set nombreCompleto(valor) {
        const [ nombre, apellido ] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

// Usamos el setter
usuarios.nombreCompleto = 'Celeste Gimenez';
usuarios.nombreCompleto = 'Miguel Salazar';

// Usamos el getter
console.log(usuarios.nombreCompleto);
console.log(usuarios.nombreCompleto);