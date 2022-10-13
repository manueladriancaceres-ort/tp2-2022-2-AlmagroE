console.log("Sistema");
import { ClienteDaoMongoDb } from './repository/ClientesDaoMongoDb.js';
const clienteDaoMongoDb = new ClienteDaoMongoDb();
// const cliente:Cliente = new Cliente(45645);
// await clienteDaoMongoDb.add(cliente);
console.log(await clienteDaoMongoDb.delete(25235));
console.log(await clienteDaoMongoDb.findAll());
console.log(await clienteDaoMongoDb.get(45645));
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
