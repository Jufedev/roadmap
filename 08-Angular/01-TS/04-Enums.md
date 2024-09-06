- Evitar los "magic strings"

- Deben ser finitos y cortos

- Se pueden usar como un tipo

- Se transpilan a código JS si NO se usa el const al inicio.

```typescript
enum ejemplo {
  cadena,
  numero = 50,
}

const enum ejemplo2 {
  booleano,
  valor = 'Hola mundo',
}

ejemplo.numero
ejemplo2.booleano
```
