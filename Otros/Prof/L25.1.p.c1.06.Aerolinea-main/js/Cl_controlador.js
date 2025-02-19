export default class Cl_controlador {
  
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  
  agregarVuelo() {
    this.modelo.procesarVuelo(this.vista.agregarVuelo());
    this.vista.reportarVuelo(
      this.modelo.ingresoTotal(),
      this.modelo.menorCantPasajeros(),
      this.modelo.porcInternacionales()
    );
  }
}
