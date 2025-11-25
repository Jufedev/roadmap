```csharp
if (numero == 12 && logico == true)
{
    Console.WriteLine("El valor es 12 y logico es true");
}
else if (numero == 53 || logico == false)
{
    Console.WriteLine("El valor es 53 o logico es false");
}
else
{
    Console.WriteLine("El valor no es 12");
}

//Tipos nullables
int? puede_haber_numero = null;
if (puede_haber_numero.HasValue)
{
    Console.WriteLine("----> " + puede_haber_numero.Value);
}

bool tiene_valor = puede_haber_numero.HasValue ? false : true;
Console.WriteLine("El valor es nulo? : " + tiene_valor);

switch (puede_haber_numero.HasValue)
{
    case true:
        Console.WriteLine("Si tiene un numero adentro");
        break;
    case false:
        Console.WriteLine("No tiene un numero adentro");
        break;
    default:
}
```
