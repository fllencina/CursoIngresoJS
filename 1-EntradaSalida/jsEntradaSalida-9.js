/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
//defino variables
	var sueldo=document.getElementById('sueldo').value;
	var resultado;

	//transformo en numero
	sueldo=parseInt(sueldo);
	
	//operacion
	resultado= sueldo*1.1

	//%  modulo en programacion

alert(resultado);
document.getElementById('resultado').value=resultado;

}
