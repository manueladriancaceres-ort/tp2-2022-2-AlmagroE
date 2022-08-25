import FileUtil from '../../src/service/FileUtil.js'

test('el metodo leer deberia retornar el contenido del archivo', () => {
    const fileUtil = new FileUtil('./resource/texto.txt');
    expect(fileUtil.leer()).toBe('prueba');
});