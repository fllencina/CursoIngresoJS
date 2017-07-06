function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
	var estadoCivil=document.getElementById('estadoCivil').value;
	
//alert(estadoCivil);

	if (edad<18 && estadoCivil!='Soltero') 
	{
	}
	
	else
	{
		alert("es soltero y no menor");

	}
	


}//FIN DE LA FUNCIÓN