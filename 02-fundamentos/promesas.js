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

let getEmpleado = (id) => {

  return new Promise((resolve, reject) => {

    let empleadoBD = empleados.find(empleado => empleado.id === id);

    if (!empleadoBD) {
      reject(`No existe un empleado con ID ${ id }`)
    } else {
      resolve(empleadoBD);
    }
  });
}

let getSalario = (empleado) => {

  return new Promise((resolve, reject) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
      reject(`No existe un salario para el usuario ${ empleado.nombre }`)
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario
      });
    }
  });

}

getEmpleado(3).then(empleado => {

    return getSalario(empleado);
  })
  .then((resp) => {
    console.log(`El salario ${ resp.nombre} es de ${resp.salario}€ `);
  })
  .catch((err) => console.log(err));
