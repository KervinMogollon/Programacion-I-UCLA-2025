import CL_mPedido from "./CL_mPedido.js";
import CL_vPedido from "./CL_vPedido.js";

export default class CL_vComedor {
    constructor() {
        this.inIniEmpanada = document.getElementById("comedorForm_inIniEmpanada");
        this.inIniPastelitos = document.getElementById("comedorForm_inIniPastelitos");
        this.inIniJugo = document.getElementById("comedorForm_inIniJugo");

        this.controlador = null;

        this.tabla = document.getElementById("comedorForm_tabla");

        this.salida = document.getElementById("comedorForm_salida");

        this.vPedido = new CL_vPedido();

        this.vPedido.brProcesar.onclick = () =>
            this.controlador.procesarPedido();
    }

    get iniEmpenada() {
        return +this.inIniEmpanada.value
    }

    get iniPastelitos() {
        return +this.inIniPastelitos.value
    }

    get iniJugo() {
        return +this.inIniJugo.value
    }

    procesarPedido() {
        this.mPedido = new CL_mPedido({
            nombre: this.vPedido.inNomre,
            orden: this.vPedido.inOrden,
            cantOrden: this.vPedido.inCantOrden,
            jugo: this.vPedido.inJugo,
        });
        return this.mPedido;
    }

    reporteComedor(restEmpa, restPast, restJug) {
        this.tabla.innerHTML += `
    <tr>
      <td>${this.mPedido.nombre}</td>
      <td>${this.mPedido.costoComida()}</td>
    </tr>`;

        this.salida.innerHTML += `
            <br>Quedan ${restEmpa} empanadas
            <br>Quedan ${restPast} pastelitos
            <br>Quedan ${restJug} jugos
    `
    }


}