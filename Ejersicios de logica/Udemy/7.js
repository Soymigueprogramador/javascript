// Consigna:
/*
    Ejersicio7:
    Crear un programa que calcule el precio y le sume los impuestos
*/
// Simplificacion del problema:
/*
    Tengo que crear un programa que calcule los impuestos de una compra
*/
// Analisis:
// Datos de entrada:
/**
    * precio
    * impuestos
    * precio completo
    * precioCompletoConImpuestos
 */
// Datos de salida:
/**
    * precioCompletoConImpuestos
 */
// Operaciones:
/**
    * Tomo el valor del precio lo multiplico por el impuesto y ese valor se lo sumo al precio
 */
// Estrategia:
/**
    * Tomo el precio
    * Tomo el impuesto
    * Mutiplico el precio por el impuesto lo divido por 100
    * Sumo el precio mas el resultado de la operacion anterior
    * Muestro los datos por pantalla
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

function preciosCompleto(precio, impuesto) {
    return precio + precio * impuesto;
};

let resultado = preciosCompleto(19.90, 0.15);

console.log(resultado.toFixed(2)) 