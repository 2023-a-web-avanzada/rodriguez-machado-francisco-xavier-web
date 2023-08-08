const express = require('express');
const {Socket} = require('socket.io');
const app = express();

//creamos un servidor http a partir de la libreria de express
const http = require('http').Server(app);
// para interactuar entre los htmls y generear una comunicacion se usa socket.io
const io = require('socket.io')(http);

//rutas

app.use(require('../routes/deberwebsockets.routes'));

// Donde vamos a cargar los html con lo que se va atrabajar 

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('stream', (image) => {
        // emitir el evento a todos los sockets conectados
        socket.broadcast.emit('stream', image);
    })
})


module.exports = http;