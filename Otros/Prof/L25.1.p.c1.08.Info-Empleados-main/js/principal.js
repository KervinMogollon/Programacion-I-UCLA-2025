/**
 * 6.	INFO EMPLEADOS
En una empresa se tiene personal obrero y personal administrativo. La empresa necesita 
determinar cuál es el monto promedio que paga por cada tipo de personal.
El tipo de personal: 1=obrero, 2=administrativo.
La empresa informa los siguientes datos
nombre tipo gana
Juan    1   $100
Ana     1   $120
Lin     2   $200
Mary    1    $50
Carlos  2   $150

Al ser consultada por la forma como desean que se presente la salida, la empresa 
suministra el siguiente formato.
Salida:
Monto total pagado a obreros: $270
Promedio pagado a 3 obreros: $90

Monto total pagado a administrativos: $350
Promedio pagado a 2 administrativos: $175
*/

import Cl_vEmpresa from "./Cl_vEmpresa.js";
import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
  constructor() {
    let vista = new Cl_vEmpresa();
    let modelo = new Cl_mEmpresa();
    let controlador = new Cl_controlador(modelo, vista);
    vista.controlador = controlador;
  }
}
