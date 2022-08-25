console.log("Sistema");

// objetivo: leer y procesar un archivo de facturas 
// en formato json
//ver si hay diferencias

import FileUtil from './service/fileUtil.js';
import FacturaProceso from './service/FacturaProceso.js'
const fileUtil = new FileUtil('../resource/facturas.json')

const lista = JSON.parse(fileUtil.leer());
const facturaProceso = new FacturaProceso(lista);

console.log(`Las facturas con diferencia son ${facturaProceso.verificiarFactura()}`);