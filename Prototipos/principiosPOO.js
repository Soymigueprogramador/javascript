// Proncipios POO
/**
 * Los 4 principios de POO son:
    * Encapsulacion
    * Abstracion
    * Herencia
    * Polimorfismo
 */

/*
    Encapsulacion:
    Se basa en agrupar funciones y metodos que tengan centido agrupar.

    Abstraccion:
    Nos permite esconder los detallers de implementacion.

    Herencia:
    Si tenemos un objeto a y un objeto b podemos pasarle todas las propiedades que queremos
    al objeto que necesitemos.

    Polimorfismo:
    Nos permite que un metodo se comporte de diferente manera dependiendo del objeto que lo este
*/

// Encapsulacion:
const user = {
    nombre: 'Miguel',
    apellido: 'Salazar',
    getNombreCompleto() {
        return [ this.nombre, this.apellido ].join(' ');
    }
};

// Si queremos acceder a una propiedad o metodo lo hacemos atravez del nombre del objeto.
console.log(user.getNombreCompleto());

console.log('***********************************************************');

// Abstraccion:
class User {
    constructor() {
        this.password = '';
    }

    save() {
        // Simulamos un guardado (la implementación real está "oculta")
        console.log('Usuario guardado correctamente.');
    }
}
/*
    Esto ocurre cuando no conocemos la implementacion pero podemos acceder a las
    propiedades y metodos y asi sabemos que hace cada cosa.
*/
const user1 = new User(); // Estamos creando un usuario
user1.password = 'megamente'; // Estamos actualizando una propiedad
user1.save(); // Estamos Guardando la pripiedad y el valor.

console.log(user1)

console.log('***********************************************************');

// Herencia:
// Para este ejemplo vamos a crear una aplicacion de despachos para un restaurante.
/**
 * Para ello tenemos estas variables:
    * Usuarios
    * Despachos
    * Repartidores
 */
/*
    En la herencia tomamos las variables o funciones que estan en una funcion constructora mayor y
    se las vamos pasando a las otras variables segun sea necesario.
*/

// Polimorfismo:
function validadEntidad(entidad) {
    // Valida los datos para la base de datos.

    entidad.save(); 
};