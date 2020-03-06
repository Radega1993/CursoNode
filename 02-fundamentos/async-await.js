let getNombre = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('Raül');
    }, 3000);
  });
};

let saludo = async() => {
  nombre = await getNombre();

  return `Hola ${ nombre}`;
}

saludo().then(mensaje => {
  console.log(mensaje);
})
