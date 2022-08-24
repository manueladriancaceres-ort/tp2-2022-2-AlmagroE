class Factura
{

    constructor(cod, importe, item)
    {
        this.cod = cod;
        this.importe = importe;
        this.item = item;
    }

    calcularTotalesDeItems(){
        // acumula en suma todos los items desde 0
    return this.item.reduce((suma,item) => suma + item,0);
}


}




//exportar clase factura
export default Factura;