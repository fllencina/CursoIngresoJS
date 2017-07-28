//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");
	var numero1;
	var numero2;
	var multiplicacion;
	var suma;
	var resta;

	numero1=prompt("por favor ingrese el primer numero");
	numero2=prompt("por favor ingrese el segundo numero");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	if (numero1==numero2)
	{
		multiplicacion=numero1*numero2;
		resta="";
		suma="";
	}
	else
		if(numero1>numero2)
		{
			resta=numero1-numero2;
			multiplicacion="";
			suma="";
		}
		else
		{
			suma=numero1+numero2;
			multiplicacion="";
			resta="";
		}

	document.write("Multiplicacion: " + multiplicacion + "<br> Suma: "+ suma+ "<br> Resta: "+ resta);
}

