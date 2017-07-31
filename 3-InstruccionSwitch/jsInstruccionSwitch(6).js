function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

laHora=parseInt(laHora);
 		

//alert (laHora);
	if (laHora>=7&&laHora<=11)
	{
		alert("Es de mañana");
	}
	else
	{
		if(laHora>=12&&laHora<=19)
		{
			alert("Es de tarde");
		}
		
		else
		{
			switch (true)
			{
				case (laHora>=20&&laHora<=24):
				case (laHora>=0&&laHora<=6):
				alert("Es de noche");
				break;

				default:
				alert("La hora no existe");
				break;

			}
			
			{
				




			}
		}
	
	}




}//FIN DE LA FUNCIÓN