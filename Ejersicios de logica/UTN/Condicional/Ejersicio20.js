// Ejercicio 20
/*
    Ingresar edad y altura de 5 personas.
    Calcular e informar:
    1️⃣ Cantidad de personas mayores a 30 años que midan más de 1.8 m.
    2️⃣ Promedio de altura de las personas mayores a 30 años.
    3️⃣ Cantidad de personas con altura entre 1.7 y 1.8 (inclusive).
    4️⃣ Cantidad de personas cuya edad sea 20, 30 o 40 años.
*/

let mayoresDe30Alto = 0;
let sumarAlturaMayores30 = 0;
let cantidadMayores30 = 0;
let entre17y18 = 0;
let edades203040 = 0;

for (let i = 1; i <= 5; i++) {
  let edad = Number(prompt(`Ingresa la edad de la persona ${i}:`));
  let altura = Number(prompt(`Ingresa la altura de la persona ${i} (en metros):`));

  // 1️⃣ Mayores de 30 y más de 1.8 m
  if (edad > 30 && altura > 1.8) {
    mayoresDe30Alto++;
  }

  // 2️⃣ Sumar alturas de mayores de 30
  if (edad > 30) {
    sumarAlturaMayores30 += altura;
    cantidadMayores30++;
  }

  // 3️⃣ Altura entre 1.7 y 1.8 inclusive
  if (altura >= 1.7 && altura <= 1.8) {
    entre17y18++;
  }

  // 4️⃣ Edad igual a 20, 30 o 40
  if (edad === 20 || edad === 30 || edad === 40) {
    edades203040++;
  }
}

// Calcular promedio de altura de mayores de 30 (fuera del bucle)
let promedioAlturaMayores30 = 0;
if (cantidadMayores30 > 0) {
  promedioAlturaMayores30 = sumarAlturaMayores30 / cantidadMayores30;
}

// Mostrar resultados
console.log(`\nResultados finales:`);
console.log(`1️⃣ Mayores de 30 años y más de 1.8 m: ${mayoresDe30Alto}`);
console.log(`2️⃣ Promedio de altura (mayores de 30): ${promedioAlturaMayores30.toFixed(2)} m`);
console.log(`3️⃣ Personas con altura entre 1.7 y 1.8 m: ${entre17y18}`);
console.log(`4️⃣ Personas con edad 20, 30 o 40 años: ${edades203040}`);
