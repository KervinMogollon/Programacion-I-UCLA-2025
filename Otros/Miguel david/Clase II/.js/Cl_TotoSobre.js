export default class todoSobre{
    constructor(){
        this.sumaMonto = 0;
    }
    procesarSobre(sobre){
        this.sumaMonto += sobre.calcTot()
    }

    devolverSumaMonto(){
        return this.sumaMonto;
    }
}