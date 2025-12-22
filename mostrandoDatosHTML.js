// Mostrando un unico usuario
// Constante para guardar el ID
const resultados = document.getElementById('resultados');

// Constante para guardar la api
const api = 'https://jsonplaceholder.typicode.com/users';

// Creando el fetch
fetch(api)

  // Llamando a los .then()
  .then((res) => {
    return res.json(); // Convierte los datos a JSON
  })
  .then((data) => {
    console.log(data); // Muestra los datos en la consola del navegador

    // Tomamos el primer usuario del array
    const user = data[0];

    // Estructura para definir los datos que se mostrarán
    resultados.innerHTML = `
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Nombre:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <hr>
    `;
  })
  .catch((e) => {
    resultados.innerHTML = `
      Error al mostrar los datos
      <hr>
      ${e}
    `;
  });


// Mostrando todos los usuarios de una sola vez usando forEach
// Creando el fetch
fetch(api)
  .then((res) => {
    if (!res.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    return res.json(); // Convierte los datos a JSON
  })
  .then((data) => {
    // data es un array de usuarios
    resultados.innerHTML = '';

    data.forEach((user) => {
      resultados.innerHTML += `
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Nombre:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <hr>
      `;
    });
  })
  .catch((error) => {
    console.log('Error:', error);
    resultados.innerHTML = 'Error al cargar los datos';
  });