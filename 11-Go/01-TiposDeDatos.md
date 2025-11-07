```go
package main // Define el punto de entrada

import (
    "fmt" // Paquete para print line
    "strings" // Manejo de String
)

// bool | defecto: false
// string | defecto: ""
// int, int8, int16, int32, int64 | defecto: 0
// uint, uint8, uint16, uint32, uint64 | Entero sin signo (Desde 0 hasta el positivo) | defecto: 0
// float32, float64 | Decimales - Usar 32 o 64 dependiendo del sistema (32 bits o 64 bits) | defecto: 0
// byte | uint8 - trabajar con datos binarios | defecto: 0
// rune | int32 - representar un solo caracter que ocupa mas de un byte (como un emoji combinado) | defecto: 0
// complex64, complex128 | Numeros complejos | defecto: 0 + i0

func main(){
    fmt.Println("Hola Mundo")

    entero := 10 // ES LO MISMO QUE var entero int = 10
    
    mensaje := "Hola"
    enMayuscula := strings.ToUpper(mensaje)

    verdadero := true

    // Arreglos
    // Longitud: Cantidad de elementos
    // Capacidad: Tamaño maxmo
    arrayFijo := [3]int{1,2,3}
    sliceVariable := []int{4,5,6}
    sliceVariable = append(sliceVariable, 7)

    // Mapas
    diccionario := map[string]int{
        "clave1": 1,
        "clave2": 2,
    }

    // Structs
    type Persona struct {
        Nombre string // Se coloca en mayuscula para decir que es exportable al exterior
        Edad int
    }

    persona := Persona{Nombre: "Pepe", Edad: 85}
    personaPepito := Persona{Nombre: "Pepito"} // Se puede crear sin valores, puesto que cada tipo de dato ya tienen un valor por defecto
}
```