class Caja {
    constructor(codigo,importe,valores,comprobantes) {
        this.codigo = codigo;
        this.importe = importe;
        this.valores = valores;
    }

    calcularValores() {
        return this.valores.reduce((sum,item) => sum + item , 0);
    }

    calcularComprobantes() {
        
    }
}

export default Caja;