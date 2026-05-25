```csharp
class Animal
{
    public virtual void saltar()
    {
        Console.WriteLine("El animal salta");
    }
}

class Perro : Animal
{
    public override void saltar()
    {
        Console.WriteLine("El perro salta");
    }
}

class Gato : Animal
{
    public override void saltar()
    {
        Console.WriteLine("El gato salta");
    }
}
```
