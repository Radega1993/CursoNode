//requireds
const fs = require('fs');


let crearArchivo = (base) => {
  return new Promise(function(resolve, reject) {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`)
    }

    let data = '';
    for (let i = 1; i <= 10; i++) {
      data += `${base} * ${i} = ${base*i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

      if (err){
        reject(err);
      } else {
        resolve(`tabla-${base}.txt`);
      }

    });

  });
}

module.exports = {
  crearArchivo
};
