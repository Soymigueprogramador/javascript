// Ejersicio 21
/*
    21
Una marroquinería dispone de 45 carteras blancas, 50 carteras negras, 40 marrones y 49 grises.
Se pide hacer un programa donde se ingresen tres ventas. Cada venta está compuesta por:

Cantidad de carteras
Tipo de cartera (1 - Blanco, 2 - Negro, 3- Marrón, 4 - Gris)

Calcular e informar:
Cantidad total de carteras vendidas en total.
Cuántas carteras quedaron de cada tipo.
Los colores de carteras que no se vendieron.
NOTA: Ninguna venta superará las 10 carteras.

*/

// Ejercicio 21 - CORREGIDO

let carteraBlanca = 45;
let carteraNegra = 50;
let carteraMarron = 40;
let carteraGris = 49;

let totalCarterasVendidas = 0;

for (let i = 1; i <= 3; i++) {
  console.log(`\nVenta ${i}:`);

  let cantidad = Number(prompt('Ingresa la cantidad de carteras vendidas (1 a 10 unidades):'));
  let tipo = Number(prompt('Ingresa el tipo de cartera (1-Blanca, 2-Negra, 3-Marrón, 4-Gris):'));

  if (cantidad < 1 || cantidad > 10 || Number.isNaN(cantidad)) {
    console.log('La cantidad de carteras vendidas debe estar entre 1 y 10. Venta ignorada.');
    continue;
  }

  // Aplicar venta según tipo
  switch (tipo) {
    case 1:
      carteraBlanca -= cantidad;
      break;
    case 2:
      carteraNegra -= cantidad;
      break;
    case 3:
      carteraMarron -= cantidad;
      break;
    case 4:
      carteraGris -= cantidad;
      break;
    default:
      console.log(`${tipo} - Ese tipo de cartera no existe en nuestro catálogo. Venta ignorada.`);
      continue;
  }

  totalCarterasVendidas += cantidad;
}

console.log(`\n===== RESULTADOS =====`);
console.log(`Total de carteras vendidas: ${totalCarterasVendidas}`);
console.log(`Carteras restantes:`);
console.log(`- Blancas: ${carteraBlanca}`);
console.log(`- Negras: ${carteraNegra}`);
console.log(`- Marrones: ${carteraMarron}`);
console.log(`- Grises: ${carteraGris}`);

console.log(`\nColores de carteras que no se vendieron:`);
if (carteraBlanca === 45) console.log("⚪ Blancas");
if (carteraNegra === 50) console.log("⚫ Negras");
if (carteraMarron === 40) console.log("🟤 Marrones");
if (carteraGris === 49) console.log("⚪ Grises");

if (carteraBlanca !== 45 || carteraNegra !== 50 || carteraMarron !== 40 || carteraGris !== 49) {
  console.log('Todas las ventas fueron registradas correctamente');
} else {
  console.log('No se registró ninguna venta');
}
