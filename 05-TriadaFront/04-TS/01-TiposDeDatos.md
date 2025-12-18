```typescript
/* Variables */
let cadena: string = 'Hola mundo'

let numero: number = 10

let logico: boolean = true

let varios: string | boolean = true

/* Funciones */
function sumar(a: number, b: number): number {
  return a + b
}

const sumar = (a: number, b: number): number => {
  return a + b
}

/* Arrays */
const nombres: string[] = ['a', 'b']

const nombres: Array<string> = ['a', 'b']

const varios: (string | number)[] = ['a', 2, 'b']

const matriz: string[][] = [['b'], ['a']]

/* Objetos */
// Se debe crear un tipo
type Persona = {
  nombre: string
  edad: number
}

let juan: Persona = { nombre: 'Juan', edad: 91 }

/* Asercion de tipos */
const imagen = document.getElementById('id')

if (imagen instanceof Image) {
  imagen.src = ''
}
```
