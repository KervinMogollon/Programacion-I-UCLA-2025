export default class Cl_mGrupo {
  constructor() {
    this.cnHombres = 0;
    this.cnMujeres = 0;
  }
  procesarPersona(p) {
    if (p.sexo === "M") {
      this.cnHombres++;
    } else {
      this.cnMujeres++;
    }
  }
  cantidadPersonas() {
    return this.cnHombres + this.cnMujeres;
  }
  cantidadHombres() {
    return this.cnHombres;
  }
  cantidadMujeres() {
    return this.cnMujeres;
  }
}
