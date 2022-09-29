console.log("Sistema");

import Cliente from './models/Cliente.js'

const cliente:Cliente = new Cliente(25235);

console.log(cliente.getNumero());
