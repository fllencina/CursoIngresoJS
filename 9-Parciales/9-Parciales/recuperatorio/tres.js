function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	var suma;

	precioUno=document.getElementById('precioUno').value;
	precioDos=document.getElementById('precioDos').value;
	precioTres=document.getElementById('precioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	promedio=suma/3;

	alert("el resultado de la suma de los 3 precios es: "+ suma+  "\nel promedio de los precios es: "+promedio);

}
