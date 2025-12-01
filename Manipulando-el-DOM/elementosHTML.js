// Elementos HTML

// Creando un elemento HTML
let elemento = document.createElement('p');
let elementoH1 = document.createElement('h1');

// Cambiando el contenido del elemento creado
/**
    * Llamamos a la variable del elemento = nombreVariableDelElemento.
    * Llamamos al metodo innerHTML = nombreVariableDelElemento.innerHTML
    * Le asignamos el contenido del elemento = nombreVariableDelElemento.innerHTML = 'Contenido';
*/
elemento.innerHTML = 'Nuevo elemento';
elementoH1.innerHTML = 'VIVA PYTHON';

// Agregamos el elemento al body
document.body.append(elemento);
document.body.append(elementoH1);

// Con innerText nos permite ingresar solo texto
let elementoInnerText = document.createElement('ul');
elementoInnerText.innerHTML = `<li>Perro</li>`; // corregido: no se usa <ul> dentro, ni </il>
document.body.append(elementoInnerText);

// Cambiando estilos de los elementos HTML
/**
    * Creamos una variable y la llamamos = nombreVariable
    * Llamamos al metodo style = nombreVariable.style
    * Le asignamos el estilo = nombreVariable.style = 'Estilo'
*/
elementoH1.style = 'color: red';

// Cambiando la clase del elemento HTML
/**
    * Creamos una variable y la llamamos = nombreVariable
    * Llamamos al metodo className = nombreVariable.className
    * Le asignamos el nuevo nombre a la clase = nombreVariable.className = 'nuevoNombreClase';
*/
elementoH1.className = 'clase-nuevo-elemento';

// Agregando un ID
/*
    Los pasos son los mismos pero le agregamos un ID
*/
elementoH1.id = '2'; // ID debe ser string (recomendado)

// Agregando propiedades personalizadas
/**
    * Creamos una variable y la llamamos = nombreVariable
    * Llamamos al metodo setAttribute = nombreVariable.setAttribute
    * Le asignamos el nombre de la llave = nombreVariable.setAttribute('nombreLlave', 'valorLlave');
*/
elementoInnerText.setAttribute('mi-llave', 'mi-valor');

// Obteniendo el valor de un atributo
elementoInnerText.getAttribute('mi-llave'); // corregido: antes usabas setAttribute por error

// Verificamos si tiene un valor específico
elementoInnerText.hasAttribute('mi-llave');