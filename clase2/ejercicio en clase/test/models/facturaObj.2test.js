import {factura} from './models/facturaObj.js'
console.log(factura);

factura.codigo = 1000
console.log(factura.codigo);

let unaVariableCualquier = 'cliente';
console.log(factura[unaVariableCualquier]);

factura.total = 10000;
console.log(factura);

