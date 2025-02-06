export default class cl_Personas {
    constructor(edad, nombre) {
        this.edad = edad;
        this.nombre = nombre

    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(edad) {
        this._edad = +edad;
    }
    get edad() {
        this._edad;
    }

}