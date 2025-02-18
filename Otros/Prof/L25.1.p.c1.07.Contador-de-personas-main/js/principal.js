/**
 * CONTADOR DE PERSONAS
 * Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
 * datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
 * Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
 * Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
 * Cantidad de personas: 12
 * Cantidad de hombres: 5
 * Cantidad de mujeres: 7
 */

import Cl_vGrupo from "./Cl_vGrupo.js";
import Cl_mGrupo from "./Cl_mGrupo.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
  constructor() {
    let vista = new Cl_vGrupo();
    let modelo = new Cl_mGrupo();
    let controlador = new Cl_controlador(modelo, vista);
    vista.controlador = controlador;
  }
}
