//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 5-Switch");
	var mes;

	mes=prompt("por favor ingrese un mes del año");

	switch(mes)
	{
		case "enero":
		case "febrero":
		alert( "Veranito!!")
		break;
		default:
		alert("Extraño enero y febrero!!");
	}
}

