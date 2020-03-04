
let nombre = 'wolverine';

if (true) {
  let nombre = 'magneto';
}

console.log(nombre); //solo puedes declarar un let por scope

let i;

for (let i = 0; i <=5; i++){
    console.log(`i: ${i}`);
}

console.log(i); //undefine porque esta en scope diferente
