function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	var suma;

	while (respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("Ingrese un numero");
		console.log(numero);
		numero=parseInt(numero);


		if (numero>0)
		{
			positivo=positivo+numero;
			console.log(positivo);
		}
		else
		{
			negativo=negativo*numero;
			console.log(negativo);
		}
		respuesta=prompt("ingrese 'si' para continuar");

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN