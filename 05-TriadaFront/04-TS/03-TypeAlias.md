- Se usan para tipar objetos o cualquier otro tipo especial

- Se usa Pascal Case

```typescript
/* Union Types */

type Rgb = [number, number, number]

type Uuid = `${string} - ${string} - ${string}`

type Valores = 'grande' | 123 | 'pequeño'

// Uso de los tipos

const uu: Uuid = 'asd - das - das'

const val: Valores = 123

/* Insertion types */

type PersonaInfo = {
  nombre: string
  edad: number
}

type PersonaProperties = {
  readonly id: string
  aLive?: boolean
}

type Persona = PersonaInfo & PersonaProperties

let juan: Persona = { id: '', nombre: 'Juan', edad: 91 }

/* Type Indexing */

type Animal = {
  cantidadPatas: number
  raza: {
    tamaño: string
    color: string
  }
}

const perro: Animal['raza'] = { tamaño: 'grande', color: 'blanco' }
```
