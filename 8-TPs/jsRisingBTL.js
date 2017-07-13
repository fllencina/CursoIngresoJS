/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

 var Edad;
 var Sexo;
 var EstadoCivil;
 var Sueldo;
 var legajo;
 var Nacionalidad;

Edad=0;
function ComenzarIngreso () 
{
	while(!(Edad>=18 && Edad<= 90 ))
	{
		Edad=prompt("por favor ingrese Edad: "  );
		Edad=parseInt(Edad);
		
		console.log("Edad:" + Edad);
	}

	document.getElementById('Edad').value=Edad + " Años";

	

	while(!(Sexo=='f' || Sexo=='m' ))
	{
		Sexo=prompt("por favor ingrese Sexo : \n “M” para masculino y “F” para femenino");
	
	}

	document.getElementById('Sexo').value=Sexo;

	 while (!(EstadoCivil>0 &&EstadoCivil<5))
	{
		EstadoCivil=prompt("Por favor ingrese Estado civil: \n 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		EstadoCivil=parseInt(EstadoCivil);

	}
	document.getElementById('EstadoCivil').value=EstadoCivil;
	

	while (!(Sueldo>=8000))
	{
		Sueldo=prompt("por favor ingrese Sueldo");
		Sueldo=parseInt(Sueldo);
	}

	document.getElementById('Sueldo').value=Sueldo;



	while (!(Legajo>=1000 && Legajo <=9999))
	{
		Legajo=prompt("por favor ingrese legajo");
		Legajo=parseInt(Legajo);
	}

	document.getElementById('Legajo').value=Legajo;

	while (!(Nacionalidad=='a' || Nacionalidad=='e'|| Nacionalidad=='n'))
	{
		Nacionalidad=prompt("por favor ingrese Nacionalidad : \n “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

	}

	document.getElementById('Nacionalidad').value=Nacionalidad;



	
 
}
