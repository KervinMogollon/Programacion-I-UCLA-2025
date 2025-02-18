export default class Cl_mEmpresa {
  constructor() {
    this.acMontoObreros = 0;
    this.acMontoAdministrativos = 0;
    this.acCantidadObreros = 0;
    this.acCantidadAdministrativos = 0;
  }
  procesarEmpleado(empleado) {
    if (empleado.tipo === 1) {
      this.acMontoObreros += empleado.gana;
      this.acCantidadObreros++;
    } else {
      this.acMontoAdministrativos += empleado.gana;
      this.acCantidadAdministrativos++;
    }
  }
  promedioObreros(){
    if (this.acCantidadObreros === 0) return 0;
    return this.acMontoObreros / this.acCantidadObreros;    
  }
  promedioAdministrativos(){
    if (this.acCantidadAdministrativos === 0) return 0;
    return this.acMontoAdministrativos / this.acCantidadAdministrativos;
  }
}
