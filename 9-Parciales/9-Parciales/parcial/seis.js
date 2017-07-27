function Mostrar()
{
	//defino variables
	var contadordia=0;
	var importe=0;
	var contadorTotal=0;
	var maximo=0;
	var minimo=0;
	var inicio=0;

	//ingreso de datos
	while(contadordia<24)
	{	
		
		importe=prompt("por favor ingrese el importe de ventas del dia");
		importe=parseInt(importe);
			
			//valido
			
			if (importe>0)
			{
				contadordia++;
				contadorTotal=contadorTotal+importe;
				if (inicio==0)
					{
						maximo=importe;
						minimo=importe;
						inicio=1;
					}


					if (importe>maximo)
					{
						maximo=importe;
					}
					if (importe<minimo)
					{
						minimo=importe;
						
					}
			}
			else
			{
				importe=prompt("por favor ingrese el importe de ventas del dia");
			}


		
		
			
	}	

	console.log("max " + maximo + "min "+minimo);

}
