```csharp
enum Colores{
  RED,
  BLUE,
  GREEN
}

enum Colores{
  RED = "rojo",
  BLUE = "azul",
  GREEN = "verde"
}

public interface IOperaciones{
  int sumar(int a, int b);
  int multiplicar(int a, int b);

  int A { get; set; }
}

class Operaciones: IOperaciones{ // Obliga a la clase a implementar los métodos de la interfaz

  public Operaciones(int a){
    A = a;
  }

  int IOperaciones.sumar(int a, int b){};
}

```
