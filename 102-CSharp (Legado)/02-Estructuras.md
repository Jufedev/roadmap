```csharp
// Arrays
var arreglo = new string[] { "uno", "dos", "tres" };
Console.WriteLine(arreglo[2]);
int[] arreglo_numerico = new int[5];
int[] arreglo_numerico2 = { 1, 2, 3, 4 };
string[][] matriz_de_strings = new string[5][]; // Se usa doble foreach

// Diccionarios
var diccionario = new Dictionary<string, int>
{
    { "uno", 1 },
    { "dos", 2 },
    { "tres", 3 }
};
Console.WriteLine(diccionario["tres"]);

// Tipos anonimos
// Parecidos a los diccionarios pero no generan error de compilacion
// usados en LINQ y para almacenar datos temporales, son inmutables a comparacion de los diccionarios
var persona = new { Nombre = "Juan", Edad = 30 };
Console.WriteLine($"Nombre: {persona.Nombre}, Edad: {persona.Edad}");

// Sets (conjuntos)
var conjunto = new HashSet<int> { 1, 2, 45, 7, 1, 7 };
Console.WriteLine(conjunto);

// tuplas
var tupla = ("uno", "dos", "tres");
Console.WriteLine(tupla);

// Listas
List<bool> lista_logica = new List<bool>();
```
