- Se usan para tipar objetos

- Se usa Pascal Case

- Se puede usar la misma variable

- Pueden heredar tipos de otra interfaz

```typescript
interface Persona {
  nombre: string
  accion: () => void
}

interface Juan extends Persona {
  estatura: number
}
```
