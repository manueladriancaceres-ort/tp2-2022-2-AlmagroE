export default class Factura {

    constructor(codigo,cliente,descripcion,items) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.descripcion = descripcion;
        this.items = items;
    }

    calcularTotal() {
        let suma = 0;
        for (let i = 0; i < this.items.length; i++) {
            suma += this.items[i];            
        }
        return suma;
    }
}

