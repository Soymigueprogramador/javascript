// Date
/*
    Con el objeto date podremos trabajar con fechas en JavaScript
*/

// Ejemplo en codigo
const ahora = new Date();
/*
    Al crear una variable con el objeto new Date() estamos creando un objeto con la fecha y horaactual de nuestra pc
*/

const fecha = new Date('09/11/2001 09:45 GMT-0300');
const fecha1 = new Date('09/11/2001 09:45 GMT-0300');
const fecha2 = new Date(2001, 8, 11); // El mes es en base 0
/*
    Creamos un objeto con una fecha y hora determinada.
    En este caso usamos el formato de fecha de EE:UU
*/

console.log(ahora);

// Formas de mostrar la fecha en formatos internacionales.
console.log(fecha.toDateString()); // Ejemplo: Tue Sep 11 2001

// Ejemplo: 2001-09-11T12:45:00.000Z formato de fecha y hora recomendada para mandarla al servidor
console.log(fecha1.toISOString());
console.log(fecha2.toLocaleTimeString()); // Ejemplo: 0:00:00

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

// Metodos get
console.log(fecha.getDate()); // Obtenemos el dia del mes
console.log(fecha.getDay()); // Obtenemos el dia de la semana empezando desde el lunes
console.log(fecha.getUTCFullYear()); // Obtenemos el año
console.log(fecha.getHours()); // Obtenemos las horas
console.log(fecha.getMilliseconds()); // Obtenemos los milisegundos
console.log(fecha.getMinutes()); // Obtenemos los minutos
console.log(fecha.getMonth()); // Obtenemos el mes

// Para cambiar las fechas usamos set.loQueVamosCambiar
console.log(fecha.setMilliseconds(1992));