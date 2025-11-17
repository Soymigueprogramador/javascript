// Introduccion a prototipos

// Historia de la programacion orientada a objetos (POO)
/*
    La programacion orientada a objetos (POO) es un estilo de programacion, algo asi como una
    preferencia.
    No tiene nada que ver con una funcionalidad, tiene que ver con una forma de escribir el codigo.
    En el comienzo solo existia la programacion imperativa, en este paradigma el codigo tenia
    que pensarse como si fuera desde arriba hacia abajo.
    Despues aparecio la programacion procesal o programacion orientada a procesamientos (POP)
    en este paradigma el codigo se separaba en funciones para que sea mas facil de entender.
    Despues de esto aparecio la programacion estructurada, esta tambien es un ripo de
    programacion orientada a procesamientos, en este paradigma se encargaban de separar los datos de
    las funciones para asi tener funciones mas pequeñas.
    Despues de esto es cuando aparece la programacion orientada a objetos (POO) en este paradigma se
    encargan de argupar los datos que tengan centido agrupar.
*/

// Ejemplo de programacion estructurada
let nombre = 'Miguel'
let apellido = 'Salazar'

function getNombreCompleto(nombre, apellido) {
    return [ nombre, apellido ].join(' ');
};

let fullName = getNombreCompleto( nombre, apellido );
console.log(fullName)

console.log('----------------------------------------------------------------------------------');

// Ejemplo de programacion orientada a objetos
const user = {
    name: 'Miguel',
    subName: 'Salazar',
    getNombreCompleto() {
        return [ this.name, this.subName ].join(' ');
    }
};

console.log(user.getNombreCompleto());