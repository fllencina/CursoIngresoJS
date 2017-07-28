function Mostrar()
{
  var importe;
  var importeDescuento;

  importe=prompt("por favor ingrese el importe");
  importeDescuento=importe*0.75;

  document.getElementById('importeFinal').value=importeDescuento;
}
