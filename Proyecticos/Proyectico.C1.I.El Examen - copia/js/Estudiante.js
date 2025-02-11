export default class CL_Estudiante {
    constructor(nombre, cedula, sexo, nota, tipoPrueb) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.sexo = sexo;
        this.nota = nota;
        this.tipoPrueb = tipoPrueb;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre
    }

    set cedula(cedula) {
        this._cedula = cedula;
    }

    get cedula() {
        return this._cedula
    }

    set sexo(sexo) {
        this._sexo = sexo;
    }

    get sexo() {
        return this._sexo
    }

    set nota(nota) {
        this._nota = +nota;
    }

    get nota() {
        return this._nota
    }

    set tipoPrueb(tipoPrueb) {
        this._tipoPrueb = +tipoPrueb;
    }

    get tipoPrueb() {
        return this._tipoPrueb
    }

    minsAprobatorios() {
        switch (this.tipoPrueb) {
            case 1:
                return 14;
                break;
            case 2:
                return 11;
                break;
            case 3:
                return 16
                break;

        }

    }
}