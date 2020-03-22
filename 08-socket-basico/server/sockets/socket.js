const { io } = require('../server');

io.on('connection', (client) => {
  console.log('Usuario conectado');

  client.emit('enviarMensaje', {
    usuario: 'Administrador',
    mensaje: 'Bienvenido a esta applicación'
  })

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // escuchar al cliente
  client.on('enviarMensaje', (data, callback) => {
    // console.log(mensaje);

    client.broadcast.emit('enviarMensaje', data);

    //if (mensaje.usuario) {
    //  callback({
    //    resp: 'TODO SALIO BIEN'
    //  });
    //} else {
    //  callback({
    //    resp: 'TODO SALIO MAL!!!!!!!!'
    //  });
    //}

  })
});
