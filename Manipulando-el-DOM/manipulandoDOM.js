// Manipulando el DOM
let elemento = document.createElement('p');
elemento.innerHTML = '0 GANAS DE ESTUDIAR PARA ARSO';
document.body.append(elemento);

// Eliminando un elemento del DOM
/**
 * Para ello necesitamos:
 * Llamamos a la variable del elemento creado = nombreElemento
 * Llamamos al metodo remove para eliminar ese elemento = nombreElemento.remove()
 */
// elemento.remove();

// Volviendo a agregar el elemento pero al principio del archivo
/**
 * Llamamos a la variable del elemento
 * Llamamos al metodo prepend
 * Le pasamos el nombre del elemento
 */
document.body.prepend(elemento);

// Reemplazando elementos
/**
 * Creamos una variable para un nuevo elemento
 * Llamamos el metodo de innerHTML
 * le pasamos el valor del elemento
 * Llamamos al elemento y al metodo replaceWith
 * Le pasamos el elemento que vamos a cambiar
 */
let el = document.createElement('div');
el.innerText = 'Soy un texto';
document.body.appendChild(el);

// Creamos otro div para reemplazar el anterior
let nuevoDiv = document.createElement('div');
nuevoDiv.innerText = 'Soy el nuevo texto';

// Reemplazamos
el.replaceWith(nuevoDiv);

// Insertar un elemento al lado de otro
/**
 * Llamamos al metodo insertBefore
 * Le pasamos el elemento a insertar
 * Le pasamos el elemento que va a estar despues
 */

// Creamos un div para insertar (antes no existía la variable "div")
let div = document.createElement('div');
div.innerText = 'Soy un div insertado';

document.body.insertBefore(div, nuevoDiv);

// Otra forma de hacer lo mismo
/**
 * Llamamos al metodo insertAdjacentElement
 * Este metodo tiene dos parametros
 * 1 es un string con estas opciones:
    * beforebegin
    * afterbegin
    * beforeend
    * afterend
 * 2 El elemento que vamos a insertar
 *
 * IMPORTANTE:
 * document.body NO permite 'beforebegin' ni 'afterend'
 * porque no se puede insertar fuera del <body>.
 *
 * Solo funcionan:
 *  - afterbegin     (primer hijo)
 *  - beforeend      (último hijo)
 */

document.body.insertAdjacentElement('afterbegin', div);  // Inserta al comienzo del body
document.body.insertAdjacentElement('beforeend', div);   // Inserta al final del body

// Estos métodos necesitan parámetros, solo los dejo comentados como ejemplo
document.body.insertAdjacentHTML('beforeend', '<p>Texto HTML insertado</p>');
document.body.insertAdjacentText('beforeend', 'Texto simple insertado');