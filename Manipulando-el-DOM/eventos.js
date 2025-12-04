// Eventos
/*
    Los eventos son la informacion que levantamos cuando el usuario
    interactua contra nuestro sitio web.
*/

// Ejemplo en codigo.

// Creando un formulario
const form = document.createElement('form');
form.id = 'formulario';

const input = document.createElement('input');
input.setAttribute('type', 'text');

const button = document.createElement('button');
button.innerText = 'Enviar';

// Agregando elementos al formulario
form.append(input);
form.append(button);

// Agregando el formulario al DOM
document.body.append(form)

// Asignando eventos al formulario
/**
 * Para asignar un evento hacemos esto:
    * Llamamos al elemento que le queremos asignar el evento
    * Llamamos al evento
    * Se lo tenemos que asignar a una funcion
    * Esta funcion contiene un objeto que muestra lo que esta pasando
 */

// Eventos para el formulario
// On mouse enter (Cuando el usuario mete el mouse sobre el formulario)
form.onmouseenter = (e) => {
    console.log('Entro el mouse');
};

// on mouse leave (Cuando el usuario saca el mouse sobre el formulario)
form.onmouseleave = e => {
    console.log('Salio el mouse');
};

// Eventos para el input
// onFocus (Cuando el usuario hace click dentro del elemento)
input.onfocus = e => {
    console.log('El usuario hizo click, vamos a hackearlo!!');
};

// onBlur (Despues que el usuario selecciono un campo de texto, salio e hizo un click fue)
input.onblur = e => {
    console.log('cliqueaste a fuera del input');
};

// onChange (Cuando el valor que esta dentro del elemento cambio)
input.onchange = e => {
    console.log('Cambio el valor', e.target.value);
};

// Eventos para el boton
// onClick (Cuando se haga click sobre el boton)
button.onclick = e => {
    e.preventDefault(); // Metodo para evitar que la pagina se actualice automaticamente
    console.log('Boton cliqueado');
};

// Ejecutando con el addEventListener
/**
 * Para hacerlo hacemos esto:
    * Llamamos al elemento = nombreElemento
    * Llamamos al metodo addEventListener = nombreElemento.addEventListener()
    * Le pasamos dos parametros:
        * 1- El nombre del evento al cual le asignamos una funcion
        * 2- Le pasamos la funcion con el objeto
    *
 */
button.addEventListener('click', e => {
    e.preventDefault(); // Metodo para evitar que la pagina se actualice automaticamente
    console.log('Probando el metodo addEventListener');
});