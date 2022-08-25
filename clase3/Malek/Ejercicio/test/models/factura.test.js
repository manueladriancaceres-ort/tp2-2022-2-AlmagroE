import Factura from '../../src/models/Factura.js';



//Caso de prueba 1
test('para una factura sin items, deberia devolver 0', () => {
    const factura = new Factura(1,1000,[]);
    expect(factura.calcularTotalesDeItems()).toBe(0);
  });


  //Caso de prueba 2

  test('para una factura con items [300, 500], deberia devolver 800', () => {
    const factura = new Factura(1,1000,[300,500]);
    expect(factura.calcularTotalesDeItems()).toBe(800);
  });

  test('Importe menos suma de items, igual de 0, deberia dar falso',()=>{
    const factura2=new Factura(1,800,[300, 500]);
    expect(factura2.hayDiferencia()).toBe(false);
  })

  test('Importe menos suma de items, distinto de 0, deberia dar falso',()=>{
    const factura=new Factura(1,1000,[5,2]);
    expect(factura.hayDiferencia()).toBe(true);
  })
