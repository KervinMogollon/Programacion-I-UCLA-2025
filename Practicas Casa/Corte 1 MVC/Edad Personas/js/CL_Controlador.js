export default class CL_Controlador{
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarEdad(){
        this.modelo.procesarEdad(this.vista.procesarEdad());
        this.vista.procesarEdad(
            this.modelo.calcularPromedio(),
        );
    }
}