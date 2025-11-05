let password1 = document.getElementById('contraseña')
let password2 = document.getElementById('contraseña2')

function verPassword() {
    if (password1.type == 'password' && password2.type == 'password') {
        password1.type = 'text'
        password2.type = 'text'

    } else {
        password1.type = 'password'
        password2.type = 'password'
    }
}