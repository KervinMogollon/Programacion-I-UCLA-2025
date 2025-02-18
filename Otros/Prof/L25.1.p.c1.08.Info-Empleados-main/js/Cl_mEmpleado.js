export default class Cl_mEmpleado {
  constructor({ nombre, tipo, gana }) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.gana = gana;
  }
  set tipo(tipo) {
    this._tipo = +tipo;
    if (tipo !== 1 && tipo !== 2) this._tipo = 1;
  }
  get tipo() {
    return this._tipo;
  }
  set gana(gana) {
    this._gana = +gana;
  }
  get gana() {
    return this._gana;
  }
}
