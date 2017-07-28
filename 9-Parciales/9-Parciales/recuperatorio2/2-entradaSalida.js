//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	var importe;
	var importeFinal;
	var descuento;

	importe=prompt("por favor ingrese un importe");
	descuento=1+0.21;
	importeFinal=importe*descuento;

	document.getElementById('importe').value=importeFinal;

}

