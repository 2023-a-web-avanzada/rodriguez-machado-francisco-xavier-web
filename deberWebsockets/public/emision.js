var canvas = document.querySelector('#preview');
var context = canvas.getContext('2d');
var btn = document.querySelector('#btn');
var toggleBtn = document.querySelector('#toggleBtn');
canvas.style.display = 'none';
canvas.width = 512;
canvas.height = 384;

context.width = canvas.width;
context.height = canvas.height;

var video = document.querySelector('#video');

var socket = io();

var streamActive = false; // Rastrea si la cámara está activa

function publicarMensaje(msg) {
    document.querySelector('.status').innerText = msg;
}

function loadCamara(stream) {
    video.srcObject = stream;
    publicarMensaje('Cámara Activa');
    streamActive = true;
}

function stopCamara() {
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
    publicarMensaje('Cámara Detenida');
    streamActive = false;
}

function errorCamara() {
    publicarMensaje('La cámara ha fallado');
}

function verVideo(video, content) {
    context.drawImage(video, 0, 0, context.width, context.height);
    socket.emit('stream', canvas.toDataURL('image/webp'));
}

btn.addEventListener('click', () => {
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia)

    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, loadCamara, errorCamara)
    }

    var intervalo = setInterval(() => {
        verVideo(video, context);
    }, 30);
})

toggleBtn.addEventListener('click', () => {
    if (streamActive) {
        stopCamara();
    } else {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(loadCamara)
            .catch(errorCamara);
    }
});