import FileUtil from '../../src/service/FileUtil.js'

// Si encuentra el archivo y lo lee bien
test('El método leer debería retornar el contenido del archivo', () => {
    const fileUtil = new FileUtil("./resource/texto.txt");
    expect(fileUtil.leer()).toBe("Holi");
})

// Si encuentra el archivo y lo lee bien
test('El método leer debería lanzar una excepcion si no existe el archivo', () => {
    try {
        const fileUtil = new FileUtil("./resource/noExiste.txt");
        fileUtil.leer();
    } catch (error) {
        console.log(error);
        expect(error).toBe("No se encontro el archivo");
    }
    
})
