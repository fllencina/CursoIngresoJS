//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");
	//defino variables
	var largo;
	var ancho;
	var perimetro;

	largo=document.getElementById('largo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=(largo+ancho)*2;

	alert("Usted necesita " + (perimetro*6) + " metros de alambre");

	
}

