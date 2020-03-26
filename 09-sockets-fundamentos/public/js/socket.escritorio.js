var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
  window.location = 'index.html';
  throw new Error('El escritorio es necesario');
};

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
  socket.emit('atenderTicket', {
    escritorio: escritorio
  }, function(resp) {
    if (resp === 'No hay tickets') {
      label.text(resp)
      alert(resp);
      return;
    }
    console.log(resp);
    label.text('Ticket ' + resp.numero);
  });
});

socket.on('connect', function() {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
  console.log('Desconectado del servidor');
});
