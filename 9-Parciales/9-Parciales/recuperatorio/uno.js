
function Mostrar()
{
	var lado;
	var superficie;

	lado=document.getElementById('laBase').value;

	lado=parseInt(lado);

	superficie=lado*4;

	alert("la superficie es: " + superficie);
}
