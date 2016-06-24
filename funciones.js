//funciones
window.onload = function(){ 
pantalla=document.getElementById("textoPantalla"); 
}
x="0"; 
xi=1;
coma=0; 
ni=0; 
op="no";

function numero(xx) { //recoge el número pulsado en el argumento.
         if (x=="0" || xi==1  ) {	// inicializar un número, 
            pantalla.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número
            if (xx==".") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un número
               if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar el estado de la coma  
               }
               //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
               else if (xx=="." && coma==1) {} 
               //Resto de casos: escribir un número del 0 al 9: 	 
               else {
                   pantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 //el número está iniciado y podemos ampliarlo.
         }