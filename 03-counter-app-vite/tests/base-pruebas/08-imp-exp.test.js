import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp', () => {
  test('getHeroeById debe de retornar un heroe por id ', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
    })
  });

  test('getHeroeById debe ser undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

   test('getHeroesByOwner debe ser DC', () => {
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    expect(hero).toHaveLength(3);
    expect(hero).toEqual(heroes.filter((hero)=> hero.owner === owner));

  });
  
   test('getHeroesByOwner debe ser marvel', () => {
    const owner = 'Marvel';
    const hero = getHeroesByOwner(owner);
    expect(hero).toHaveLength(2);
    expect(hero.length).toBe(2);
    expect(hero).toEqual(heroes.filter((hero)=> hero.owner === owner));
    
  });
})