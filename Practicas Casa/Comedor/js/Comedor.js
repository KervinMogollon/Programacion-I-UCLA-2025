export default class CL_Comedor {
    constructor() {
        this.acuEmpanadas = 20;
        this.acuPastelitos = 15;
        this.acuJugos = 10;
    }

    procesarPedido(ped) {
        if (ped.orden === "empanada") {
            this.acuEmpanadas -= ped.cantOrden
        }
        else { this.acuPastelitos -= ped.cantOrden }

        if (ped.jugo === "si") {
            this.acuJugos -= 1
        }
    }

    restoEmpanadas(){
        return this.acuEmpanadas
    }

    restoPastelitos(){
        return this.acuPastelitos
    }

    restosJugos(){
        return this.acuJugos
    }
}