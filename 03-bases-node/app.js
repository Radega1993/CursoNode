//requires
const { crearArchivo } = require('./multiplicar/multiplicar');

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
  .then((archivo) => console.log(`El archivo tabla-${base}.txt a sido creado!`))
  .catch((err) => console.log(err));
