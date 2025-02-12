export default class CL_Prestamos {
    constructor(cliente, codigo, prestamos, meses) {
        this.cliente = cliente;
        this.codigo = codigo;
        this.prestamos = prestamos;
        this.meses = meses;
    }

    set cliente(cliente) {
        this._cliente = cliente;
    }

    get cliente() {
        return this._cliente
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    get codigo() {
        return this._codigo
    }

    set prestamos(prestamos) {
        this._prestamos = +prestamos;
    }

    get prestamos() {
        return this._prestamos
    }

    set meses(meses) {
        this._meses = +meses;
    }

    get meses() {
        return this._meses
    }

}