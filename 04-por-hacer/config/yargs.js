const argv = require('yargs')
  .command('crear', 'Crea un elemento por hacer', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: 'Descripción de la tarea'
    }
  })
  .command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: 'Descripción de la tarea'
    },
    completado: {
      alias: 'c',
      default: true,
      desc: 'Marca como completado o pendiente la tarea'
    }
  })
  .help()
  .argv;


module.exports = {
  argv
}
