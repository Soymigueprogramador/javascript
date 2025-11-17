// Prototipos

/*
    En JavaScript, la función constructora raíz de la que heredan todos los objetos
    se llama "Object". Esta función constructora tiene un prototipo llamado
    "Object.prototype".

    A través de ese prototipo, todos los objetos creados mediante la función
    constructora "Object" (o cualquier derivada) heredan propiedades y métodos.
*/

// Propiedades y métodos relacionados con los prototipos:
/**
 *  constructor:
 *      Devuelve la función constructora con la que fue creado el objeto.
 *
 *  __proto__:
 *      Es una propiedad interna que apunta al prototipo del objeto.
 *      Está deprecada y NO se recomienda usarla.
 *
 *  Object.getPrototypeOf(obj):
 *      Retorna el prototipo del objeto dado. Es la forma recomendada de acceder
 *      al prototipo.
 *
 *  toString:
 *      Es un método heredado del prototipo que permite devolver una
 *      representación en string del objeto.
 */