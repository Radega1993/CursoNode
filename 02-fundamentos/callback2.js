let empleados = [{
  id: 1,
  nombre: 'Raül'
}, {
  id: 2,
  nombre: 'pepe'
}, {
  id: 3,
  nombre: 'Laura'
}];

let salarios = [{
  id: 1,
  salario: '1000'
}, {
  id: 2,
  salario: '500'
}];

let getEmpleado = (id, callback) => {
  let empleadoBD = empleados.find(empleado => empleado.id === id);

  if (!empleadoBD) {
    callback(`No existe un empleado con ID ${ id }`)
  } else {
    callback(null, empleadoBD);
  }
}

let getSalario = (empleado, callback) => {
  let salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    callback(`No existe un salario para el usuario ${ empleado.nombre }`)
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario
    });
  }
}

getEmpleado(1, (err, empleado) => {
  if (err) {
    return console.log(err);
  }
  getSalario(empleado, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(`El salario de ${res.nombre} es de ${res.salario}€ `);
  });

});
