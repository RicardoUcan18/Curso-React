test('esta pruebe debe fallar', () => {

    if(0 === 2){
        throw new Error('Esta prueba debe fallar');
    }
});