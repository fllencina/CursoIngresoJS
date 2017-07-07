/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numero;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
	numeroSecreto=Math.floor((Math.random() * 100) + 1);
		alert(numeroSecreto );
	//numero=document.getElementById('numero').value;

	contadorIntentos=0;
	document.getElementById('intentos').value=contadorIntentos;
}

function verificar()
{
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;


	numero=document.getElementById('numero').value;

	if (numero==numerosecreto && contadorIntentos==1)
	{
		alert("usted es un Psíquico");
	}
	else
		if (numero==numerosecreto&&contadorIntentos==2)
		{
			alert("excelente percepción");
		}
		else
		{
			if (numero==numerosecreto && contadorIntentos==3)
			{
				alert("Esto es suerte");

			}
			else
				if(numero==numerosecreto && contadorIntentos==4)
				{
					alert("Excelente técnica");
				}
				else
				{
					if(numero==numerosecreto && contadorIntentos==5)
					{
						alert("usted está en la media");

					}
					else
						if(numero==numerosecreto && contadorIntentos>5 && contadorIntentos<10)
						{
							alert("falta técnica");
						}
						else
						{
							alert("afortunado en el amor!!");
						}
				}

		}
	
	


}


