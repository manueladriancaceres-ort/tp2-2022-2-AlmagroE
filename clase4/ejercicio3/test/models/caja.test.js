import Caja from "../../src/models/caja.js"

const caja = new Caja(1, 100, [50,30,20], [{id:1,tipo:'I',importe:100}]);
const caja2 = new Caja(1, 100, [50,40,20], [{id:1,tipo:'I',importe:100}]);

test('debe retornar 100 como sumatoria de valores ', () => {
    expect(caja.calcularValor()).toBe(100);
});

test('debe retornar 100 como monto importe ', () => {
    expect(caja.obtenerImporte()).toBe(100);
});

test('debe retornar que no hay diferencia (false)', () => {
    expect(caja.hayDiferencia()).toBe(false);
});

test('debe retornar que hay diferencia (true)', () => {
    expect(caja2.hayDiferencia()).toBe(true);
});