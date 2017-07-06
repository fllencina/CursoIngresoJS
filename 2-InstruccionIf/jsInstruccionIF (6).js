function Mostrar()
{
//tomo la edad  
	var edad=document.getElementById('edad').value;
/*
	if (edad>12 && edad<18)
		{
			alert("adolescente");
		}
	if (edad<12)
		{
			alert("niños");
		}
	if (edad>17)
		{
			alert("mayor de edad");
		}

*/

//usar if else if
	if (edad<12)
	{
		alert("es un niño");
	}
	else
	{
		if(edad<18)
		{
			alert("adolescente");
		}

		else
		{
			alert("es mayor de edad");
		}
	}

}//FIN DE LA FUNCIÓN