// Listar propiedades
/*
    Asi podemos listar las propiedades de un objeto que fue creado de forma dinamica.
*/


const punto = {
    x: 10,
    y: 15,
    mostrar() { // Otra forma de definir un metodo
        console.log('Mostrando...!');
    }
};

// Asi sabemos si el metodo existe dentro del objeto
if( "mostrar" in punto ) {
    punto.mostrar();
}

console.log(Object.keys(punto)); // Nos devuelve un array del objeto.

// Listando las propiedades del objeto (Esta forma es mas antigua)
for( let llave of Object.keys(punto) ) {
    console.log( llave, punto[llave] ); // Devuelve la propiedad y el valor
};

for( let entry of Object.entries(punto) ) {
    console.log( entry ); // Devuelve la propiedad y el valor separados en arrays distintos
};

console.log( '-------------------------------------------------------------------' );

// Esta forma es mas nueva (Accediendo a las propiedades de un objeto con un for in.
for( let i in punto ) {
    console.log( i, punto[i] ); // Devuelve la propiedad y el valor
};

// Los metodos de Object
/*
    A los metodos de Object como entries y keys se los conoce como
    "metodos de clases o metodos estaticos"
*/