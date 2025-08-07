
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe ', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then(hero => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      })
      done(); // para esperar a las funcionces asincronas
    })
  });
  test('getHeroeByIdAsync debe dar un error si el heroe no existe ', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
    .then( hero => {
      expect(hero).toBeFalsy();
      done();
    })
    .catch(
      error => {
        console.log(error + ' ' + id);
        done();
      }
    )
  });
})