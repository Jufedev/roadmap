```csharp
using System.Text; // Namespace para el uso de StringBuilders

string saludo = "No hay saludo";
saludo =
    @"Hola,
------ Mundo!";
Console.WriteLine(saludo);

char caracter = 'd';
Console.WriteLine(caracter);

int numero = 5;
numero += 4;
Console.WriteLine(numero);

float numerof_decimal = 6.6f;
Console.WriteLine(numerof_decimal);

double numero_decimal = 9.4;
Console.WriteLine(numero_decimal);

Console.WriteLine(numero + numerof_decimal + numero_decimal);

bool logico = true;
Console.WriteLine(logico);

DateTime fecha = new DateTime(2024, 9, 30);
Console.WriteLine(fecha);

StringBuilder cadenaModificable = new StringBuilder("Hola");
Console.WriteLine(cadenaModificable);
cadenaModificable.Append("Modificaion");
Console.WriteLine(cadenaModificable);

var myString = "Mi cadena"; // Extraccion del tipo
Console.WriteLine(myString.GetType());
Console.WriteLine(typeof(string));

const string MyStringConst = "Mi constante";
Console.WriteLine($"El valor de mi bool es: {logico} y de mi constante es: {MyStringConst}");
```
