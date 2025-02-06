

import CL_Personal from "./Personal.js";
import CL_Empresa from "./Empresa.js";

let pers = new CL_Personal();

let pers1 = new CL_Personal("Juan", "O", 100),
    pers2 = new CL_Personal("Ana", "O", 120),
    pers3 = new CL_Personal("Lin", "A", 200),
    pers4 = new CL_Personal("Mary", "O", 50),
    pers5 = new CL_Personal("Carlos", "A", 150);

let empr = new CL_Empresa();

empr.procesarPersonal(pers1);
empr.procesarPersonal(pers2);
empr.procesarPersonal(pers3);
empr.procesarPersonal(pers4);
empr.procesarPersonal(pers5);

let salida = document.getElementById("salida")

salida.innerHTML = `
<br>Monto total pagado a obreros: ${(empr.pagaObreros()).toFixed(2)} $
<br>Promedio pagado a ${empr.cntObreros} obreros: ${(empr.promdObreros()).toFixed(2)} $
<br>
<br>Monto total pagado a administrativos: ${(empr.pagaAdmins()).toFixed(2)} $
<br>Promedio pagado a ${empr.cntAdmins} administrativos: ${(empr.promdAdmins()).toFixed(2)} $
`

