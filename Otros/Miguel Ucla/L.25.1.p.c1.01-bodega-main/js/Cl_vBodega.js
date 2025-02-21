import Cl_vArticulos from "./Cl_vArticulos.js";
import Cl_mArticulos from "./Cl_mArticulos.js";
export default class Cl_vBodega {
  constructor() {
    this.controlador = null
    this.lbltotalGanancias = document.getElementById("mainFrom_lbltotalGanancias");


    this.vArticulos = new Cl_vArticulos();
    this.vArticulos.btProcesar.onclick = () =>
      this.controlador.procesarArticulos();
  }
  procesarArticulos() {
    this.mArticulos = new Cl_mArticulos({
      costo: this.vArticulos.costo,

    });
    return this.mArticulos;

  }
  reportarEmpleado(
    totalGanancia,

  ) {
    this.lbltotalGanancias.innerHTML = totalGanancia;
  }


}