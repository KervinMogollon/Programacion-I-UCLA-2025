import prestamos from "./Cl_Prestamos.js";
import oficina from "./Cl_Oficina.js";

let pres1 = new prestamos("Carla", 2222, 500, 2),
    pres2 = new prestamos("Luiz", 5555, 1000, 4),
    pres3 = new prestamos("Mery", 3333, 2000, 5);

let ofi = new oficina(20000.00, 5);

ofi.procesarPrestamos(pres1);
ofi.procesarPrestamos(pres2);
ofi.procesarPrestamos(pres3);

let salida = document.getElementById("salida")

salida.innerHTML = `
<br>monto final disponible: ${ofi.montCaja}
<br>cantidad de clientes que pidieron por dos meses: ${ofi.contCli2Meses()}
<br>Cliente que pidio el prestamo menor: ${ofi.calcCli2Meses()}`