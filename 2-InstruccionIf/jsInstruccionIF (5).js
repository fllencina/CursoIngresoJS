function Mostrar()
{
//tomo la edad  
	var edad=document.getElementById('edad').value;

	if (!(edad>12 && edad<18))
		
		{
			alert("No adolescente");
		}

}//FIN DE LA FUNCIÓN

/*
! niega la logica siguiente
 otra opcion era dejar el if sin alert y 
agregar else con alert
*/