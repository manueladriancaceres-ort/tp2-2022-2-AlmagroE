import FileUtil from '../../src/service/fileUtil.js';

test('el metodo leer, deberia retornar el conenido del archivo', () => {
    const textito = new FileUtil('./resource/texto.txt');
    expect(textito.leer()).toBe('prueba');
  });

  test('el metodo leer deberia lanzar una excepcion si no existe el archivo', () => {
    try {
        const fileUtil = new FileUtil('./resource/noexiste.txt');
        fileUtil.leer();
    } catch(e) {
        expect(e).toBe('no se encontro el archivo');
    }
});
