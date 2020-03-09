const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
  });
};

const cargarDB = () => {

  try {

    listadoPorHacer = require('../db/data.json');

  } catch (e) {
    listadoPorHacer = []
  }

};

const crear = (descripcion) => {

  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };

  listadoPorHacer.push(porHacer);

  guardarDB();

  return porHacer;
};

const getListado = () => {

  cargarDB();

  return listadoPorHacer;
}

module.exports = {
  crear,
  getListado
};
