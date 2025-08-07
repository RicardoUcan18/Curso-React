import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas en 02 template string', () => {
  test('getSaludo debe retornar "Hola Alvaro" ', () => {
    
    const name = 'Alvaro';
    const saludo = getSaludo(name);


    expect(saludo).toBe(`Hola ${ name }`);

  })
  
})

