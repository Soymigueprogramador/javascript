/*
    5
Un negocio de perfumería efectúa descuentos según el importe de la venta.
Si el importe es menor a $100 aplicar un descuento del 5%
Si el importe es entre $100 y hasta $500 aplicar un descuento del 10%
Si el importe es mayor a $500 aplicar un descuento del 15%

Hacer un programa donde se ingresa el importe original sin descuento y se informe por pantalla el importe con el descuento ya aplicado.
Importante: Verifique que el programa emita UN SOLO CARTEL.

*/

let precio = Number(prompt('Ingrese el precio'));

let descuento;
let precioFinal;

if( precio < 100 ) {
    descuento = 0.95;
} else if( precio < 500 ) {
    descuento = 0.90;
} else {
    descuento = 0.85;
}

precioFinal = precio - ( precio * descuento );

console.log(`Le descontamos un %${descuento} al precio ${precio}`);
console.log(`El precio final te queda en ${precioFinal}`);