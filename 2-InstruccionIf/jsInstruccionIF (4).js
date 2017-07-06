function Mostrar()
{
//tomo la edad  
	var edad=document.getElementById('edad').value;

	if (edad>12 && edad<18)
		{
			alert("adolescente");
		}



}//FIN DE LA FUNCIÓN

/*
dos opciones para resolverlo
if (edad>12)
{
	if(edad<18)
		{
			
		}
}

o

if (edad>12 && edad<18)
	{
		
	}


*/