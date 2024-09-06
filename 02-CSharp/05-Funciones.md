```csharp
int sumar(int a, int b)
{
    return a + b;
}
Console.WriteLine(sumar(50, 50));

// Parametros por referencia
string variable_cambiante;
void ejecutar(out string variable_cambiante)
{
    variable_cambiante = "Tengo un nuevo valor!";
    Console.WriteLine("Ejecucion de ejecutar :D");
}
ejecutar(out variable_cambiante);
Console.WriteLine(variable_cambiante);

// Recursividad
int fibonacci(int num){
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci (num - 2);
}
Console.WriteLine(fibonacci(7));

```
