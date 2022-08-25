import FileUtil from '../../src/service/FileUtil.js';


/*
test('el metodo leer deberia retornar el contenido del texto del archivo', () => {
    const fileUtil = new FileUtil('./resource/texto.txt');
    expect(fileUtil.leer()).toBe('prueba');
  });
  
  */

  test('el metodo leer deberia lanzar una excepcion si no existe el archivo', () => {
    try {
        const fileUtil = new FileUtil('./resource/noexiste.txt');
        fileUtil.leer();
    } catch (error) {
        expect(error).toBe('no se encontro el archivo');
        console.log(error);
    }
  });