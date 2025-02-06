/*En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
determinar cuál es el monto promedio que paga por cada tipo de personal.

Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que:

*Juan (obrero) actualmente gana $100
*Ana (obrero) gana $120
*Mary (obrero) gana $50 
*Lin (administrativo) gana $200
*Carlos (administrativo) gana $150

SE MUESTRA EN PANTALLA:
Monto total pagado a obreros: $270
Promedio pagado a 3 obreros: $90

Monto total pagado a administrativos: $350
Promedio pagado a 2 administrativos: $175 
*/

import Cl_Empresa from "./Cl_Empresa.js";
import Cl_Personal from "./Cl_Personal.js";

let perso1 = new Cl_Personal("Juan", 100, "O");
let perso2 = new Cl_Personal("Ana", 120, "O");
let perso3 = new Cl_Personal("Mary", 50, "O");
let perso4 = new Cl_Personal("Lin", 200, "A");
let perso5 = new Cl_Personal("Carlos", 150, "A");

let empresa = new Cl_Empresa()

empresa.procesar(perso1);
empresa.procesar(perso2);
empresa.procesar(perso3);
empresa.procesar(perso4);
empresa.procesar(perso5);

let salida = document.getElementById("salida")
salida.innerHTML= `
Monto total pagado a obreros: ${empresa.montoTotalPagado()}
<br>Promedio pagado a 3 obreros:${empresa.promedio()}<br>
<br>Monto total pagado a administrativos:${empresa.montoTotalPagado()}
<br>Promedio pagado a 2 administrativos:${empresa.promedio()} 
`

