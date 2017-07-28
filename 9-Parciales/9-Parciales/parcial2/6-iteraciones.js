//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");
	var importe;
	var maximo;
	var minimo;
	var contador=0;
	var inicio=0;

	while(contador<7)
	{
		importe=prompt("por favor ingrese el importe de ventas");


		if (importe>0)
		{
			contador++;

			if(inicio==0)
			{
				maximo=importe;
				minimo=importe;
				inicio=1;
			}

			if (importe>maximo)
			{
				maximo=importe;
			}
			else
			{
				minimo=importe;
			}
		}
		if (importe<0)
		{
			alert("Por favor ingrese un importe mayor a cero");
			importe=prompt("por favor ingrese el importe de ventas");
		}
		
	}
	console.log("vueltas: " + contador);
	alert("maximo de ventas: " + maximo + "minimo de ventas: "+ minimo);
}

