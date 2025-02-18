export default class Cl_mPersona {
  constructor({ nombre, sexo }) {
    this.nombre = nombre;
    this.sexo = sexo;
  }
  set sexo(s) {
    this._sexo = s.toUpperCase();
    if (this._sexo !== "M" && this._sexo !== "F") {
      this._sexo = "M";
    }
  }
  get sexo() {
    return this._sexo;
  }
}
