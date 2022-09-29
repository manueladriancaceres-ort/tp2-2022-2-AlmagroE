import fs from 'fs'

class FileUtil {
    constructor(archivo) {
        this.archivo = archivo;
    }

    leerArchivo() {
        return fs.readFileSync(this.archivo,'utf8');
    }
}

export default FileUtil;