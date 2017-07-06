function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota=Math.floor((Math.random() * 10) + 1);

	alert(nota);



	if(nota==10 || nota==9)
	{
		alert("EXCELENTE");
	}

	else
	{
		if(nota>4)
		{
			alert("Aprobado");

		}
		 else
		 {
		 	alert("Vamos, la proxima se puede");
		 }
	 }
		 
	
}//FIN DE LA FUNCIÓN