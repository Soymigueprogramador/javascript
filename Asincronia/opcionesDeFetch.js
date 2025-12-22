// Opciones de fetch

const api = 'https://jsonplaceholder.typicode.com/users';

fetch(api, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nombre: 'Miguel' }),
  cache: 'no-cache', // Evita que se guarde unformacion innecesaria
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('Algo salió mal:', error);
  })
  .finally(() => {
    console.log('La API terminó de traer los datos');
  });


// Pasándole opciones adicionales
/**
 * Debemos crear un objeto literal con las opciones que vamos a necesitar.
 * Las opciones son:
 * - method: puede ser 'GET', 'POST', 'PUT', 'PATCH' o 'DELETE'
 * - body: JSON.stringify({ propiedad: valor }) → datos que enviamos
 * - headers: { 'Content-Type': 'application/json' } → tipo de contenido
 */