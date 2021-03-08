 pract4
let numeroA = parseInt ( prompt ("ingrese un numero")); 
let numeroB = parseInt (prompt("ingrese un numero"));
let numeroC = parseInt (prompt("ingrese un numero"));

if (numeroA == numeroB && numeroA == numeroC)
{
document.writeln ("LOS 3 NUMEROS SON IGUALES");
}

 if (numeroA > numeroB && numeroA > numeroC)
    {
        document.writeln("LOS NUMEROS SON DIFERENTES, EL MAYOR ES ESTE:" + numeroA)
    }
    else if (numeroB > numeroA && numeroB > numeroC)
    {
        document.writeln("LOS NUMEROS SON DIFERENTES, EL MAYOR ES ESTE:" + numeroB)
    }
    else 
    {
        document.writeln("LOS NUMEROS SON DIFERENTES, EL MAYOR ES ESTE:" + numeroC)
    }
 master
