export default class Cl_Mayores {
    constructor() {
        this.conEdad = 0
        this.conPersonas = 0
        this.Mayor = ""
    }
    procesar(Per) {
        this.conPersonas++

        if (Per.edad > 18) {
            this.conEdad++

        }

    }
    cantidadPersonas() {
        return this.conPersonas
    }
    cantidadMayoresEdad() {
        return this.conEdad
    }
    porcentaje() {
        return (this.conEdad / this.conPersonas) * 100
    }

}