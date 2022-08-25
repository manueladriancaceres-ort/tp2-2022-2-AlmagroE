console.log("buenas noches");


import FileUtil from "./service/FileUtil.js";
import FacturaProceso from './service/FacturaProceso.js'

const fileUtil = new FileUtil('./resource/facturas.json');
const lista = JSON.parse(fileUtil.leer());

const facturasProceso = new FacturaProceso(lista);
console.log(`las facturas con diferencia son ${facturaProceso.verificarFactura()}`);
