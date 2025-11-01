let password1 = document.getElementById('contraseña')
let password2 = document.getElementById('contraseña2')

function verPassword() {
    if (password1.getAttribute.type == 'password' && password2.getAttribute.type == 'password') {
        password1.setAttribute.type = 'text'
        password2.setAttribute.type = 'text'

    } else {
        password1.setAttribute.type = 'password'
        password2.setAttribute.type = 'password'
    }
}