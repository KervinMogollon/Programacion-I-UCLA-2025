import Cl_vVuelo from "./Cl_vVuelo.js";
import Cl_mVuelo from "./Cl_mVuelo.js";
export default class Cl_vAerolinea {
  constructor() {
    this.controlador = null;
    this.mVuelo = null;
    this.vVuelo = new Cl_vVuelo();
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lblIngresoTotal = document.getElementById("mainForm_lblIngresoTotal");
    this.lblMenorNumPasajeros = document.getElementById(
      "mainForm_lblMenorNumPasajeros"
    );
    this.lblPorcInternacionales = document.getElementById(
      "mainForm_lblPorcInternacionales"
    );
    this.btAgregar.onclick = () => this.ocultar();
    this.vVuelo.btAceptar.onclick = () => this.controlador.agregarVuelo();
    this.mostrar();
  }

  agregarVuelo() {
    this.mVuelo = new Cl_mVuelo({
      numero: this.vVuelo.numero,
      tipo: this.vVuelo.tipo,
      costo: this.vVuelo.costo,
      pasajeros: this.vVuelo.pasajeros,
    });
    this.mostrar();
    return this.mVuelo;
  }
  mostrar() {
    this.vista.hidden = false;
    this.vVuelo.ocultar();
  }
  ocultar() {
    this.vista.hidden = true;
    this.vVuelo.mostrar();
  }
  reportarVuelo(ingresoTotal, menorCantPasajeros, porcInternacionales) {
    this.tabla.innerHTML += `
    <tr>
      <td>${this.mVuelo.numero}</td>
      <td>${this.mVuelo.tipo}</td>
      <td>${this.mVuelo.costo}</td>
      <td>${this.mVuelo.pasajeros}</td>
      <td>${this.mVuelo.ingreso()}</td>
    </tr>`;
    this.lblIngresoTotal.innerHTML = ingresoTotal;
    this.lblMenorNumPasajeros.innerHTML = menorCantPasajeros;
    this.lblPorcInternacionales.innerHTML = porcInternacionales;
  }
}
