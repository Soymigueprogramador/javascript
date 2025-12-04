// Drag n drop
/*
    Con drag n drop vamos a poder arrastrar elementos de HTML y soltarlos dentro de otros
    elementos de HTML.
*/

// Para crear un drag n drop hacemos esto:
/**
    * Creamos un elemento del tipo span
    * Le asignamos un ID
    * Le asignamos un texto
    * A la propiedad draggable tenemos que asignarle true
    * Agregamos el elemento al HTML
    *
*/
// Guardamos todo el código en una función

function createDragndrop() {
    const span = document.createElement('span');
    span.id = 'span';
    span.innerText = 'Arrastrame';
    span.draggable = true;
    document.body.append(span);

    // Evento de arrastre: necesario para que el drop funcione
    span.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', span.id);
    });
}
createDragndrop();

function creandoAreaDraggable() {

    // Creando un espacio dentro del HTML para dejar el elemento antes creado.
    /**
        * Creamos un elemento del tipo div
        * Le asignamos la clase antes creada
        * Agregamos el elemento al DOM
    */
    const dropZone = document.createElement('div');
    dropZone.className = 'drop';
    dropZone.style.width = '200px';
    dropZone.style.height = '200px';
    dropZone.style.border = '2px dashed #000';
    dropZone.style.marginTop = '20px';
    document.body.append(dropZone);

    // Evento para cambiar el color al pasar el elemento
    dropZone.ondragenter = e => {
        e.preventDefault(); // necesario para permitir el drop
        e.target.style.background = 'yellow';
    };

    // Evento para volver al color original cuando el usuario saque el mouse
    dropZone.ondragleave = e => {
        e.target.style.background = '';
    };

    // Permitir soltar el elemento
    dropZone.ondragover = e => {
        e.preventDefault();
    };

    // Acción al soltar el elemento dentro del dropzone
    dropZone.ondrop = e => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const element = document.getElementById(id);
        dropZone.append(element);
        dropZone.style.background = '';
    };
};
creandoAreaDraggable();