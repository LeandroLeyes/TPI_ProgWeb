const imagenesCarrousel = [
    './images/carrousel/avengerseg.jpg',
    './images/carrousel/avengersiw.img.jpg',
    './images/carrousel/bastardos.jpg',
    './images/carrousel/breakingbad.jpg',
    './images/carrousel/fallout.jpg',
    './images/carrousel/got.jpg',
    './images/carrousel/lotr.jpg',
    './images/carrousel/predator.jpg',
    './images/carrousel/terminator.jpg'
]

let imagenP1 = document.getElementById('imagen1')
let imagenP2 = document.getElementById('imagen2')
let imagenP3 = document.getElementById('imagen3')

let botonAdelante = document.getElementById('adelante')
let botonAtras = document.getElementById('atras')

iniciarCarrousel()

let i = 1

function carrousel() {

    if (i < imagenesCarrousel.length - 2) {

        botonAtras.style.display = 'inline-block'

        imagenP1.src = imagenesCarrousel[i]
        imagenP2.src = imagenesCarrousel[i + 1]
        imagenP3.src = imagenesCarrousel[i + 2]

        i++
    } else {
        botonAdelante.style.display = 'none'
    }

}

function carrouselAtras() {

    if (i <= imagenesCarrousel.length && i > 1) {

        botonAdelante.style.display = 'inline-block'

        imagenP1.src = imagenesCarrousel[i - 2]
        imagenP2.src = imagenesCarrousel[i - 1]
        imagenP3.src = imagenesCarrousel[i]

        i--
    } else {
        botonAtras.style.display = 'none'
    }
}

function iniciarCarrousel() {
    imagenP1.src = imagenesCarrousel[0]
    imagenP2.src = imagenesCarrousel[1]
    imagenP3.src = imagenesCarrousel[2]
    botonAtras.style.display = 'none'
}

