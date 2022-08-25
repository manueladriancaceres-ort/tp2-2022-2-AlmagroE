import fs from 'fs'

class FileUtil  {

    constructor(archivo) {
        this.archivo = archivo;
    }

    leer() {
        try {
            return fs.readFileSync(this.archivo,'utf-8');
        } catch (error) {
            throw 'no se encontro el archivo';
        }
    }


}

export default FileUtil