export default class CL_Examen {
    constructor(maxValor) {
        this.maxValor = maxValor;
        this.estud = 0;
        this.cntAprobados = 0;
        this.notaMayor = 0;
        this.EstuMayor = "";
        this.cntChicas = 0;
        this.chicasAprobadas = 0;
    }

    procesarEstudiante(estud) {
        this.estud++

        if (estud.nota >= estud.minsAprobatorios())
            this.cntAprobados++

        if (estud.nota > this.notaMayor) {
            this.notaMayor = estud.nota
            this.EstuMayor = estud.nombre
        }

        if(estud.sexo === "F")
            this.cntChicas++

        if (estud.nota >= estud.minsAprobatorios() && estud.sexo === "F")
            this.chicasAprobadas++
    }

    porcAprobados(){
        return (this.cntAprobados * 100) / this.estud
    }

    EstudMejor(){
        return this.EstuMayor
    }

    porcChicasAprobadas(){
        return (this.chicasAprobadas * 100) / this.cntChicas
    }

    
}