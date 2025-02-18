import Cl_vEmpleado from "./Cl_vEmpleado.js";
import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_vEmpresa {
  constructor() {
    this.controlador = null;

    this.lblMontoTotalObreros = document.getElementById(
      "mainForm_lblMontoTotalObreros"
    );

    this.lblCantidadObreros = document.getElementById(
      "mainForm_lblCantidadObreros"
    );

    this.lblPromedioObreros = document.getElementById(
      "mainForm_lblPromedioObreros"
    );

    this.lblMontoTotalAdministrativos = document.getElementById(
      "mainForm_lblMontoTotalAdministrativos"
    );

    this.lblCantidadAdministrativos = document.getElementById(
      "mainForm_lblCantidadAdministrativos"
    );

    this.lblPromedioAdministrativos = document.getElementById(
      "mainForm_lblPromedioAdministrativos"
    );

    this.vEmpleado = new Cl_vEmpleado();
    
    this.vEmpleado.btProcesar.onclick = () =>
      this.controlador.procesarEmpleado();
  }

  procesarEmpleado() {
    this.mEmpleado = new Cl_mEmpleado({
      nombre: this.vEmpleado.nombre,
      tipo: this.vEmpleado.tipo,
      gana: this.vEmpleado.gana,
    });
    return this.mEmpleado;
  }
  reportarEmpleado(
    montoTotalObreros,
    cantidadObreros,
    promedioObreros,
    montoTotalAdministrativos,
    cantidadAdministrativos,
    promedioAdministrativos,
  ) {
    this.lblMontoTotalObreros.innerHTML = montoTotalObreros;
    this.lblCantidadObreros.innerHTML = cantidadObreros;
    this.lblPromedioObreros.innerHTML = promedioObreros;
    this.lblMontoTotalAdministrativos.innerHTML = montoTotalAdministrativos;
    this.lblCantidadAdministrativos.innerHTML = cantidadAdministrativos;
    this.lblPromedioAdministrativos.innerHTML = promedioAdministrativos;
  }
}
