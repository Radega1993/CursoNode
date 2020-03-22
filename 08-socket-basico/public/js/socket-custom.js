var socket = io();

socket.on('connect', function(){
  console.log('Conectado al servidor');
});

// Escuchar informacion
socket.on('disconnect', function() {
  console.log('Perdimos conexión con el servidos');
});

// Enviar informacion
socket.emit('enviarMensaje', {
  usuario: 'Raul',
  mensaje: 'Hola mundo'
}, function(resp) {
  console.log('respuesta server: ', resp);
});

// escuchar información
socket.on('enviarMensaje', function(mensaje) {
  console.log('servidor:', mensaje);
});
