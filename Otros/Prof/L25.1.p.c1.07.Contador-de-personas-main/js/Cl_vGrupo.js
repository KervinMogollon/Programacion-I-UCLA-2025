import Cl_vPersona from "./Cl_vPersona.js";
import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_vGrupo {
  constructor() {
    this.controlador = null;
    this.salida = document.getElementById("mainForm_salida");
    this.vPersona = new Cl_vPersona();
    this.vPersona.btProcesar.onclick = () => this.controlador.procesarPersona();
  }
  procesarPersona() {
    this.mPersona = new Cl_mPersona({
      nombre: this.vPersona.nombre,
      sexo: this.vPersona.sexo,
    });
    return this.mPersona;
  }
  reportarPersona(cntPersonas, cntHombres, cntMujeres) {
    this.salida.innerHTML = `
    Cantidad de personas: ${cntPersonas}<br>
    Cantidad de hombres: ${cntHombres}<br>
    Cantidad de mujeres: ${cntMujeres}<br>
    `;
  }
}
