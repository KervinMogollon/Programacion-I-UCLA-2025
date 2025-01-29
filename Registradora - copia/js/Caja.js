export default class Cl_Caja {
    constructor(b1, b5, b10, b20, b50, b100, d1, d5, d10, d20, d50, d100, ts) {
        this.billetes1 = b1;
        this.billetes5 = b5;
        this.billetes10 = b10;
        this.billetes20 = b20;
        this.billetes50 = b50;
        this.billetes100 = b100;
        this.dolar1 = d1;
        this.dolar5 = d5;
        this.dolar10 = d10;
        this.dolar20 = d20;
        this.dolar50 = d50;
        this.dolar100 = d100;
        this.tasa = ts;
    }

    set billetes1(b1) {
        this._billetes1 = +b1;
    }

    get billetes1() {
        return this._billetes1
    }

    set billetes5(b5) {
        this._billetes5 = +b5;
    }

    get billetes5() {
        return this._billetes5;
    }

    set billetes10(b10) {
        this._billetes10 = +b10;
    }

    get billetes10() {
        return this._billetes10;
    }

    set billetes20(b20) {
        this._billetes20 = +b20;
    }

    get billetes20() {
        return this._billetes20;
    }

    set billetes50(b50) {
        this._billetes50 = +b50;
    }

    get billetes50() {
        return this._billetes50;
    }

    set billetes100(b100) {
        this._billetes100 = +b100;
    }

    get billetes100() {
        return this._billetes100;
    }

    set dolar1(d1) {
        this._dolar1 = +d1;
    }

    get dolar1() {
        return this._dolar1;
    }

    set dolar5(d5) {
        this._dolar5 = +d5;
    }

    get dolar5() {
        return this._dolar5;
    }

    set dolar10(d10) {
        this._dolar10 = +d10;
    }

    get dolar10() {
        return this._dolar10;
    }

    set dolar20(d20) {
        this._dolar20 = +d20;
    }

    get dolar20() {
        return this._dolar20;
    }

    set dolar50(d50) {
        this._dolar50 = +d50;
    }

    get dolar50() {
        return this._dolar50;
    }

    set dolar100(d100) {
        this._dolar100 = +d100;
    }

    get dolar100() {
        return this._dolar100;
    }

    set tasa(ts) {
        this._tasa = +ts;
    }

    get tasa() {
        return this._tasa;
    }

    totalB1() {
        return this.billetes1
    }

    totalB5() {
        return this.billetes5 * 5
    }

    totalB10() {
        return this.billetes10 * 10
    }

    totalB20() {
        return this.billetes20 * 20
    }

    totalB50() {
        return this.billetes50 * 50
    }

    totalB100() {
        return this.billetes100 * 100
    }

    totalBilletes() {
        return this.totalB1() + this.totalB5() + this.totalB10() + this.totalB20()
            + this.totalB50() + this.totalB100()
    }

    totalD1() {
        return this.dolar1
    }

    totalD5() {
        return this.dolar5 * 5
    }

    totalD10() {
        return this.dolar10 * 10
    }

    totalD20() {
        return this.dolar20 * 20
    }

    totalD50() {
        return this.dolar50 * 50
    }

    totalD100() {
        return this.dolar100 * 100
    }

    totalDolares() {
        return this.totalD1() + this.totalD5() + this.totalD10() + this.totalD20()
            + this.totalD50() + this.totalD100()
    }

    cierreBilletes() {
        return this.totalBilletes() + (this.totalDolares() * this.tasa);
    }

    cierreDolares() {
        return this.totalDolares() + (this.totalBilletes() / this.tasa);
    }
}
