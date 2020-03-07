//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

  console.log('==================='.red);
  console.log(`tabla del ${ base }`.red);
  console.log('==================='.red);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base*i}`);
  }
}

let crearArchivo = (base, limite = 10) => {
  return new Promise(function(resolve, reject) {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`)
      return;
    }

    let data = '';
    for (let i = 1; i <= limite; i++) {
      data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

      if (err) {
        reject(err);
      } else {
        resolve(`tabla-${base}.txt`);
      }

    });

  });
}

module.exports = {
  crearArchivo,
  listarTabla
};
