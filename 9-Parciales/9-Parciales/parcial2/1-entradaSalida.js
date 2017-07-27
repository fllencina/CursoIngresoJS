//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 1-EntradaSalida");
	//defino variable
	var lado;
	var perimetro;

	//ingreso de dato
	lado=document.getElementById('lado').value;
	lado=parseInt(lado);

	perimetro=lado*3;

	//muestro resultado
	alert("el perimetro del triangulo equilatero es: "+ perimetro);
	
}

