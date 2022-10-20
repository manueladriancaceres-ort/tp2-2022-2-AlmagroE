console.log("Sistema");

import { ProductoDaoMongoDb } from "./repository/ProductoDaoMongoDb.js";
import Producto from "./models/Producto.js";

const productoDaoMongoDb : ProductoDaoMongoDb = new ProductoDaoMongoDb();

//const producto: Producto = new Producto(1,"Tele",120000);
//await productoDaoMongoDb.add(producto);
console.log(await productoDaoMongoDb.findAll());


/*
import {ClienteDaoMongoDb} from './repository/ClientesDaoMongoDb.js'
import Cliente from './models/Cliente.js'
const clienteDaoMongoDb : ClienteDaoMongoDb = new ClienteDaoMongoDb();
// const cliente:Cliente = new Cliente(45645);
// await clienteDaoMongoDb.add(cliente);
console.log(await clienteDaoMongoDb.delete(25235));
console.log(await clienteDaoMongoDb.findAll());
console.log(await clienteDaoMongoDb.get(45645));
*/ 

/*
import {ConectarMongoDb} from './repository/ConectarMongoDb.js'
const conexionMongoDb : ConectarMongoDb = new ConectarMongoDb();
conexionMongoDb.conectar();
*/


// clase anterior
/*
import Cliente from './models/Cliente.js'
const cliente:Cliente = new Cliente(25235);
console.log(cliente.getNumero());
*/