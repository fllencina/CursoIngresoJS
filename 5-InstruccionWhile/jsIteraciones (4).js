function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while (numero<0 || numero>10)
		//while(!(numero>0 &&numero<10))
		
	{
		alert("por favor ingrese un numero entre 0 y 10");
		numero = prompt("ingrese un número entre 0 y 10.");
	}

	alert("correcto");
}//FIN DE LA FUNCIÓN