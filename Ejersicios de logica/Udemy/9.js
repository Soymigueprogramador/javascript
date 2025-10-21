let pares = [
    { id: 1, name: 'Miguel' },
    { id: 2, name: 'Celeste' },
    { id: 3, name: 'Araceli' },
];

function toCollection(pares) {
    let collection = [];

    for (let idx in pares) {
        let elemento = pares[idx];
        collection[idx] = {
            id: elemento.id,
            name: elemento.name
        };
    }

    return collection;
}

let resultado = toCollection(pares);

console.log(resultado);