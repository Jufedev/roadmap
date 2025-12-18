```typescript
/* Optional properties y propiedades de solo lectura */
type Persona = {
  readonly id: string
  nombre: string
  edad: number
  aLive?: boolean
}

let juan: Persona = { id: '', nombre: 'Juan', edad: 91 }

// Si existe el valor se ejecuta el metodo
juan.aLive?.toString()
```
