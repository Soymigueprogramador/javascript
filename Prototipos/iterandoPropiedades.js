// Iterando propiedades

// Ejemplo en codigo
function User() {
    this.nombre = 'Miguel';
};

User.prototype.login = function() {
    console.log('Iniciando sesion', this.nombre);
};

let user = new User();

// Iterando las propiedades con un for in
/*
    El for in nos muestra las propiedades del prototype, esto es solo en un nivel ya que no esta
    mostrando las propiedades del prototype de la funcion constructora de object.
*/
for( let propiedades in user ) {
    // Imprimiento propiedades que estan dentro del mismo objeto o del mismo prototype.
    if( !user.hasOwnProperty(propiedades)) // Si la propiedad existe devuelve true. (Forma antigua)

    console.log(propiedades);
};

// Si solo queremos un array con las propiedades de un objeto hacemos esto.
console.log(Object.keys(user));