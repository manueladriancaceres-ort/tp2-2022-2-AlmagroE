import FileUtil from '../../src/services/FileUtil.js';

test('metodo leer deberia devolver el contenido', () => {
    const fileUtil = new FileUtil("./resource/texto.txt");
    let datosEsperados = 'prueba';
    expect(fileUtil.leerArchivo()).toBe(datosEsperados);
});