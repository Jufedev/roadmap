```csharp
class MyClass
{
    /* Modificadores de acceso */
    public string caja { get; set; } // No tiene restricciones
    public int? caja2 { get; set; } // No tiene restricciones

    private char caracter2 = 'a'; // Solo desde la clase
    protected int numero2 = 2; // Clase e hijos
    internal bool logico2 = true; // Solo desde el proyecto
    protected internal int numero3 = 5; // Mismo proyecto e hijos

    // Constructor
    public MyClass(string nombre)
    {
        caja = nombre;
    }

    // Sobre carga de constructores
    public MyClass(string nombre, int edad)
    {
        caja = nombre;
        caja2 = edad;
    }
}

class Operaciones
{
    public int suma(int a, int b)
    {
        return a + b;
    }

    public int suma(int a, int b, int c, int d)
    {
        return a + b + c + d;
    }
}

// Objetos
MyClass miClase = new MyClass("Pepito");
Console.WriteLine(miClase.caja);

MyClass miClase2 = new MyClass("Pepito", 20);
Console.WriteLine(miClase2.caja + miClase2.caja2);

// Objetos y sobrecarga de metodos
Operaciones opera = new Operaciones();
Console.WriteLine(opera.suma(2, 2));
Console.WriteLine(opera.suma(2, 2, 2, 2));

// Objetos y polimorfismo
Animal miAnimal = new Animal();
miAnimal.saltar();

Animal miPerro = new Perro();
miPerro.saltar();

Animal miGato = new Gato();Clases abstactas
miGato.saltar();

// Usando clases estaticas
Console.WriteLine(MyClass2.myFunction());
Clase2.invocar();
```
