const videos = [
    '../images/article/trailers/trailerAvatar.mp4',//0
    '../images/article/trailers/trailerFallout.mp4',//1
    '../images/article/trailers/trailerStrangerThings.mp4'//2
];

const video = document.getElementById('video');

let i = 0
let max = videos.length - 1

cargarVideo()

function cargarVideo() {
    video.src = videos[i]
}

function adelante() {
    i++
    if (i > max) {
        i = 0
    }
    cargarVideo()
}

function atras() {
    i--
    if (i < 0) {
        i = max
    }
    cargarVideo()
}