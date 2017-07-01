/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	//defino variables
	var numeroUno=document.getElementById('numeroUno').value;
	var numeroDos=document.getElementById('numeroDos').value;
	var resultado;

	//transformo palabras a numeros

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//operacion

	resultado=(numeroUno+numeroDos);

	//muestro resultado por alert

	alert(resultado);


}

function restar()
{
	//defino variables
	var numeroUno=document.getElementById('numeroUno').value;
	var numeroDos=document.getElementById('numeroDos').value;
	var resultado;

	//transformo palabras a numeros
/*
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
*/
	//operacion

	resultado=(numeroUno-numeroDos);

	//muestro resultado por alert

	alert(resultado);
}

function multiplicar()
{ 
	//defino variables
	var numeroUno=document.getElementById('numeroUno').value;
	var numeroDos=document.getElementById('numeroDos').value;
	var resultado;

	//transformo palabras a numeros
/*
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
*/
	//operacion

	resultado=(numeroUno*numeroDos);

	//muestro resultado por alert

	alert(resultado);
}

function dividir()
{
	//defino variables
	var numeroUno=document.getElementById('numeroUno').value;
	var numeroDos=document.getElementById('numeroDos').value;
	var resultado;

	//transformo palabras a numeros
/*
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
*/
	//operacion

	resultado=(numeroUno/numeroDos);

	//muestro resultado por alert

	alert(resultado);
}

