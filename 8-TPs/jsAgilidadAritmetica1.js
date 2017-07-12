/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var PrimerNumero;
var Operador;
var operadorConvertido;
var SegundoNumero;
function comenzar()
{
	PrimerNumero=Math.floor((Math.random() * 10) + 1);
	Operador=Math.floor((Math.random() * 4) + 1);
	SegundoNumero=Math.floor((Math.random() * 10) + 1);
	//alert("PrimerNumero: "+ PrimerNumero + "Operador:" +Operador + "SegundoNumero:" + SegundoNumero);

	document.getElementById('PrimerNumero').value=PrimerNumero;
	document.getElementById('SegundoNumero').value=SegundoNumero;

switch (Operador)
{
	case 1:
	document.getElementById('Operador').value= "+";
	break;

	case 2:
	document.getElementById('Operador').value= "-";
	break;

	case 3:
	document.getElementById('Operador').value= "*";
	break;
	case 4:
	document.getElementById('Operador').value= "/";
	break;

}

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
