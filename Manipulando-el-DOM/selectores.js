// Selectores
/*
    Los selectores nos permiten seleccionar elementos que estan dentro de nuestro HTML.
*/

// Ejemplo en codigo
// Seleccionando el id
/**
    * Creamos una constante con el mismo nombre del ID
    * Lo igualamos al objeto llamado document.
    * Usamos el metodo getElementById('')
    * Le indicamos el nombre del ID en cuestion
    * EJEMPLO: const nombreDelId = document.getElementById('nombreId');
 */
const mensaje = document.getElementById('mensaje'); // Devuelve un HTMLElement

// Seleccionando un elemento por su clase en css
/**
    * Creamos una constante con el mismo nombre de la clase en css
    * Lo igualamos al objeto llamado document.
    * Usamos el metodo getElementsByClassName('claseCss');
    * EJEMPLO: const claseCss = document.getElementsByClassName('claseCss');
 */
const claseCss = document.getElementsByClassName('red'); // Devuelve un HTMLCollection

// Seleccionando un elemento por su nombre
/**
    * Creamos una constante con el mismo nombre de la clase en css
    * Lo igualamos al objeto llamado document.
    * Usamos el metodo getElementsByName('nombreDelAtributo');
    * EJEMPLO: const name = document.getElementsByName('nombreDelAtributo');
 */
const name = document.getElementsByName('body'); // Devuelve un NodeList

// Seleccionando un elemento por su etiqueta
/**
    * Creamos una constante con el mismo nombre de la etiqueta
    * Lo igualamos al objeto llamado document.
    * Usamos el metodo getElementsByTagName('nombreEtiqueta');
    * EJEMPLO: const etiqueta = document.getElementsByTagName('nombreEtiqueta');
 */
const etiqueta = document.getElementsByTagName('p'); // Devuelve un HTMLCollection

// Seleccionando un elemento por su querySelector
/**
    * Creamos una constante con el mismo nombre del elemento
    * Lo igualamos al objeto llamado document.
    * Usamos el metodo querySelector('elementoBuscado');
    * EJEMPLO: const elemento = document.querySelector('elementoBuscado');
    * ACLARACION:
    * Para buscar por ID usamos #nombreID
    * Para buscar por clase de css usamos .nombreClaseCSS
 */
const elemento = document.querySelector('.blue'); // Devuelve el primer elemento que coincida

// Seleccionando elementos por multiples selectores
/**
    * Creamos una constante con el mismo nombre del elemento
    * Lo igualamos al objeto llamado document.
    * Usamos el metodo querySelectorAll('elementoBuscado');
    * EJEMPLO: const elemento = document.querySelectorAll('elementoBuscado, elementoBuscado');
 */
const multiplesElementos = document.querySelectorAll('#mensaje, #body, p, .class'); // Devuelve un NodeList

// Diferencias entre HTMLCollection y NodeList
/*
    HTMLCollection:
    No importa cuantas veces se manipule el DOM, siempre va a mostrar los ultimos cambios.

    NodeList:
    No siempre va a reflejar los cambios que tengamos en el DOM (excepto los NodeList "vivos", como los que devuelve getElementsByName).
*/

// Creando una etiqueta y agregándola al body
/**
    * Creamos una constante con el mismo nombre del elemento
    * Lo igualamos al objeto llamado document.
    * Usamos el metodo createElement('etiqueta');
    * EJEMPLO: const nuevaEtiqueta = document.createElement('etiqueta');
    * Agregamos esa etiqueta al body
    * Para ello usamos document.body.append(etiqueta);
    * Ejemplo: document.body.append(nuevaEtiqueta);
 */
const nuevaEtiqueta = document.createElement('p');
document.body.append(nuevaEtiqueta);

console.log(mensaje);
console.log(claseCss);
console.log(name);
console.log(etiqueta);
console.log(elemento);
console.log(multiplesElementos);