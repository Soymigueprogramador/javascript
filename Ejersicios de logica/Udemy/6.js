let arr = [2, 5, 7, 15, -5, -100, 56];

function positivos(arr) {
    let cantidad = 0;

    for( elementos of arr ) {
        if ( elementos > 0 ) {
            cantidad++;
        }
    }

    return cantidad;
};

let resultado = positivos(arr);

console.log('Los positivos son:', resultado )