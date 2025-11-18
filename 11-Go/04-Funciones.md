```go

package main // Define el punto de entrada

import "fmt"

func suma(a, b int) int {
    return a + b;
}

func dividir(a, b float64) (float64, float64) {
    cociente := a / b
    resto = := float64(int(a) % int(b))
    
    return cociente, resto;
}


// funcion con manejo de errores
func dividir0(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("No se puede dividir por 0.")
    }

    cociente := a / b
    
    return cociente, nil;
}

func main() {
    cociente, error := dividir0(10, 0)
    if error =! nil {
        fmt.Println(error)
        return
    }

    fmt.Println(cociente)
}


// Numero variable de argumentos | Funciones variadicas
func imprimirNombres(nombres ...string) {
    for _, nombre := range nombres {
        fmt.Println(nombre)
    }
} 

nombres := []string{"a", "b", "c"}
imprimirNombres(nombre...)


// funcion closure (devuelve otra funcion)
func contador() func() int {
    c := 0

    return func() int {
        c++
        return c
    }
}

func main() {
    cont := contador ()
    fmt.Println("Contador: ", cont())
    fmt.Println("Contador: ", cont())
    fmt.Println("Contador: ", cont())
    fmt.Println("Contador: ", cont())
}


// Go no tiene clases, para ello se usa lo siguiente
type Rectangulo struct {
    Ancho, Alto float64
}

func (r Rectangulo) Area() float64 {
    return r.Ancho * r.Alto
}

func main() {
    rect  := Rectangulo{Ancho: 10, Alto: 5}
    fmt.Println("Area del rectangulo: ", rect.Area()) // Funciona como una clase
}


// Recursividad
func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

func main() {
    for i := 0; i < 10; i++ {
        fmt.Printf("fibonacci(%d) = %d\n", i, fibonacci(i))
    }

    // Otra definicion de funciones | Variable como funcion, ideal para los scopes
    numero := func(n int) int {
		return n
	}

    fmt.Println("Numero:", fibo(2))
}
```