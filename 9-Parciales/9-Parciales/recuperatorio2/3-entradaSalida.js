//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");
	var ancho;
	var largo;
	var perimetro;


	ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=(largo +ancho)*2;

	alert("Se necesitan "+ (perimetro *6)+ " metros de alambre");
}

