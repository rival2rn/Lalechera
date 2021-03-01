let numero1 = prompt ("ponga su numero");

let numero2 = prompt ("ponga el otro");

if(numero1 >0 )
{
    document.writeln( "EL NUMERO " + numero1 +" ES POSITIVO")
} 
else{

    document.writeln("EL NUMERO" +numero1+"ES NEGATIVO")
}

if(numero2 >0 )
{
    document.writeln( "EL NUMERO " + numero2 +" ES POSITIVO")
} 
else{

    document.writeln("EL NUMERO" +numero2+"ES NEGATIVO")
}

if(numero1 > 0  && numero2 > 0)
{
  document.writeln("Ambos numeros son positivos");
}
else if (numero1> 0 && numero2 <0)
{
    document.writeln("solo uno es positivo");
}

else if (numero1 < 0 && numero2 <0)
{
    document.writeln("ambos son negativos");
}
