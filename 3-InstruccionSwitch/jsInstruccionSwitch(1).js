function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
/*
		if(mesDelAño=="Enero")
		{
			alert("que comiences bien el año!!");
		}
		
		else
		{
			if(mesDelAño=="Marzo")
			{
				alert("a clases!!!");
			}
			else
			{
				if(mesDelAño=="Julio")
				{
					alert("se vienen las vacaciones!!!");

				}
				else
				{
					if(mesDelAño=="Diciembre")
					{
						alert("Felices Fiestas!!!")
					}
				}
			}
		}
		*/

	switch (mesDelAño) 
	{
    case "Enero":
       	alert("que comiences bien el año!!");
        break;
    case "Marzo":
       	alert("a clases!!!");
        break;
    case "Julio":
       alert("se vienen las vacaciones!!!");
        break;
    case "Diciembre":
        alert("Felices Fiestas!!!")
        break;
   
	}

}//FIN DE LA FUNCIÓN


