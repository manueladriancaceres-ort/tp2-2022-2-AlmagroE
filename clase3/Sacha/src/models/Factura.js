class Factura {

    constructor(codigo, importe, items) {
        this.codigo = codigo;
        this.importe = importe;
        this.items = items;
    }

    calcularTotalesDeItems() {
        return this.items.reduce((sum,item) => sum + item, 0)
    }

    hayDiferencia() {
        return this.importe != this.items.reduce((sum, item) => sum + item, 0)
    }
}

export default Factura