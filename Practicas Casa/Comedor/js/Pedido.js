export default class CL_Pedido {
    constructor(nombre, orden, CantOrden, jugo) {
        this.nombre = nombre;
        this.orden = orden;
        this.CantOrden = CantOrden;
        this.jugo = jugo;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre
    }

    set orden(orden) {
        this._orden = orden;
    }

    get orden() {
        return this._orden
    }

    set CantOrden(CantOrden) {
        this._cantOrden = CantOrden;
    }

    get CantOrden() {
        return this._cantOrden
    }

    set jugo(jugo) {
        this._jugo = jugo;
    }

    get jugo() {
        return this._jugo
    }

    comida() {
        switch (this.orden) {
            case "empanadas":
                return 20;
                break;
            case "pastelitos":
                return 10;
                break;
        }
    }

    cantComida(){
        return this.comida() * this.CantOrden
    }


}