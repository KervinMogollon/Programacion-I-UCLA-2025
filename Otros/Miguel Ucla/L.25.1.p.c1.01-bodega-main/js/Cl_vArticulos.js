export default class Cl_vArticulos {
    constructor() {
        this.inCosto = document.getElementById("empleadoForm_inCosto");
        this.btProcesar = document.getElementById("empleadoForm_btProcesar");
    }
    get costo() {
        return +this.inCosto.value;
    }
}
