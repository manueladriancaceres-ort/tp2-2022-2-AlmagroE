import Factura from '../../src/models/Factura.js';

test('para una factura sin items, deberia devolver 0', () => {
    const factura = new Factura(1, 1000, []);
    expect(factura.calcularTotalesDeItems()).toBe(0);
})

test('para una factura con items [300, 500], deberia devolver 800', () => {
    const factura = new Factura(1, 1000, [300, 500]);
    expect(factura.calcularTotalesDeItems()).toBe(800);
})

test('importe menos suma de items igual a 0 deberia dar falso', () => {
    const factura = new Factura(1, 800, [300, 500]);
    expect(factura.hayDiferencia()).toBe(false);
})


test('importe menos suma de items distinto de 0 deberia dar true', () => {
    const factura = new Factura(1, 1000, []);
    expect(factura.hayDiferencia()).toBe(true);
})


