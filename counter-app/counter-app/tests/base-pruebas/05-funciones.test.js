import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('pruebas en 05-funciones.js', () => {
  test('getUser debe retornar un onketo ', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        

        expect(testUser).toEqual(user);
  })
  
  test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'juan';
        const usuarioActivo = {
            uid: 'ABC567',
            username: nombre
        };

        const user = getUsuarioActivo(nombre);

        expect(usuarioActivo).toEqual(user);
  })
})
