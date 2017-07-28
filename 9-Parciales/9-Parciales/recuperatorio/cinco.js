function Mostrar()
{
	var mes;

	mes=prompt("por favor ingrese un mes del año");

	switch(mes)
	{
		case "diciembre":
		alert("se vienen las fiestas");
		break;
		case "enero":
		alert("comienza el año");
		break;
		default:
		alert(" no es enero ni febrero");

	}
}
