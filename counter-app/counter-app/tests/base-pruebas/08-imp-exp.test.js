import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
test('getHeroeById debe retornar un héroe por ID', () => {
  
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
    });

    //se debe evaluar que en el arreglo que regresa sea de 3 elementos y que sean solo de DC
    expect(getHeroesByOwner('DC')).toHaveLength(3);
    expect(getHeroesByOwner('DC')).toEqual(expect.arrayContaining([
        expect.objectContaining({ owner: 'DC' })
    ]));

});

})
