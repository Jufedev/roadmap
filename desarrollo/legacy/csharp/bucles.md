```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

foreach (var item in arreglo)
{
    Console.WriteLine(item);
}

foreach (var item in conjunto)
{
    Console.WriteLine(item);
}

int j = 0;
while (true)
{
    if (j == 6)
    {
        break;
    }
    Console.WriteLine("j desde while:" + j);
    j ++;
}

int k = 0;
do {
    k ++;
    if (k % 2 == 0)
    {
        continue;
    }
    Console.WriteLine("k desde do:" + k);

}while (k < 6 );
```
