/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//defino variables

	var Largo=document.getElementById('Largo').value;
	var Ancho=document.getElementById('Ancho').value;
	var resultado;

	//operacion

	resultado=(Largo*Ancho)*2;
	resultado=resultado *3;

//muestro por alert

	alert("La cantidad de metros de alambre necesarios es: "+ resultado);
}
function Circulo () 
{
	var Radio=document.getElementById('Radio').value;
	var resultado;

	resultado=2*3.1415*Radio;
	resultado= resultado*3;

alert("La cantidad de metros de alambre necesarios es: "+ resultado);
	
}
function Materiales () 
{
	var Largo=document.getElementById('Largo').value;
	var Ancho=document.getElementById('Ancho').value;
	var resultado1;
	var resultado2;

	//operacion

	resultado1=(Largo*Ancho)*2;
	resultado2=(Largo*Ancho)*3;

	//muestro

	alert("Se necesitan " + resultado1 + " bolsas de cemento");
	alert("Se necesitan " + resultado2 + " bolsas de cal");
	
}