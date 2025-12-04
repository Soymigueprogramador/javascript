// Formularios

// -------------------------------
// Función que valida los datos
// -------------------------------
const validate = data => {
    const errors = {};

    if (!data.name) {
        errors.name = 'El campo es obligatorio';
    }

    if (!data.lastname) {
        errors.lastname = 'El campo es obligatorio';
    }

    return errors; // Devuelve un objeto con los errores encontrados
};

// Valores iniciales para los inputs
let initialValues = {
    name: '',
    lastname: ''
};

// ----------------------------------------------
// Función que genera el HTML del formulario
// Recibe la data actual y los errores
// ----------------------------------------------
const render = ({ data, errores }) => {
    return `
        <form name="formulario">
            <div>
                <label> Nombre </label>
                <input
                    type="text"
                    name="name"
                    value="${data.name}"
                />
                ${errores.name ? `<p style="color:red">${errores.name}</p>` : ''}
            </div>

            <div>
                <label> Apellido </label>
                <input
                    type="text"
                    name="lastname"
                    value="${data.lastname}"
                />
                ${errores.lastname ? `<p style="color:red">${errores.lastname}</p>` : ''}
            </div>

            <div>
                <button type="submit"> Enviar </button>
            </div>
        </form>
    `;
};

// ----------------------------------------------
// Creamos un contenedor para renderizar el form
// ----------------------------------------------
const container = document.createElement('div');

// Render inicial del formulario sin errores
container.innerHTML = render({ data: initialValues, errores: {} });

// Insertamos el contenedor al DOM
document.body.append(container);

// Obtenemos el <form> que se renderizó dentro del contenedor
let form = container.querySelector('form');

// ----------------------------------------------
// Evento submit para capturar datos del formulario
// ----------------------------------------------
form.addEventListener('submit', e => {
    e.preventDefault(); // Previene el refresco del formulario

    // Convertimos los inputs en un objeto { name, value }
    const data = Array.from(e.target.elements).reduce((acc, el) => {
        if (!el.name) return acc; // Ignora inputs sin "name"
        acc[el.name] = el.value;
        return acc;
    }, {});

    // Validamos los datos recibidos
    const errores = validate(data);

    console.log('Datos:', data);
    console.log('Errores:', errores);

    // Si hay errores, re-renderizamos el formulario con mensajes
    if (Object.keys(errores).length > 0) {

        // Regeneramos el HTML del formulario con los errores
        container.innerHTML = render({ errores, data });

        // IMPORTANTÍSIMO:
        // Como re-renderizamos el formulario, debemos volver
        // a obtener la referencia al nuevo <form> del DOM.
        form = container.querySelector('form');

        // Volvemos a agregar el evento al nuevo form generado
        form.addEventListener('submit', e => {
            e.preventDefault();
        });
    }
});