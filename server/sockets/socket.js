const { io } = require('../server')

io.on('connection', (client) => {
    //client contiene toda la info de la conexion que se estableció
    console.log('Usuario conectado')

    //emite un mensaje para que el cliente lo escuche
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    // enviar mensaje (escuchar el cliente)
    client.on('enviarMensaje', (msg, callback) => {
        console.log(msg)

        //con broadcast envia a todos los usuarios conectados al servidor
        client.broadcast.emit('enviarMensaje', msg)

        // if (msg.usuario) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     })
        // } else {
        //     callback({
        //         resp: 'Todo salió mal'
        //     })
        // }


    })

})