export default class Cl_Empresa {
     constructor() {
        this.acumPersonal = 0
        this.conCargo = 0
        this.conObrero = 0
        this.conAdministrativo = 0
     }
     procesar(Perso) {
        this.acumPersonal += Perso.tipo
        this.conCargo++

        if(Perso.tipo == "O") {
            this.conObrero++
            if(Perso.tipo == "A"){
                this.conAdministrativo
            }
                
        }

     }
     promedio() {
        return this.acumPersonal / this.conCargo
     }
     montoTotalPagado() {
        return this.promedio()
     }
}