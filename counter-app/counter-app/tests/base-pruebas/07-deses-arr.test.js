import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
  test('debe retornar un string y un numero ', () => {
    const retorno = retornaArreglo();
    console.log(retorno);

    const [ letras, numeros ] = retornaArreglo();

    expect ( letras ).toBe('ABC');
    expect ( numeros ).toBe(123);

    expect( typeof letras ).toBe('string');
    expect( typeof numeros ).toBe('number');

    expect( retorno ).toEqual(['ABC', 123]);
  })
  
})
