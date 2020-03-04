function sumar(a, b) {
  return a + b;
}

console.log(sumar(10, 20));

// las 2 funciones son iguales
let sumarf = (a, b) => a + b;

console.log(sumarf(10, 20));

//ejercicio
function saludar() {
  return 'Hola mundo';
}

console.log(saludar());

let saludarf = () => 'Hola mundo';

console.log(saludarf());

//test
let deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  getNombre: function() {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
  }
};

//transformacion
let deadpoolf = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  getNombre() {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
  }
};

console.log(deadpoolf.getNombre());
