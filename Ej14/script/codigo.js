window.onload = function(){ 
   pantalla=document.getElementById("texto");
   document.onkeydown = teclado; 
   }
   x="0"; //numero en pantalla
   xi=1; //iniciar numero 1=si; 0=no;
   coma=0; //estado coma 0=no, 1=si;
   ni=0; //numero auxiliar.
   op="no"; //operacion "no" =  sin operacion.
   

function numero(xx) { //recoge el numero pulsado en el.
   if (x=="0" || xi==1  ) {	
      pantalla.innerHTML=xx; //mostrar en pantalla
      x=xx; //guardamos el numero
   if (xx==".") { //si escribimos una coma al principio del numero
      pantalla.innerHTML="0."; //escribimos 0.
      x=xx; //guardar 
      coma=1; //cambiar coma
   }
   }else { //continuar escribiendo un numero
      if (xx=="." && coma==0) { //primera coma 
         pantalla.innerHTML+=xx;
         x+=xx;
         coma=1; //cambiar el estado de la coma  
      }
      //si intentamos escribir una segunda coma decimal no hace nada.
      else if (xx=="." && coma==1) {} 
      else {
         pantalla.innerHTML+=xx;
         x+=xx
      }
   }
      xi=0 
}

function operar(s) {
   igualar() //si hay operaciones pendientes se realizan primero
   ni=x //lo ponemos en auxiliar
   op=s; //guardamos el tipo de operación.
   xi=1; //inicializar pantalla.
}

function igualar() {
   if (op=="no") { //si no hay ninguna operación pendiente.
      pantalla.innerHTML=x;
   }else { 
      sl=ni+op+x; 
      sol=eval(sl) 
      pantalla.innerHTML=sol //mostramos la solución
      x=sol; //guardamos la solución
      op="no"; 
      xi=1; 
   }
}

function raizc() {
   x=Math.sqrt(x) //hacemos la raiz cuadrada.
   pantalla.innerHTML=x; 
   op="no"; //limpiamos operaciones.
   xi=1; 
}

function porcent() { 
   x=x/100 //operacion
   pantalla.innerHTML=x; //mostrar en pantalla
   igualar() 
   xi=1 //reiniciar la pantalla
}

function opuest() { 
   nx=Number(x); //convertir a number
   nx=-nx; //cambiar de signo
   x=String(nx); //convertir a cadena
   pantalla.innerHTML=x; //mostrar en pantalla.
}

function inve() {
   nx=Number(x);
   nx=(1/nx);
   x=String(nx);		 
   pantalla.innerHTML=x;
   xi=1; //reiniciar pantalla al pulsar 
}
   
function retro(){ 
   cifras=x.length; 
   br=x.substr(cifras-1,cifras)
   x=x.substr(0,cifras-1) //quitar el ultimo caracter
   if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
   if (br==".") {coma=0;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
   pantalla.innerHTML=x; //mostrar resultado 
}

function borradoParcial() {
   pantalla.innerHTML=0; //Borramos
   x=0;//Borramos
   coma=0;	//reiniciamos 				
}

function borradoTotal() { //Ponemos todo a 0
   pantalla.innerHTML=0; 
   x="0"; 
   coma=0; 
   ni=0 
   op="no" 
}