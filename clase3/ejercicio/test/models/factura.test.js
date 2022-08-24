import Factura from '../../src/models/Factura.js';

// caso de prueba 1
test('para una factura sin items, deberia devolver 0', () => {
    const factura = new Factura(1,1000,[]);
    expect(factura.calcularTotalesDeItems()).toBe(0);
});

// caso de prueba 2
test('para una factura con items [300,500] , deberia devolver 800', () => {
    const factura = new Factura(1,1000,[300,500]);
    expect(factura.calcularTotalesDeItems()).toBe(800);
});
