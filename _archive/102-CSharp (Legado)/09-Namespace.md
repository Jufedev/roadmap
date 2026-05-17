```csharp
// Se pueden declarar: Classes Interfaces Structures Delegates
// using System;
using saludoName;

static class Clase2
{
    public static void invocar()
    {
        HolaMundo.saludar();
    }
}

namespace saludoName
{
    class HolaMundo
    {
        public static void saludar()
        {
            Console.WriteLine("Hola Mundo desde Namespace!");
        }
    }
};
```
