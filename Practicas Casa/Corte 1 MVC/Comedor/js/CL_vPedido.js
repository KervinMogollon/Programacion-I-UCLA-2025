export default class CL_vPedido{
    constructor(){
        this.inNomre = document.getElementById("pedidoForm_inNomre");
        this.inOrden = document.getElementById("pedidoForm_inOrden");
        this.inCantOrden = document.getElementById("pedidoForm_inCantOrden");
        this.inJugo = document.getElementById("pedidoForm_inJugo");
        this.brProcesar = document.getElementById("pedidoForm_brProcesar");
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