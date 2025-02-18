export default class Cl_vEmpleado {
  constructor() {
    this.inNombre = document.getElementById("empleadoForm_inNombre");
    this.inTipo = document.getElementById("empleadoForm_inTipo");
    this.inGana = document.getElementById("empleadoForm_inGana");
    this.btProcesar = document.getElementById("empleadoForm_btProcesar");
  }
  get nombre() {
    return this.inNombre.value;
  }
  get tipo() {
    return +this.inTipo.value;
  }
  get gana() {
    return +this.inGana.value;
  }
}
