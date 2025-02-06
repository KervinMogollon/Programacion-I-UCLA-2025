/* Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y 
reporte al final el porcentaje de personas que son mayores de edad. 
Se tienen las siguientes personas: 

Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
José (22), María (17), Luz (19), Rafael (23), Liz (15), 
Marcos (20) y Leo (16); la salida requerida.

Presenta el siguiente formato: 
Cantidad de personas: 12
Cantidad de personas mayor de edad: 7
Porcentaje de personas mayor de edad: 58.33% 
*/

import Cl_Personas from "./Cl_Personas.js";
import Cl_Mayores from "./Cl_Mayores.js";

let Per1 = new Cl_Personas("Luis", 15);
let Per2 = new Cl_Personas("Ana", 19);
let Per3 = new Cl_Personas("Jose", 21);
let Per4 = new Cl_Personas("Carmen", 17);
let Per5 = new Cl_Personas("Rosa", 18);
let Per6 = new Cl_Personas("Jose", 22);
let Per7 = new Cl_Personas("Maria", 17);
let Per8 = new Cl_Personas("Luz", 19);
let Per9 = new Cl_Personas("Rafael", 23);
let Per10 = new Cl_Personas("Liz", 15);
let Per11 = new Cl_Personas("Marcos", 20);
let Per12 = new Cl_Personas("Leo", 16);

let mayores = new Cl_Mayores();

mayores.procesar(Per1);
mayores.procesar(Per2);
mayores.procesar(Per3);
mayores.procesar(Per4);
mayores.procesar(Per5);
mayores.procesar(Per6);
mayores.procesar(Per7);
mayores.procesar(Per8);
mayores.procesar(Per9);
mayores.procesar(Per10);
mayores.procesar(Per11);
mayores.procesar(Per12);

let salida = document.getElementById("salida");
salida.innerHTML = `
Cantidad de personas: ${mayores.cantidadPersonas()}
<br>Cantidad de personas mayor de edad: ${mayores.cantidadMayoresEdad()}
<br>Porcentaje de personas mayor de edad: ${mayores.porcentaje()}
`;