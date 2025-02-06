export default class sobre{
    constructor(numero, valor, cantidad){
        this.numero = numero;
        this.valor = valor;
        this.cantidad = cantidad;
    }
    set numero(numero){
        this._numero = numero;
    }
    get numero(){
        return this._numero
    }
    set valor(valor){
        this._valor = valor;
    }
    get valor(){
        return this._valor;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
    get cantidad(){
        return this._cantidad;
    }

    calcTot(){
        return this.valor * this.cantidad;
    }
}