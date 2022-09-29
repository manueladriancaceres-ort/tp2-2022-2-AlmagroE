class Caja {

    constructor(codigo,importe,valores, comprobantes) {
        this.codigo = codigo;
        this.importe = importe;
        this.valores = valores;
        this.comprobantes = comprobantes;
    }

    calcularValor() {
        return this.valores.reduce((sum,valor) => sum+valor,0);
    }

    obtenerImporte(){
        return this.comprobantes.reduce(
            (sum, comp) => comp.tipo === 'I'?sum+comp.importe:sum-comp.importe,0);
    }

    hayDiferencia() {
        return this.calcularValor() !== 
        this.obtenerImporte()
    }

}

export default Caja;
