export default class CL_mComedor {
    constructor({ iniEmpanadas, iniPastelistos, iniJugo }) {
        this.acuEmpanadas = iniEmpanadas;
        this.acuPastelitos = iniPastelistos;
        this.acuJugos = iniJugo;
    }

    set iniEmpanadas(iniEmpanadas) {
        this._iniEmpanadas = +iniEmpanadas;
    }

    get iniEmpanadas() {
        return this._iniEmpanadas
    }

    set iniPastelistos(iniPastelistos) {
        this._iniPastelistos = +iniPastelistos;
    }

    get iniPastelistos() {
        return this._iniPastelistos
    }

    set iniJugo(iniJugo) {
        this._iniJugo = +iniJugo;
    }

    get iniJugo() {
        return this._iniJugo
    }

    procesarPedido(ped) {
        if (ped.orden === 1)
            this.acuEmpanadas -= ped.cantOrden

        if (ped.orden === 2)
            this.acuPastelitos -= ped.cantOrden

        if (ped.jugo === "si") 
            this.acuJugos -= 1
    }

    restoEmpanadas() {
        return this.acuEmpanadas
    }

    restoPastelitos() {
        return this.acuPastelitos
    }

    restosJugos() {
        return this.acuJugos
    }
}