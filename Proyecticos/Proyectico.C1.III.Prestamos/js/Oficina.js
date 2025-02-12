export default class CL_Oficina {
    constructor(montoCaja, porcComision) {
        this.montoCaja = montoCaja;
        this.porcComision = porcComision;
        this.cntClientes2M = 0;
        this.prestamoMenor = Infinity;
        this.clienteMenor = "";
    }

    procesarPrestamos(prest) {
        this.montoCaja -= prest.prestamos

        if (prest.meses === 2)
            this.cntClientes2M++

        if (prest.prestamos < this.prestamoMenor) {
            this.prestamoMenor = prest.prestamos
            this.clienteMenor = prest.cliente
        }
    }

    prestamos2Meses(){
        return this.cntClientes2M
    }

    menorCliente(){
        return this.clienteMenor
    }
}