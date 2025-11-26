// Method override
/*
    Cuando creamos dos métodos iguales con la finalidad de invalidar a uno
    de ellos se le llama method override.
*/

// Función correcta para obtener el prototipo
function getProto(obj) {
    return Object.getPrototypeOf(obj);
}

function Entidad() {}

Entidad.prototype.save = function() {
    console.log('Guardado desde entidad!!');
};

function User() {}

User.prototype.save = function() {
    console.log('Guardado desde user!!');
};

// Herencia: User.prototype ← Entidad.prototype
Object.setPrototypeOf(
    User.prototype,
    Entidad.prototype
);

const u = new User();

// Mostrar correctamente la cadena de prototipos
console.log(getProto(getProto(u)));