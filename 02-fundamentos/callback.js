//setTimeout( () => {
//  console.log('Hola mundo');
//}, 3000);

let getUsuarioById = (id, callback) => {
  let usuario = {
    nombre: 'Raül',
    id
  }

  if (id === 20) {
    callback(`El usuario con id ${id}, no existe en la BD`);
  } else {
    callback(null, usuario);
  }
}

getUsuarioById(1, (err, usuario) => {
  if (err) {
    return console.log(err);;
  }
  console.log('usuario base de datos', usuario);
});
