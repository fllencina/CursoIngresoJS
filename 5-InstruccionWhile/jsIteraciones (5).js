function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while (sexo!= "f" && sexo!="m")
		//while (!(sexo== "f" || sexo=="m"))
	{
		alert("Por favor ingrese f o m");
		sexo = prompt("ingrese f ó m .");

	}

	document.getElementById('Sexo').value=sexo;

	


	}//FIN DE LA FUNCIÓN