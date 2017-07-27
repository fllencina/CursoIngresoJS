function Mostrar()
{
  var importe;
  var importeFinal;
  importe=prompt( "por favor ingrese un importe ");
  importe=parseInt(importe);
  importeFinal=importe*1.21;
  document.getElementById('importeFinal').value=importeFinal;
  
}
