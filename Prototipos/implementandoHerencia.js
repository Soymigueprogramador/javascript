// Implementando herencia
// ---------------------

// Ejemplo en código
function User() {
    this.hombre = 'Hola mundo';
}

function Product() {
    this.hombre = 'Producto';
}

// Constructor base del cual heredarán los demás
function Entidad() {}

// Métodos que heredarán los hijos
Entidad.prototype.save = function () {
    console.log('Guardado!!', this.hombre);
};

Entidad.prototype.validation = function () {
    console.log('Validado!!', this.hombre);
};


// ---------------------------------------------------------------------------
// Forma 1 (antigua): Usando Object.create() en vez de asignar prototype directo
// ---------------------------------------------------------------------------

/**
 * NO usar: User.prototype = Entidad.prototype;
 * Eso genera que ambos compartan el mismo prototype.
 */

User.prototype = Object.create(Entidad.prototype);
User.prototype.constructor = User;

const user = new User();
console.log(user);
user.save();
user.validation();


// ---------------------------------------------------------------------------
// Forma 2 (ES6): Usando Object.setPrototypeOf()
// ---------------------------------------------------------------------------

/**
 * Llamamos a Object.setPrototypeOf(objetoBase, prototipo)
 * y le pasamos:
 *   - objetoBase: el prototype que queremos modificar
 *   - prototipo: el prototype del cual heredará
 */

Object.setPrototypeOf(Product.prototype, Entidad.prototype);
Product.prototype.constructor = Product;

const producto1 = new Product();
console.log(producto1);
producto1.save();
producto1.validation();