const crearMensaje = (nombre, mensaje) => {

  return {
    nombre,
    mensaje,
    feha: new Date().getTime()
  }
}

module.exports = {
  crearMensaje
}
