/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Temperatura= document.getElementById('Temperatura').value;
	var temperaturaC;

	Temperatura=parseInt(Temperatura);

	temperaturaC=Temperatura-32;

	alert("La temperatura es: "+ temperaturaC+ " ºC ");
}

function CentigradosFahrenheit () 
{
	var Temperatura= document.getElementById('Temperatura').value;
	var temperaturaF;

	Temperatura=parseInt(Temperatura);

	temperaturaF=Temperatura+32;

	alert("La temperatura es: "+ temperaturaF+ " ºF ");
}
