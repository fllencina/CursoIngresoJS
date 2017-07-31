function Mostrar()
{

	var contador=0;
	var maximo=0;
	var minimo;
	var numero;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		console.log(contador);
		if(contador==1)
		{
			minimo=numero;
			maximo=numero;
		}
		else

		{
			if (numero>maximo)
			{
				maximo=numero;
				console.log("maximo " + maximo);
			}

			if (numero<minimo)
			{
				minimo=numero;
				console.log("minimo " + minimo);
			}
		}
		

		respuesta=prompt("ingrese 'no' para salir");

		console.log("maximo " + maximo + "minimo "+ minimo);
	}

	document.getElementById('maximo').value="maximo: "+maximo;
	document.getElementById('minimo').value="minimo: "+minimo;




}//FIN DE LA FUNCIÓN