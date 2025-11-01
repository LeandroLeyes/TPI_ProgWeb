
const imagenesCarrousel1 = [
    {
        img1: './images/carrousel/avengerseg.jpg', //0
        img2: './images/carrousel/avengersiw.img.jpg',//1
        img3: './images/carrousel/bastardos.jpg'//2
    },
    {
        img1: './images/carrousel/terminator.jpg',//8
        img2: './images/carrousel/avengerseg.jpg',//0
        img3: './images/carrousel/avengersiw.img.jpg'//1
    },
    {
        img1: './images/carrousel/predator.jpg',//7
        img2: './images/carrousel/terminator.jpg',//8
        img3: './images/carrousel/avengerseg.jpg'//0
    },
    {
        img1: './images/carrousel/lotr.jpg',//6
        img2: './images/carrousel/predator.jpg',//7
        img3: './images/carrousel/terminator.jpg'//8
    },
    {
        img1: './images/carrousel/got.jpg',//5
        img2: './images/carrousel/lotr.jpg',//6
        img3: './images/carrousel/predator.jpg'//7
    },
    {
        img1: './images/carrousel/fallout.jpg',//4
        img2: './images/carrousel/got.jpg',//5
        img3: './images/carrousel/lotr.jpg'//6
    },
    {
        img1: './images/carrousel/breakingbad.jpg',//3
        img2: './images/carrousel/fallout.jpg',//4
        img3: './images/carrousel/got.jpg'//5
    },
    {
        img1: './images/carrousel/bastardos.jpg',//2
        img2: './images/carrousel/breakingbad.jpg',//3
        img3: './images/carrousel/fallout.jpg'//4
    },
    {
        img1: './images/carrousel/avengersiw.img.jpg',//1
        img2: './images/carrousel/bastardos.jpg',//2
        img3: './images/carrousel/breakingbad.jpg'//3
    }
]

let imagenP1 = document.getElementById('imagen1')
let imagenP2 = document.getElementById('imagen2')
let imagenP3 = document.getElementById('imagen3')

let i = 0

function mostrarImagenes() {
    let aux = imagenesCarrousel1[i]
    imagenP1.src = aux.img1
    imagenP2.src = aux.img2
    imagenP3.src = aux.img3
}

function atras() {
    i++
    if (i >= imagenesCarrousel1.length) {
        i = 0
    }
    mostrarImagenes()
}

function adelante() {
    i--
    if (i < 0) {
        i = imagenesCarrousel1.length - 1
    }
    mostrarImagenes()
}

mostrarImagenes()