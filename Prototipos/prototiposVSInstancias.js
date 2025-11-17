// Prototipos vs instancias
/*
    Prototipos:


    Instancias:

*/

// Ejemplo en codigo
function User() {
    this.name = 'Miguel',
    this.login = function() {
        console.log('Iniciando sesion!!');
    }
};

const user1 = new User();
const user2 = new User();

console.log(user1.login == user2.login);
//console.log(user2.login());