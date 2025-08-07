import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas en 05-funciones', ()=>{
  test('get usuario ', () => {

    const testUSer = {
      uid: 'ABC123',
        username: 'El_Papi1502'
    };

    const user = getUser();
    expect(testUSer).toStrictEqual(user);

  });
  test('getUsuario activo', ()=> {

    const nombre = 'ricardo';
    const useractivo = getUsuarioActivo(nombre);
    expect(useractivo).toStrictEqual({uid: 'ABC567', username: nombre  });

  })
})