```go
package main // Define el punto de entrada

import "fmt"

// * -> Puntero
// & -> Referencia | Direccion de memoria
// var a = 1 | Referencia de nombre "a" que apunta a un espacio de memoria que contiene en su interior el calor 1

// Para usar la misma referencia de memoria
fun incrementar(numero *int) {
    *numero++
}

func main(){
    valor := 10
    fmt.Println ("Antes de incrementar: ", valor)
    
    incrementar(&valor)
    fmt.Println ("Despues de incrementar: ", valor)
}

puntero := new(int)
fmt.Println ("Valor de la memoria del puntero: ", puntero)
fmt.Println ("Valor del puntero: ", *puntero)

*puntero = 20
fmt.Println ("Puntero con otro valor: ", *puntero)
```