import Caja from '../../src/models/Caja.js'

test('sin item, retorna 0', () => {
    const caja = new Caja(1,500,[],[]);
    expect(caja.calcularValores()).toBe(0);
});

test('caja con items 300 y 200 deberia retornar 500', () => {
    const caja = new Caja(2,500,[300,200],[]);
    expect(caja.calcularValores()).toBe(500);
});
