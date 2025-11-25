```go
package main // Define el punto de entrada

import "fmt"

func main(){
    for i := 0; i < 5; i++ {
        fmt.Printf("Iteracion: %d\n", i) // %d => ahi ira un digito y el que va a ir sera el segundo parametro
    }

    // Tipo while
    n := 0
    for n < 3 {
        fmt.Printf("Iteracion: %d\n", n)
        n++
    }

    // Bucle infinito
    for {
        n++

        if n == 5 {
            continue
        }

        if n >= 7 {
            break
        }
    }

    // Range
    slice := []string{"uno", "dos", "tres"}

    for index, value := range slice {
        fmt.Printf("Iteracion: %d, Valor: %s\n", index, value)
    }
}
```