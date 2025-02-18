export default class oficina {
    constructor(montCaja, porcComision) {
        this.montCaja = montCaja;
        this.porcComision = porcComision;
        this.acMontFnal = 0;
        this.cont2Meses = 0;
        this.menorpres = 999999;
        this.cliMnor = "";
    }

    set montCaja(montCaja) {
        this._montCaja = +montCaja;
    }

    get montCaja() {
        return this._montCaja;
    }

    set porcComision(porcComision) {
        this._porcComision = +porcComision;
    }

    get porcComision() {
        return this._porcComision;
    }

    procesarPrestamos(pres) {

        //monto final disponible
        this.montCaja -= pres.prestamo

        // Cantidad de clientes que pidieron por 2 meses
        if (pres.meses === 2) {
            return this.cont2Meses++
        }

        if (pres.prestamo < this.menorpres) {
            this.menorpres = pres.prestamo
            this.cliMnor = pres.cliente
        }
    }

    contCli2Meses() {
        return this.cont2Meses
    }

    calcCli2Meses() {
        return this.cliMnor
    }

}