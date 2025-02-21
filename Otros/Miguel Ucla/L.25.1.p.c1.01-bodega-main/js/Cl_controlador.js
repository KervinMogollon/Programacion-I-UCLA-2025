export default class Cl_controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarArticulo() {
    this.modelo.procesarArticulo(this.vista.obtenerArticulo());
    this.vista.reportarArticulos(
      this.modelo.acGanancia,
      this.modelo.totalGanancia(),
    )
  }
}