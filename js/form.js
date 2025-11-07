const forms = document.getElementById('formulario');

const spanNombre = document.getElementById('val-nombre');
const spanEmail = document.getElementById('val-email');
const spanContraseña = document.getElementById('val-contraseña');
const spanContraseña2 = document.getElementById('val-contraseña2');


const nombre = forms['nombre'];
const email = forms['email'];
const contraseña = forms['contraseña'];
const contraseña2 = forms['contraseña2'];

function validacion() {

    const regexUser = /^[A-Za-z\s_\_\-]+$/;
    const regexEmail = /^\w+@\w+\.(com)(|\.(ar))+$/;
    const regexcontraseña = /^[A-Za-z0-9]{8,}$/;

    let validado = true;

    if (nombre.value === " ") {

        nombre.style.border = '2px solid red';
        spanNombre.textContent = 'El campo no debe estar vacio!';
        validado = false;

    } else if (!regexUser.test(nombre.value)) {

        nombre.style.border = '2px solid red';
        spanNombre.textContent = 'Usuario invalido!';
        validado = false;

    } else {

        nombre.style.border = '2px solid green';
        spanNombre.textContent = '';

    }

    if (email.value === '') {

        email.style.border = '2px solid red';
        spanEmail.textContent = 'El campo no debe estar vacio!';
        validado = false;

    } else if (!regexEmail.test(email.value)) {

        email.style.border = '2px solid red';
        spanEmail.textContent = 'Email invalido!';
        validado = false;

    } else {

        email.style.border = '2px solid green';
        spanEmail.textContent = '';

    }

    if (!regexcontraseña.test(contraseña.value)) {

        contraseña.style.border = '2px solid red';
        spanContraseña.textContent = 'Contraseña invalida!';
        validado = false;

    } else {

        contraseña.style.border = '2px solid green';
        spanContraseña.textContent = '';

    }

    if (!regexcontraseña.test(contraseña2.value)) {

        contraseña2.style.border = '2px solid red';
        validado = false;

    } else if (!(contraseña.value === contraseña2.value)) {

        contraseña2.style.border = '2px solid red';
        spanContraseña2.textContent = 'Las contraseñas no coinciden!';
        validado = false;

    } else {

        contraseña2.style.border = '2px solid green';
        spanContraseña2.textContent = '';

    }

    if (validado) {
        imprimirCarta();
        setTimeout(limpiar, 2000)
        return false;
    }

    return false;

}

function imprimirCarta() {
    const carta = document.createElement('div')

    let titulo = document.createElement('h2');
    let contenido = document.createElement('p')

    titulo.textContent = 'Bienvenido!';
    contenido.textContent = 'Usuario ' + nombre + ', con email ' + email + ', registrado con exito!'

    carta.appendChild(titulo);
    carta.appendChild(contenido);

    carta.className = 'carta';

    forms.insertAdjacentElement('afterend', carta);
}

function limpiar() {
    spanNombre.textContent = '';
    spanEmail.textContent = '';
    spanContraseña.textContent = '';
    spanContraseña2.textContent = '';

    const inputs = document.getElementsByTagName('input')
    for (let input of inputs) {
        input.value = '';
        input.style.border = '';
    }

    setTimeout(eliminarAnterior, 5000);
}

function eliminarAnterior() {
    const cartas = document.getElementsByClassName('carta');
    if (cartas.length > 1) {
        let cartaAnterior = cartas[1];
        cartaAnterior.remove();
    }
}
