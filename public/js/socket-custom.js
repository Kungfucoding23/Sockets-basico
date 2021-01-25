//En este espacio defino las funciones que se van a disparar cuando se envia o recibe info del servidor
//Utilizo "var" para aumentar la compatibilidad entre distintos navegadores web
var socket = io();
// crea un mensaje que me dice cuando estoy conectado con el servidor
socket.on('connect', function() {
    //cuando se conecte
    console.log('Conectado al servidor');
});
// Detecta cuando se pierde la conexion
// on escucha sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexion');
});
//Comunicacion entre frontend hacia el servidor
//los emit son para enviar info
socket.emit('enviarMensaje', {
    usuario: 'Alejandro',
    mensaje: 'Hola Mundo desde Socket'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Esuchar info
socket.on('enviarMensaje', function(resp) {
    console.log('Servidor: ', resp);
});