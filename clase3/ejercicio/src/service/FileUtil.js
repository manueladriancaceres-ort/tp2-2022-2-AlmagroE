import fs from 'fs'

class FileUtil  {

    constructor(archivo) {
        this.archivo = archivo;
    }

    leer() {
        return fs.readFileSync(this.archivo);
    }

    escribir() {

    }


}

export default FileUtil