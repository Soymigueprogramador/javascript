// Ejersicio 22
/*
    22
Una fábrica de caramelos dispone de un presupuesto inicial para inaugurar su sucursal en Villa Brian Lara.
Se sabe que para producir caramelos tienen los siguientes costos:

Costo de alquiler de $10000
Costo por caramelo producido de $2.50
Costo por mantenimiento cada 100 caramelos de $5000

Dados el presupuesto inicial y la cantidad de caramelos a producir el primer mes, informar:
"El presupuesto es suficiente para cubrir los costos de $XXXX"
"El presupuesto no es suficiente, necesita un crédito de $XXXX"
*/


let presumuesto = Number(prompt('Ingresa el presupuesto inicial'));

const costoAlquiler = 10000;
const costoMantenimiento = 5000;
const costoProducirCaramelo = 2.50;

let costoTotal;

costoTotal = costoAlquiler + costoMantenimiento + costoProducirCaramelo;

if( presumuesto < costoTotal ) {
    console.log(`El presupuesto inicial es de $${presumuesto} es menor al costo iniciar del proyecto que es de $${costoTotal}`);
} else {
    console.log(`El presupuesto inicial de de $${presumuesto} es mayor al costo iniciar del proyecto que es de $${costoTotal}`);
}
