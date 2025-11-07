```go
package main // Define el punto de entrada

import "fmt"

func main(){
    // Ejecucion cuando toda la logica de la funcion finalice
    defer fmt.Println ("Fin de la ejecucion")

    // Assertive / Negative
    edad := 20

    if edad < 18 {
        fmt.Println ("Eres menor de edad")
        return
    }

    fmt.Println("Eres mayor de edad")

    // Switch
    valor := 3
    switch valor {
        case 1:
            fmt.Println ("Es 1")
        case 2:
            fmt.Println ("Es 2")
        default:
            fmt.Println ("No es 1, ni 2")
    }
}
```