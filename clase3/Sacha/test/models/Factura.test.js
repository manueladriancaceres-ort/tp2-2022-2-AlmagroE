import Factura from '../../src/models/Factura.js'

// caso de prueba 1
test('Para una factura sin items debería devolver 0', () => {
    const factura = new Factura(1, 1000, []);
    expect(factura.calcularTotalesDeItems()).toBe(0);
})

// caso de prueba 2
test('Para una factura con items [300, 500] debería devolver 800', () => {
    const factura = new Factura(1, 1000, [300,500]);
    expect(factura.calcularTotalesDeItems()).toBe(800);
})

// caso de prueba 3 (hay diferencia)
test('Para una factura de importe 1000 e items [300, 500] debería devolver true', () => {
    const factura = new Factura(1, 1000, [300, 500]);
    expect(factura.hayDiferencia()).toBe(true)
})

// caso de prueba 4 (no hay diferencia)
test('Para una factura de importe 1000 e items [500, 500] debería devolver false', () => {
    const factura = new Factura(1, 1000, [500, 500]);
    expect(factura.hayDiferencia()).toBe(false)
})