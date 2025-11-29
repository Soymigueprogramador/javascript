// Getter y setter

// Ejemplo en codigo
class Restaurante {
    #timetable; // Guarda el valor del getter y setter

    constructor(name) {
        this.name = name;
    }
    // Agregando getter y setter a nuestra clase.
    /**
        * Usamos la palabra reservada get o set segun que lo necesitemos
        * Le asignamos un nombre
        * Necesitamos un lugar para guardar estos valores, lo mejor es una propiedad privada en la clase
     */

    // get: Es para obtener un valor
    get timetable() {
        return this.#timetable;
    }

    // set: Es para podamos asignar un valor.
    set timetable(value) {
        // Validamos la fecha
        const data = new Date(value);
        const time = data.getTime();

        if (Number.isNaN(time)) {
            throw new Error('Fecha inválida');
        }

        this.#timetable = data;
    }
}

const r = new Restaurante('Comamos');

r.timetable = '2025-01-01T12:00:00';

console.log(r.timetable);
console.log(r);