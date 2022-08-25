import FacturaProceso from '../../src/service/FacturaProceso.js'

test('Lista de facturas con alguna diferencia, deberia devolver las que tiene diferencia ', () => {
    const lista = [
        {codigo:1,importe:3000,items:[1000,2000]},
        {codigo:1,importe:3000,items:[1000,2000]},
        {codigo:1,importe:3000,items:[1000,2000]},
        {codigo:1,importe:3000,items:[1000,2000]}
    
    ]
    const FacturaProceso = new FacturaProceso();
    expect().toBe('prueba');
  });