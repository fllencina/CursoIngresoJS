/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionHumano;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	numeroSecreto =Math.floor( Math.random()*3)+1;
		alert(numeroSecreto);
		
		switch(numeroSecreto)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;

		}
		alert(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
		alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="piedra";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");	
	}
	else 
	{
		if (eleccionHumano=="tijera")
		{
			alert("perdio");
		}
		else
		{
			alert("gano");
		}
	}


}//FIN DE LA FUNCIÓN

function papel()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		
	}
	else 
	{
		if (eleccionHumano=="tijera")
		{
			alert("gano");
		}
		else
		{
			alert("perdio");
		}
		
	}

}//FIN DE LA FUNCIÓN

function tijera()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
				
	}
	else 
	{

		if (eleccionHumano=="piedra")
		{
			alert("gano");
		}
		else
		{
			alert("perdio");
		}
		
	}


}//FIN DE LA FUNCIÓN