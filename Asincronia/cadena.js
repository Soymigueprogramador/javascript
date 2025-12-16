// Cadena

// Creo la primera promesa. El constructor recibe una función (executor) con dos parámetros:
// `resolve` para resolver la promesa y `reject` para rechazarla.
// En este ejemplo se llama a `resolve(12)` de forma inmediata, por lo que la promesa
// quedará resuelta con el valor 12.
// Nota: aunque `resolve` se llamé dentro del constructor, los callbacks `.then` se ejecutan
// en la microtarea siguiente al terminar el stack actual (ver más abajo sobre orden).
let promesa1 = new Promise((resolve, reject) => {
    resolve(12);
});

// Segunda promesa, análoga a la primera; se resuelve inmediatamente con el valor 25.
let promesa2 = new Promise((resolve, reject) => {
    resolve(25);
});

// -----------------------------
// Encadenando promesas
// -----------------------------

// Forma 1 (ENCADENAMIENTO)
// Se encadena `promesa2` desde el primer `.then`. Esto crea una secuencia:
// 1) promesa1 se resuelve -> ejecuta el primer callback `.then`
// 2) dentro del primer callback devolvemos `promesa2`
// 3) el siguiente `.then` espera a que `promesa2` se resuelva y recibe su valor
promesa1
    .then((valor1) => {
        // `valor1` contiene 12 (el valor con el que se resolvió promesa1)
        console.log(`Primera promesa ${valor1}`);

        // Devolvemos la segunda promesa para que el siguiente `.then` espere su resolución.
        // Importante: si en vez de `return promesa2` devolviéramos un valor normal,
        // el siguiente `.then` recibiría ese valor en lugar de esperar otra promesa.
        return promesa2;
    })
    .then((valor2) => {
        // `valor2` contiene 25 (el valor con el que se resolvió promesa2)
        console.log(`Segunda  promesa ${valor2}`);
    })
    // Buen hábito: manejar posibles rechazos con `.catch`.
    // En este ejemplo no hay rechazos, pero es buena práctica incluirlo.
    .catch(err => {
        console.error("Error en la cadena de promesas:", err);
    });

// Observación sobre orden de ejecución:
// Aunque `resolve()` fue llamado ya dentro del constructor de las promesas,
// los callbacks `.then` se ejecutan como microtareas después de que termine
// la pila de llamadas actual. Por eso los `console.log` siguientes (separadores)
// aparecerán en la consola **antes** de los `console.log` dentro de los `.then`.
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// -----------------------------
// Forma 2 (EN PARALELO)
// -----------------------------

// Promise.all recibe un array de promesas y devuelve una promesa que:
// - se resuelve cuando **todas** las promesas del array se resuelven,
//   con un array de sus resultados en el mismo orden.
// - se rechaza si **alguna** de las promesas se rechaza (primer rechazo propaga el error).
Promise.all([promesa1, promesa2])
    .then(valores => {
        // `valores` será [12, 25]
        console.log("Valores recibidos:", valores); // Devuelve como un array [12, 25]
    })
    .catch(err => {
        // Manejo de errores: si alguna promesa del array se rechazara, caeríamos aquí.
        console.error("Promise.all falló:", err);
    });

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// -----------------------------
// Forma 3 Con async/await (Más limpia)
// -----------------------------

// `async function` permite usar `await` para esperar promesas de forma secuencial.
// Observación importante sobre concurrencia:
// - `const a = await promesa1; const b = await promesa2;` espera promesa1 y SOLO
//   luego inicia/espera promesa2 si promesa2 no existiera ya.
// - Si querés ejecutar promesas en paralelo y esperar sus resultados con await, usá:
//     const [a, b] = await Promise.all([promesa1, promesa2]);
async function ejecutar() {
    try {
        // Aquí `await promesa1` espera la resolución de promesa1 y devuelve su valor.
        const valor1 = await promesa1;
        console.log("Valor 1:", valor1);

        // Luego se hace `await promesa2`. Esto se ejecuta de forma secuencial respecto a la línea anterior.
        // En este ejemplo particular promesa2 ya está resuelta, por lo que el `await` devolverá inmediatamente.
        const valor2 = await promesa2;
        console.log("Valor 2:", valor2);
    } catch (err) {
        // Manejo de errores con try/catch cuando se usa async/await.
        console.error("Error en la función async:", err);
    }
}

// Llamada a la función async para ejecutar la secuencia.
ejecutar();

// -----------------------------
// Recomendaciones finales / buenas prácticas
// -----------------------------
// 1. Siempre manejar rechazos: usar `.catch(...)` o try/catch con async/await.
// 2. Entender la diferencia entre secuencial y paralelo:
//    - Secuencial (esperar uno tras otro): await A; await B;
//    - Paralelo (ejecutar ambos y esperar sus resultados): Promise.all([A, B]);
// 3. Evitar crear promesas innecesarias: si ya tenés un valor sin operaciones asíncronas,
//    podés usar `Promise.resolve(valor)` cuando necesites una promesa que ya esté resuelta.
// 4. Documentar el flujo de datos: si una rama condicional puede devolver `undefined`
//    en un `.then`, considerá devolver explícitamente `null` o `Promise.resolve(...)` para
//    mantener la cadena consistente.
// 5. Si las promesas representan llamadas de red u operaciones costosas, controlar cancelaciones
//    y timeouts según necesidad (no mostrado en este ejemplo simple).
