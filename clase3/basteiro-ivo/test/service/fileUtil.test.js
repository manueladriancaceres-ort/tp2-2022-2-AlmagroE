import FileUtil from "../../src/service/FileUtil";

test("el metodo leer deberia retornar el contenido de texto", () => {
    const fileUtil = new FileUtil('./resource/texto.txt');
    expect(fileUtil.leer()).toBe('prueba');
});

test("el metodo leer deberia lanzar una excepcion si no existe el archivo", () => {
    try {
        const fileUtil = new FileUtil('./resource/noexiste.txt');
        fileUtil.leer();
    } catch (error) {
        expect(error).toBe('no se encontro el archivo')
    }
});