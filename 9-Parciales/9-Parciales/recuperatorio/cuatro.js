function Mostrar()
{
	var numero1;
	var numero2;
	var suma;

	numero1=prompt("por favor ingrese el primer numero");
	numero2=prompt("por favor ingrese el segundo numero");

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	suma=numero1+numero2;

	if(suma>0)
	{
		alert("el resultado es positivo");
	}
	else
		if(suma==0)
		{
			alert("el resultado es cero");
		}
		else
		{
			alert("el resultado es negativo");
		}
}
