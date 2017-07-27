function Mostrar()
{

	var numero1;
	var numero2;
	var multiplicacion;
	var resta;
	var suma;


	numero1=prompt("imgrese el primer numero");
	numero2=prompt("imgrese el segundo numero");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if (numero1==numero2)
	{
		multiplicacion=numero1*numero2;
		multiplicacion=parseInt(multiplicacion);
		resta="";
		suma="";
	}
	else
	{
		if(numero1>numero2)
		{
			resta=numero1-numero2;
			resta=parseInt(resta);
			multiplicacion="";
			suma="";
		}
		else
		{
			
			suma=numero1+numero2;
			multiplicacion="";
			resta="";
		}
	}
	document.write("multiplicacion: " + multiplicacion + " <br> resta: "+ resta+ "<br> suma: "+ suma);
}
