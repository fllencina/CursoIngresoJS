function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while (respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("ingrese el " + contador + "ª numero");
		numero=parseInt(numero);

		acumulador=acumulador+numero;
	

		respuesta=prompt("ingrese si para continuar");
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN