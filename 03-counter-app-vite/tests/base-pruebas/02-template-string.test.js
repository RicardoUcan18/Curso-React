import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas 02-template-string', () =>{

  test('pruebas getNombre', () => {
    const nombre = 'ricardo';
    const mensaje = getSaludo(nombre);
    expect(mensaje).toBe(`Hola ${nombre}`);

  })
})