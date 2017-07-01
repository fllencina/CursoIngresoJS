/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	//defino variables
	var importe=document.getElementById('importe').value;
	var resultado;

	//transformo en numero
	importe=parseInt(importe);
	
	//operacion
	resultado= importe

	//%  modulo en programacion

alert(resultado);
document.getElementById('importe').value=resultado;

}
