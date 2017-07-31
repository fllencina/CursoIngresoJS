function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while (sexo!= "f" && sexo!="m")
		//while (!(sexo== "f" || sexo=="m"))
	{
		alert("Por favor ingrese f o m");
		sexo = prompt("ingrese f ó m ");

	}

	switch (sexo)
		{
			case "f":
			document.getElementById('Sexo').value="Femenino";
			break;
			case "m":
			document.getElementById('Sexo').value="Masculino";
			break;	

		}
	}//FIN DE LA FUNCIÓN