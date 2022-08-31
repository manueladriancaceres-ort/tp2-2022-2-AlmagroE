import FileUtil from './service/FileUtil.js';
import FacturaProceso from './service/FacturaProceso.js'

const fileUtil = new FileUtil('./resource/facturas.json');
const lista = JSON.parse(fileUtil.leer());

const facturaProceso = new FacturaProceso(lista);
console.log(facturaProceso.verificarFactura());

//const facturaProceso = new FacturaProceso(lista);
//console.log(`las facturas con diferencia son ${facturaProceso.verificarFactura()}`);

//
// objetivo: leer y procesar un archivo de facturas
// en formato json
// ver si hay diferencia entre la suma de items y el importe
//
// 1- leer achivo
// 2- cuales tienen diferencia
//



