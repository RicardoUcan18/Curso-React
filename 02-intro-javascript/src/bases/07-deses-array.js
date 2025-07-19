// desestructuracion de arrays
const personajes = ['goku', 'vegeta', 'gohan'];
const [ ,, personaje1] = personajes;
console.log(personaje1);

const getArregle = () => {
  return ['abc', 123];
}

const [letras, numeros] = getArregle();
console.log(letras, numeros);

const useState = (valor) => { 
  return [valor, () => { console.log('hola mundo'); }];
}

const [nombre, setNombre] = useState('hh');
console.log(nombre);
setNombre();
