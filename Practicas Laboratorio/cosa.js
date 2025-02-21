export default class Tipos {
    constructor(tipo1, tipo2, tipo3) {
        this.tipo1 = tipo1;
        this.tipo2 = tipo2;
        this.tipo3 = tipo3;
    }

    mayorTipo() {
        if ((this.tipo1 = this.tipo2) && (this.tipo2 = tipo3)) {
            return "todos los tipos son iguales"
        }
        else if ((this.tipo1 = this.tipo2) && (this.tipo1 > this.tipo3)) {
            return "tipo 1 y tipo 2 son los mayores"
        }

        else if ((this.tipo1 = tipo3) && (this.tipo1 > this.tipo2)) {
            return "tipo 1 y tipo 3 son los mayores"
        }

        else if ((this.tipo2 = tipo3) && (this.tipo2 > this.tipo1)) {
            return "tipo 2 y tipo 3 son los mayores"
        }

        else if ((this.tipo1 > this.tipo2) && (this.tipo2 = this.tipo3)) {
            return "el tipo uno es el mayor"
        }

        else if ((this.tipo2 > this.tipo1) && (this.tipo1 = tipo3)) {
            return "tipo 2 es el mayor"
        }

        else
            return "tipo 3 es el mayor"
    }
}

