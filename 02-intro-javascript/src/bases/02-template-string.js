const nombre = 'Ricardo';
const apellido = 'Ucan';

//const nombrecompleto = nombre + ' ' + apellido;
const nombrecompleto = ` Hola soy ${nombre} ${apellido} `;
console.log(nombrecompleto);

function getSaludo() {
  return 'Hola en funcion';
}

console.log(`funcion ${getSaludo()}`);