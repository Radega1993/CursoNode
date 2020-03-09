//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

  case 'listar':

    let listado = porHacer.getListado();

    for (let tarea of listado) {
      console.log('=========Pro Hacer========='.green);
      console.log(tarea.descripcion);
      console.log('Estado: ', tarea.completado);
      console.log('==========================='.green);
    }

    break;

  case 'actualizar':
    console.log('actualizar');
    break;
  default:
    console.log('comando no definido');
}
