// Métodos estáticos
/*
    En algunos casos no tiene sentido crear métodos dentro de la instancia de una clase.
    Para eso existen los métodos estáticos, que se llaman directamente desde la clase.
*/

// Ejemplo en código
class Restaurante {
    // Propiedad estática
    static cantidad = 12;

    constructor(name) {
        this.name = name;
    }

    getTablaHorarios() {
        console.log('Horarios del restaurante');
    }

    // Método estático (se llama desde la clase, no desde un objeto)
    static getRestaurant(id) {
        return new Restaurante('Comedor');
    }
}

const r = Restaurante.getRestaurant(12);
console.log(r);