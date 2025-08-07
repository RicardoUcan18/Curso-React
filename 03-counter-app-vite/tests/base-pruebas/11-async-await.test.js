import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('pruebas en 11-async-await', () => {
  test('getImagen debe de regresar una url ', async  () => { 
      const url = await getImagen();
      // console.log(url);
      expect(typeof url).toBe('string');
  })
})