let numeroA = prompt ("ingrese un numero");
parseInt(numeroA)
let numeroB = prompt ("Ingrese otro numero");
parseInt(numeroB)
let numeroC = prompt ("Ingrese otro numero");
parseInt(numeroC)

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












