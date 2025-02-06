import sobre from "./Cl_Sobre.js";
import todoSobre from "./Cl_TotoSobre.js";

let s1 = new sobre (1 , 10 , 5),
    s2 = new sobre (2, 20, 2),
    s3 = new sobre (3, 100, 4),
    s4 = new sobre (4, 50, 3);

let todosobre = new todoSobre();

todosobre.procesarSobre(s1);
todosobre.procesarSobre(s2);
todosobre.procesarSobre(s3);
todosobre.procesarSobre(s4);

let salida = document.getElementById("salida");

salida.innerHTML = 
`<br>Total de dinero en el sobre 1: ${s1.calcTot()} $
<br>Total de dinero en el sobre 2: ${s2.calcTot()} $
<br>Total de dinero en el sobre 3: ${s3.calcTot()} $
<br>Total de dinero en el sobre 4: ${s4.calcTot()} $
<br>Total de dinero entre todos los sobres: ${todosobre.devolverSumaMonto()} $`