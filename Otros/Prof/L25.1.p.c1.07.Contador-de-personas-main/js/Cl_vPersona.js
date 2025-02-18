export default class Cl_vPersona {
  constructor() {
    this.inNombre = document.getElementById("personaForm_inNombre");
    this.inSexo = document.getElementById("personaForm_inSexo");
    this.btProcesar = document.getElementById("personaForm_btProcesar");
  }
  get nombre() {
    return this.inNombre.value;
  }
  get sexo() {
    return this.inSexo.value;
  }
}
