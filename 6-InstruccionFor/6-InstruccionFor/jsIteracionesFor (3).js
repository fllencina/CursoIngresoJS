function Mostrar()
{
var cantidad=10000;
var numero;
var contador;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
var cont7=0;
var cont8=0;
var cont9=0;
var cont10=0;
//var repeticiones = prompt("ingrese el número de repeticiones");
for(contador=0;contador<cantidad;contador++)
{
	numero=Math.floor((Math.random() * 10) + 1);
	
	//console.log("numero" + numero);
//console.log("contador"+ contador);
	switch (numero)
	{
		
		case 1:
		cont1++
		break;

		case 2:
		cont2++
		break;

		case 3:
		cont3++
		break;

		case 4:
		cont4++
		break;

		case 5:
		cont5++
		break;

		case 6:
		cont6++
		break;

		case 7:
		if (contador==100)
			{contador--;
			continue;}//para q vuelva al for
		cont7++
		break;

		case 8:
		cont8++
		break;

		case 9:
		cont9++
		break;

		case 10:
		cont10++
		break;
	}
}
console.log("cont1 "+cont1);
console.log("cont2 "+cont2);
console.log("cont3 "+cont3);
console.log("cont4 "+cont4);
console.log("cont5 "+cont5);
console.log("cont6 "+cont6);
console.log("cont7 "+cont7);
console.log("cont8 "+cont8);
console.log("cont9 "+cont9);
console.log("cont10 "+cont10);

}//FIN DE LA FUNCIÓN