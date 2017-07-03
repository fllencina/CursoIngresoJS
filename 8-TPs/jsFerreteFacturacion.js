/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//defino variables
	var PrecioUno=document.getElementById('PrecioUno').value;
	var PrecioDos=document.getElementById('PrecioDos').value;
	var PrecioTres=document.getElementById('PrecioTres').value;
	var resultado;

	//transformo a numerico
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	//operacion

	resultado=PrecioUno+PrecioDos+PrecioTres;

	//muestro resultado

	alert("El resultado de la suma de los 3 precios es: $ " +resultado);



}
function Promedio () 
{
	//defino variables
	var PrecioUno=document.getElementById('PrecioUno').value;
	var PrecioDos=document.getElementById('PrecioDos').value;
	var PrecioTres=document.getElementById('PrecioTres').value;
	var resultado;
	
	//transformo a numerico
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	//operacion

	resultado=(PrecioUno+PrecioDos+PrecioTres)/3;

	//muestro resultado

	alert("El promedio de los 3 precios es: $ " +resultado);

}
function PrecioFinal () 
{
		//defino variables
	var PrecioUno=document.getElementById('PrecioUno').value;
	var PrecioDos=document.getElementById('PrecioDos').value;
	var PrecioTres=document.getElementById('PrecioTres').value;
	var resultadoUno;
	var resultadoDos;
	var resultadoTres;

		//transformo a numerico
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	//operacion

	resultadoUno=PrecioUno*1.21;
	resultadoDos=PrecioDos*1.21;
	resultadoTres=PrecioTres*1.21;


	//muestro resultado

	alert("importes con iva incluido: $ " + resultadoUno+(" $ ") +resultadoDos +(" $ ")+ resultadoTres);

}