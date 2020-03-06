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

let getEmpleado = async (id) => {
  let empleadoBD = empleados.find(empleado => empleado.id === id);

  if (!empleadoBD) {
    throw new Error(`No existe un empleado con ID ${ id }`)
  } else {
    return empleadoBD;
  }

}

let getSalario = async (empleado) => {

  let salarioDB = salarios.find(salario => salario.id === empleado.id);

  if (!salarioDB) {
    throw new Error(`No existe un salario para el usuario ${ empleado.nombre }`);
  } else {
    return {
      nombre: empleado.nombre,
      salario: salarioDB.salario
    };
  }

}

let getInforacion = async (id) => {
  let empleado = await getEmpleado(id);
  let resp = await getSalario(empleado);

  return `${resp.nombre} tiene un salario de ${ resp.salario}€`;
}

getInforacion(1)
  .then((mensaje) => console.log(mensaje))
  .catch((err) => console.log(err));
