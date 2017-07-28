//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 1-EntradaSalida");
	var lado;
	var perimetro;

	lado=document.getElementById('lado').value;


	perimetro=lado*3;
	perimetro=parseInt(perimetro);

	alert("el perimetro del triangulo es: " + perimetro)
}

