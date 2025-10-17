// switch
/*
    El switch nos permite indicarle para donde queremos que se vaya el codigo dependiendo del valor de una variable.
    Esto es muy usado en menus.
*/

// Sintaxys del switch
/**
    * Usamos la palabra reservada switch
    * (Le indicamos la variable a evaluar)
    * Usamos la palabra reservada de case para indicarle a donde queremos llegar
    * Le indicamos un valor
    * Le indicamos que lo debe hacer al llegar alli
    * Usamos la palabra reservada de break para indicarle que se debe detener alli
    * Usamos la palabra reservada de default
    * Le indicamos que va a mostrar en caso de que se ingrese una opcion no valida (Esto es opcional)
 */

// Ejemplo en codigo
let accion = 'eliminar';

switch (accion) {
    case 'Listar':
        console.log('Accion de listar');
    break;

    case 'Guardar':
        console.log('Accion de guardar');
    break;

    case 'Eliminar':
        console.log('Accion de eliminar');
    break;

    default:
        console.log('Accion no encontrada ');
}