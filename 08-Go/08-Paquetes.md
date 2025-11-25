Estructura:

- go.mod
- main.go
- domain
- | app.go
- | entities
- | | Persona.go
- | | Elemento.go


main.go

```go
package main // Define el punto de entrada

func main() {
    domain.App()
}
```


app.go

```go
package domain // Define el paquete para el archivo

import "PROYECTO/domain/entities"

func App() { // Mayuscula para que sea publico
    persona := entities.Persona{Nombre: "Pepe", Apellido: "Pepito", Edad: 50}
    elemento := entities.Elemento{Nombre: "Elemento"}
}
```


Persona.go

```go
package entities // Define el paquete para el archivo

type Persona struct {
    Nombre string
    Apellido string
    Edad int
}

func (p Persona) Saludar() string {
    return "Hola " + p.Nombre
}

func (p *Persona) CumplirAnios() {
    p.Edad++
}
``` 


Elemento.go

```go
package entities // Define el paquete para el archivo

type Elemento struct {
    Nombre string
}
```