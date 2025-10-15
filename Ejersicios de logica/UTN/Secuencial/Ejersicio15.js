// Consigna:
/*
    15
La amplitud térmica es la diferencia entre la temperatura máxima y la temperatura mínima en una zona y tiempo determinado. Dada la temperatura máxima y la temperatura mínima de San Fernando de ayer, calcular y mostrar la amplitud térmica.
NOTA: El usuario ingresará como temperatura máxima un valor mayor o igual al de la temperatura mínima.

*/
// Simplificacion del problema:
/*
    Tengo que crear un programa para calcular la amplitud termina
*/
// Analisis:
// Datos de entrada:
/**
    * temperaturaMaxima
    * temperaturaMinima
    * amplitudTerminca
 */
// Datos de salida:
/**
    * amplitudTerminca
 */
// Operaciones:
/**
    * A la temperatura maxima le resto la temperatura minima
 */
// Estrategia:
/**
    * Pregunto por la temperatura maxima
    * Pregunto por la temperatura minima
    * Muestro la amplitud termica por pantalla
 */
// Diagrama del codigo:
/**
    * El diagrama estara en la carpeta de diagramas.
 */
// Codificacion:

const temperaturaMaxima = Number(prompt('¿Cual es la temperatura maxima?'))
const temperaturaMinima = Number(prompt('¿Cual es la temperatura minima?'))

const amplitud = temperaturaMaxima - temperaturaMinima

console.log(`La amplitud termina es de ${amplitud} grados`)
