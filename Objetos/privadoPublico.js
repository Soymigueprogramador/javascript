// Privado vs Público
/*
    Todo lo que definamos con la palabra reservada "this" será un método o propiedad pública,
    pero si definimos una variable dentro de la función sin "this", quedará como privada y no
    podrá accederse desde afuera. Esto se hace para evitar modificaciones.
*/

// Ejemplo en código
function Usuario() {
    // Propiedad privada
    let id = 1;

    // Propiedad pública
    this.name = 'Miguel';

    // Método público
    this.loger = function() {
        console.log('Logueado...!');
    }

    // Método público que usa otro método público
    this.guardar = function() {
        this.loger();
        console.log('Guardado...!');
    }

    // Método privado (no accesible desde fuera)
    const mostrarId = function() {
        console.log(`ID: ${id}`);
    }

    // Método público que puede usar el método privado
    this.verId = function() {
        mostrarId();
    }
};

// Crear instancia
const usuario = new Usuario();

// Llamadas válidas (métodos públicos)
usuario.loger();
usuario.guardar();
usuario.verId();

// Llamadas inválidas (privadas)
// console.log(usuario.id);        // ❌ undefined
// usuario.mostrarId();            // ❌ Error: no es una función