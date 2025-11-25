```csharp
public abstract class TrianguloBase
{
    public abstract double CalcularArea(int altura, int baseTri);
}

// Herencia
public class TrianguloIsosceles : TrianguloBase
{
    public override double CalcularArea(int altura, int baseTri)
    {
        return baseTri * altura / 2;
    }
}

public class myExcepcionException : Exception
{
    public myExcepcionException() { }

    // Herencia con parametros del padre
    // En este caso se hereda el parametro mensaje
    public myExcepcionException(string mensaje)
        : base(mensaje) { }
}

/* Excepciones y clases estaticas */
static class MyClass2
{
    public static int myFunction()
    {
        int? puede_haber_numero = null;

        try
        {
            if (puede_haber_numero.HasValue == true)
            {
                throw new myExcepcionException("El valor no es nulo");
            }

            return puede_haber_numero.Value;
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message.ToString());
            return 0;
        }
    }
}

```
