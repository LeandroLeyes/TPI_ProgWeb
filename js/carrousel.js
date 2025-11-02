
const imagenesCarrousel = [
    './images/carrousel/avengerseg.jpg',//0
    './images/carrousel/avengersiw.img.jpg',//1
    './images/carrousel/bastardos.jpg',//2
    './images/carrousel/breakingbad.jpg',//3
    './images/carrousel/fallout.jpg',//4
    './images/carrousel/got.jpg',//5
    './images/carrousel/lotr.jpg',//6
    './images/carrousel/predator.jpg',//7
    './images/carrousel/terminator.jpg'//8
]

let imagenP1 = document.getElementById('imagen1')
let imagenP2 = document.getElementById('imagen2')
let imagenP3 = document.getElementById('imagen3')

let i = 1
let max = imagenesCarrousel.length - 1

function mostrarImagenes() {
    imagenP1.src = imagenesCarrousel[i - 1]
    imagenP2.src = imagenesCarrousel[i]
    imagenP3.src = imagenesCarrousel[i + 1]
}

function adelante() {
    i++
    if (i == max - 1) {
        imagenP1.src = imagenesCarrousel[i]
        imagenP2.src = imagenesCarrousel[max]
        imagenP3.src = imagenesCarrousel[0]
        return
    } else if (i == max) {
        i = 0
        imagenP1.src = imagenesCarrousel[max]
        imagenP2.src = imagenesCarrousel[i]
        imagenP3.src = imagenesCarrousel[1]
        return
    }
    mostrarImagenes()
}

function atras() {
    i--
    if (i <= 0) {
        i = max
        imagenP1.src = imagenesCarrousel[i]
        imagenP2.src = imagenesCarrousel[0]
        imagenP3.src = imagenesCarrousel[1]
        return
    } else if (i == max - 1) {
        imagenP1.src = imagenesCarrousel[i]
        imagenP2.src = imagenesCarrousel[max]
        imagenP3.src = imagenesCarrousel[0]
        return
    }
    mostrarImagenes()
}

mostrarImagenes()