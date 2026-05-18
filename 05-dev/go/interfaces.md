```go
package main // Define el punto de entrada

import "fmt"

// Definimos un "enum" (Se simula pero el comportamiento es igual)
type DiaSemana int

const (
    Lunes DiaSemana = iota // valor por defecto
    Martes
    Miercoles
    Jueves
    Viernes
    Sabado
    Domingo
)

// Asignar otros valores de acuerdo a las keys del "enum"
var diaCalendario = map[DiaSemana]  int {
    Lunes: 1,
    Martes: 2,
    Miercoles: 3,
    Jueves: 4,
    Viernes: 5,
    Sabado: 6,
    Domingo: 7,
}

// Las interfaces no se implementan, al menos manualmente, si no que se cumplen

type Forma interface {
    Area() float64
}

type Circulo struct {
    Radio float64
}

func (c Circulo) Area() float64{
    return math.Pi * c.Radio * c.Radio
}

func imprimirArea(f Forma){
    fmt.Printf("El area es: %.2f\n", f.Area())
}

func main(){
    c := Circulo{Radio: 5}
    imprimirArea(c)
}
```