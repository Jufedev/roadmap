```csharp
void mensaje(string mensaje)
{
    Console.WriteLine("Hola, el mensaje es: " + mensaje);
}

FuncionDelegado delegadoObj = mensaje;
delegadoObj("Hola");

public delegate void FuncionDelegado(string mensaje);


// Generics
public class Example<T>{
  public T comment{get; set;}

  public void Add(T input){
    comment = input;
  }
  public T Delete(T input){
    return input;
  }
}
```
