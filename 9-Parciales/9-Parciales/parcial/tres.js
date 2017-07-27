function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	
	perimetro=(largo+ancho)*2;
	alert("necesita "+ (perimetro*3)+ " metros de alambre");
}
