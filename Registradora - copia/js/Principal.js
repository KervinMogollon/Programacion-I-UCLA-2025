/**
 * Analisis de Datos
 * Crear un programa de cierre de caja para totalizar el efectivo en billetes de USD dentro de la
caja. Los billetes a contabilizar son de denominaciones de 1 USD, 5 USD, 10 USD, 20 USD,
50 USD y 100 USD. 

El programa debe obtener y mostrar un resumen con el monto total por
cada tipo de billete y el monto total del cierre de caja.
 */

import Cl_Icaja from "./Icaja.js";
import Cl_Caja from "./Caja.js";

let iCaj = new Cl_Icaja(),
b1 = iCaj.leerBilletes1(),
b5 = iCaj.leerBilletes5(),
b10 = iCaj.leerBilletes10(),
b20 = iCaj.leerBilletes20(),
b50 = iCaj.leerBilletes50(),
b100 = iCaj.leerBilletes100(),
d1 = iCaj.leerDolar1(),
d5 = iCaj.leerDolar5(),
d10 = iCaj.leerDolar10(),
d20 = iCaj.leerDolar20(),
d50 = iCaj.leerDolar50(),
d100 = iCaj.leerDolar100(),
ts = iCaj.leerTasa(),

caj = new Cl_Caja(b1, b5, b10, b20, b50, b100, d1, d5, d10, d20, d50, d100, ts),

salida = document.getElementById("salida")

salida.innerHTML = iCaj.reporteCaja(
    caj.billetes1,
    caj.totalB1(),
    caj.billetes5,
    caj.totalB5(),
    caj.billetes10,
    caj.totalB10(),
    caj.billetes20,
    caj.totalB20(),
    caj.billetes50,
    caj.totalB50(),
    caj.billetes100,
    caj.totalB100(),
    caj.totalBilletes(),
    caj.dolar1,
    caj.totalD1(),
    caj.dolar5,
    caj.totalD5(),
    caj.dolar10,
    caj.totalD10(),
    caj.dolar20,
    caj.totalD20(),
    caj.dolar50,
    caj.totalD50(),
    caj.dolar100,
    caj.totalD100(),
    caj.totalDolares(),
    caj.cierreBilletes(),
    caj.cierreDolares(),
)