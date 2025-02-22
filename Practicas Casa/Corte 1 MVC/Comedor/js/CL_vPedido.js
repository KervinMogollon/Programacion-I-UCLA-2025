export default class CL_vPedido{
    constructor(){
        this.inNomre = document.getElementById("pedidoFor_inNomre");
        this.inOrden = document.getElementById("pedidoFor_inOrden");
        this.inCantOrden = document.getElementById("pedidoFor_inCantOrden");
        this.inJugo = document.getElementById("pedidoFor_inJugo");
        this.brProcesar = document.getElementById("pedidoFor_brProcesar");
    }

    get nombre(){
        return this.inNomre.value
    }

    get orden(){
        return +this.inNomre.value
    }

    get CantOrden(){
        return +this.inNomre.value
    }

    get jugo(){
        return this.inNomre.value
    }
}