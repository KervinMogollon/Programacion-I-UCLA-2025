/**
 * PRÉSTAMOS
Se desea llevar un control de los préstamos que
realiza una oficina. Se tiene por cada préstamo: nombre
del cliente, código del préstamo, monto y cantidad de
meses. Se requiere de un programa que permita el
registro de esta información, conociendo al principio de
la ejecución el monto disponible para préstamos y el
porcentaje de comisión mensual que se cobrará.

Primeros requerimientos
Monto final disponible
Cantidad de clientes que pidieron por 2 meses
Cliente que pidió el préstamo menor

Datos de inicialización para Cl_oficina
montoDisponible: 20000.00,
porcComisionMensual: 5.00

Préstamos de prueba
cliente: 'Luis',
codigo: 1111,
prestamo: 1000,
meses: 3

cliente: 'Carla',
codigo: 2222,
prestamo: 500,
meses: 2

cliente: Mery',
codigo: 3333,
prestamo: 2000,
meses: 5
 */

import CL_Prestamos from "./Prestamos.js";
import CL_Oficina from "./Oficina.js";

let prest1 = new CL_Prestamos("Luis", 11, 1000, 3),
    prest2 = new CL_Prestamos("Carla", 22, 500, 2),
    prest3 = new CL_Prestamos("Mery", 33, 2000, 5);

let ofi = new CL_Oficina(20000.00, 5);

ofi.procesarPrestamos(prest1);
ofi.procesarPrestamos(prest2);
ofi.procesarPrestamos(prest3);

let salida = document.getElementById("salida")

salida.innerHTML = `
Monto final disponible: ${ofi.montoCaja}
<br>Cantidad de clientes que pidieron por 2 meses: ${ofi.prestamos2Meses()}
<br>Cliente que pidió el préstamo menor: ${ofi.menorCliente()}
`
