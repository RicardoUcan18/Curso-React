// desestructuracion de objetos
const perosna = {
  nombre: 'Ricardo',
  edad: 30,
  clave: 'iroman'
}

// const {nombre: nombre2, edad } = perosna;
// console.log(nombre2, edad);

function useContext({clave, nombre, edad, rango= 'capi'}) {
  // console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 56.5552,
      lng: -25.5654
    }
  }
  
}

const {nombreClave, anios, latlng: {lat, lng}} = useContext(perosna);
console.log(nombreClave, anios);
console.log(lat, lng);