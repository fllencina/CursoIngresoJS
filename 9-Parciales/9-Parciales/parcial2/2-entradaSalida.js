//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	//defino variables
	var importe;
	var precioFinal;

	//ingreso datos
	importe=prompt("por favor ingrese el valor del producto ");
	if (importe>0)
	{
		precioFinal=importe*1.21;
		document.getElementById('importe').value=precioFinal;
	}
	else
	{
		alert("el importe ingresado debe ser positivo")
		importe=prompt("por favor ingrese el valor del producto ");
		document.getElementById('importe').value="precio final";
	}

	//muestro resultado
	
	
}

