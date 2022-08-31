import Factura from '../models/Factura.js'

class FacturaProceso {
    listaFacturas = [];

    constructor(listaFacturas) {
        this.listaFacturas = listaFacturas;
    }

    facturasConDiferencia() {
        const rta = this.listaFacturas.filter(
            factura => { 
                const fa = new Factura(factura.codigo,factura.importe,factura.items) ;
                return fa.hayDiferencia();
            }
        );
        return rta;
    }
}

export default FacturaProceso;