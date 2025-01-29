export default class Cl_Icaja {

    leerBilletes1() {
        return prompt("Cantidas de Billetes de 1BsD")
    }

    leerBilletes5() {
        return prompt("Cantidas de Billetes de 5BsD")
    }

    leerBilletes10() {
        return prompt("Cantidas de Billetes de 10BsD")
    }

    leerBilletes20() {
        return prompt("Cantidas de Billetes de 20BsD")
    }

    leerBilletes50() {
        return prompt("Cantidas de Billetes de 50BsD")
    }

    leerBilletes100() {
        return prompt("Cantidas de Billetes de 100BsD")
    }

    leerDolar1() {
        return prompt("Cantidas de Billetes de 1$")
    }

    leerDolar5() {
        return prompt("Cantidas de Billetes de 5$")
    }

    leerDolar10() {
        return prompt("Cantidas de Billetes de 10$")
    }

    leerDolar20() {
        return prompt("Cantidas de Billetes de 20$")
    }

    leerDolar50() {
        return prompt("Cantidas de Billetes de 50$")
    }

    leerDolar100() {
        return prompt("Cantidas de Billetes de 100$")
    }

    leerTasa(){
        return prompt("ingrese la Tasa Cambiaria del Dia de Hoy")
    }

    reporteCaja(b1, tb1, b5, tb5, b10, tb10, b20, tb20, b50, tb50, b100, tb100, tb, d1, td1, d5, td5, d10, td10, 
        d20, td20, d50, td50, d100, td100, td, cb, cd) {
        return `
        <br>Billetes de 1Bsd: ${b1} Total: ${tb1}Bsd
        <br>Billetes de 5Bsd: ${b5} Total: ${tb5}Bsd
        <br>Billetes de 10Bsd: ${b10} Total: ${tb10}Bsd
        <br>Billetes de 20Bsd: ${b20} Total: ${tb20}Bsd
        <br>Billetes de 50Bsd: ${b50} Total: ${tb50}Bsd
        <br>Billetes de 100Bsd: ${b100} Total: ${tb100}Bsd
        <br>Total de BsD: ${tb}BsD
        <br>
        <br>Billetes de 1$: ${d1} Total: ${td1}$
        <br>Billetes de 5$: ${d5} Total: ${td5}$
        <br>Billetes de 10$: ${d10} Total: ${td10}$
        <br>Billetes de 20$: ${d20} Total: ${td20}$
        <br>Billetes de 50$: ${d50} Total: ${td50}$
        <br>Billetes de 100$: ${d100} Total: ${td100}$
        <br>Total de $: ${td}$
        <br>
        <br>Cierre de Caja en BsD: ${cb}Bsd 
        <br>Cierre de Caja en $: ${cd}$
        `
    }
}