let quimico = prompt("Ponga un numero");
parseInt(quimico);
let cirujano = prompt("Ponga otro numero");
parseInt(cirujano);
if(cirujano != 0)
{
   let Anuel = quimico/cirujano;
   document.writeln( "Esta operacion da "+ Anuel);
}
else
{
    document.writeln("No se puede dividir entre 0");
}