const persona = {
  nombre: 'Tony',
  apellido: 'stark',
  edad: 45,
  direccion: {
    ciudad: 'Akil',
    zip: 97990,
    lat: 12.1156,
    lng: 35.2654
  }
};
console.log(persona);

// asi no se clona
const persona2 = persona;
persona2.nombre = 'petter';

console.log(persona2);

// asi si

const peronsa3 = { ...persona };
persona3.nombre = 'petter';

console.log(persona3);