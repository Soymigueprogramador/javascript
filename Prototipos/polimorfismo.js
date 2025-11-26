// Polimorfismo
/*
    Poli = Muchos
    Morfismo = Formas

    El polimorfismo ocurre cuando varios objetos, creados con funciones
    constructoras distintas o con propiedades diferentes, comparten un
    mismo método (en este caso, "render"), pero cada uno lo implementa
    de una manera distinta.

    Así podemos ejecutar el mismo método y obtener comportamientos
    diferentes según el objeto.
*/

// Ejemplo en código
function Select() {}

Select.prototype.render = function () {
    console.log('Renderizando Select!!');
    return `<select>
        <option>Hola</option>
        <option>Saludo</option>
        <option>Perro</option>
        <option>Chau</option>
    </select>`;
};

function CheckBox() {}

CheckBox.prototype.render = function () {
    console.log('Renderizando CheckBox!!');
    return `<input type="checkbox" />`;
};

let componentes = [
    new Select(),
    new CheckBox()
];

componentes.forEach(componente => {
    console.log(componente.render());
});