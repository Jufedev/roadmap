```csharp
// Seleccionar
var elementos = from elemento in Array
                where (elemento.propiedad == valor)
                select elemento;

// Ordenar
var example = Array.where(parametro => parametro.prop == valor).orderBy(parametro => parametro.prop);

// Primer elemento
var first = Array.First(parametro => parametro.prop == valor);
var first = Array.Firstordefault(parametro => parametro.prop == valor); // Si el elemento no existe devuelve null

// Ultimo elemento
var last = Array.Last(parametro => parametro.prop == valor);
var last = Array.Lastordefault(parametro => parametro.prop == valor); // Si el elemento no existe devuelve null

// Comprobar si un elemento es unico
var unique = Array.Single(parametro => parametro.prop == valor);
var unique = Array.Singleordefault(parametro => parametro.prop == valor); // Si el elemento no existe devuelve null
```
