// funciones

function saludar(nombre) {
  return `Hola ${nombre}`;

}
const saludar2 = (nombre) => { return `Hola ${nombre}` };
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola mundo`;
const getUser = () => ({ uid: 'asdsd', name: 'Ricardo' });

const user = getUser();
console.log(user);

/*
// Tarea
//1. funcion flecha
2. retorna obj implicito
3. pruebas
*/

function getUsuarioActual(nombre) {
  return {
    uuid: 'asd',
    name: nombre
  }
}

const userActual = getUsuarioActual('Ricardo ucan');
console.log(userActual);

const getUsuarioActual2 = (nombre) => ({ uuid: 'dasd', name: nombre });
const userActual2 = getUsuarioActual2('Daniel ucan');
console.log(userActual2);
