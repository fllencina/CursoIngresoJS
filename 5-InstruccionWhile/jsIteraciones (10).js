function Mostrar()
{

	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCeros=0;
	var contadorPares=0;
	//declarar contadores y variables 
	var numero;
	
	var respuesta="si";

	var acumuladorPositivo=0;
	var acumuladorNegativo=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;


	while(respuesta!="no")
	{
		
		
		numero=prompt("por favor ingrese un numero");
		numero=parseInt(numero);
	
		if (numero>0)
		{	
			contadorPositivo++;
			acumuladorPositivo=acumuladorPositivo+numero;
			acumuladorPositivo=parseInt(acumuladorPositivo);
			console.log("numeroPositivos: " + acumuladorPositivo);
			console.log("contador Positivos: "+contadorPositivo);
			promedioPositivos=acumuladorPositivo/contadorPositivo;
			console.log("promedio positivos: "+promedioPositivos);

		}
		else
		{	
			if(numero<0)
			{	contadorNegativo++;
				acumuladorNegativo=acumuladorNegativo+(numero);
				console.log("numeroNegativos: " + acumuladorNegativo);
				console.log("contador negativos " + contadorNegativo);
				promedioNegativos=acumuladorNegativo/contadorNegativo;
				console.log("promedio Negativo: "+ promedioNegativos);
			}
			else
			{
				contadorCeros++
				console.log("contador ceros" +contadorCeros);
			}
		}


	respuesta=prompt("ingrese 'no' para salir");
	diferencia=acumuladorPositivo - acumuladorNegativo;



	}

document.write("1- Suma de negativos: " + acumuladorNegativo  "2 - Suma de positivos: " + acumuladorPositivo);


}//FIN DE LA FUNCIÓN