// Funcion
/*
    Podemos utilizar esto para extender objetos y funciones
*/

// Codigo de ejemplo
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('Dibujando')
    }
};

// Metodos de estas funciones
/**
    * Usamos el nombre de la funcion. el nombre del metodo
 */

let punto = { z: 7 }; // Creamos una variable con un objeto como valor
Punto.call(punto, 1, 3); // Le pasamos la variable y los argumentos restantes
Punto.apply(punto, [1, 3]); // Funciona igual que call()
console.log(punto);

// Este metodo no se debe usar.
/*
    const Point = new Function('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('Dibujando');
    }
`);


const p = new Point(1, 3);
console.log(p)
*/