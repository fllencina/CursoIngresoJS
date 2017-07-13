function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	/*while (true)
	{
		console.log("Hola"); //se ejecutaria 1 sola vez
		break;// me saca de la instruccion
		console.log("chau"); // no se ejecutara nunca porque esta despues de un break

	}
	*/
	while (contador<5)
	{
		contador=contador+1;
		numero=prompt("ingrese un numero: ");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	}



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/* 
var salir=no;

while (salir!="si")
{
	console.log("hola");
	salir=si;
	console.log("chau");

}
*/