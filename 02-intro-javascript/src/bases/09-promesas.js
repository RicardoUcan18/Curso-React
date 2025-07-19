import { getHeroeById, getHeroesByOwner } from "./bases/08-imp-exp";


// const promesa = new Promise(
//   (resolve, reject) => {
//     setTimeout(
//       () => {
//         const heroe = getHeroeById(1);
//         //console.log('2 segundos despues')
//         resolve(heroe);
//         //reject('No se encontro el heroe')
//       }, 2000
//     )
//   }
// );

// promesa.then(
//   (heroe) => {
//     console.log(heroe);
//   }
// ).catch(
//   (err) => console.warn(err)
// )


const getHeroeByIdAsync = (id) => {
  return new Promise(
  (resolve, reject) => {
    setTimeout(
      () => {
        const heroe = getHeroeById(id);
        if (typeof heroe == 'undefined' )
          reject('No se encontro el heroe');
          else
        resolve(heroe);
        //reject('')
      }, 2000
    )
  }
);
}

getHeroeByIdAsync(2)
  .then(console.log )
  .catch( console.warn );
