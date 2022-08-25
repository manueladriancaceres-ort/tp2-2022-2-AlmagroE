import FacturaProceso from "../../src/service/FacturaProceso";

test("Lista de facturas con alguna diferencia deberia devolver las que tienen diferencia", () => {
    const lista = [
        {
          codigo: 1,
          importe: 3000,
          items: [1000, 2000]
        },
        {
          codigo: 2,
          importe: 4000,
          items: [1000, 2000]
        },
        {
          codigo: 3,
          importe: 5000,
          items: [3000, 2000]
        },
        {
          codigo: 4,
          importe: 2000,
          items: [1000, 2000]
        }
      ];
    const facturaProceso = new FacturaProceso();
    expect().toBe(3);
});
