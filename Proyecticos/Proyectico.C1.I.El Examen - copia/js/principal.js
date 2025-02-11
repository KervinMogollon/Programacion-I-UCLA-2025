/**
 * EXAMEN
Se desea llevar un control de los estudiantes que
asisten a presentar un examen. Se tiene por cada
participante: nombre, cédula, sexo y nota. Se requiere
de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
valor del examen y el mínimo aprobatorio. 

Primeros requerimientos
Porcentaje de aprobados
Estudiante con la mejor nota
Porcentaje de chicas aprobadas 

Datos de inicialización para Cl_examen  
valor: 20,  
minAprueba: 9.6 

Estudiantes de prueba  
nombre: 'Luis'  cedula: 1111  sexo: 'M'  nota: 12  
nombre: 'Carla'  cedula: 2222  sexo: 'F'  nota: 16.5  
nombre: Mery'  cedula: 3333  sexo: 'F'  nota: 8 
 */

import CL_Estudiante from "./Estudiante.js";
import CL_Examen from "./Examen.js";

let estud1 = new CL_Estudiante("Luis", 11, "M", 12, 1),
    estud2 = new CL_Estudiante("Carla", 22, "F", 16.5, 2),
    estud3 = new CL_Estudiante("Carlos", 33, "M", 11.5, 3),
    estud4 = new CL_Estudiante("Fabio", 44, "M", 2, 3),
    estud5 = new CL_Estudiante("Alexa", 55, "F", 18, 2),
    estud6 = new CL_Estudiante("Milly", 66, "F", 7, 2),
    estud7 = new CL_Estudiante("Mery", 77, "F", 10, 1);

let exa = new CL_Examen(20);

exa.procesarEstudiante(estud1);
exa.procesarEstudiante(estud2);
exa.procesarEstudiante(estud3);
exa.procesarEstudiante(estud4);
exa.procesarEstudiante(estud5);
exa.procesarEstudiante(estud6);
exa.procesarEstudiante(estud7);

let salida = document.getElementById("salida")

salida.innerHTML = `
<br>Porcentaje de aprobados: ${(exa.porcAprobados()).toFixed(2)}%
<br>Estudiante con la mejor nota: ${exa.EstudMejor()}
<br>Porcentaje de chicas aprobadas: ${(exa.porcChicasAprobadas()).toFixed(2)}%
`