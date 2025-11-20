```go
package main // Define el punto de entrada

import "fmt"

type Person struct {
    Name string  `json:"name"`  // Struct tags: Metadatos asociados al campo
    Age int      `json:"age"`   // Dar instrucciones adicionales a librerías o paquete
    Email string `json:"email"` // Como se referencia en el archivo JSON en la serializacion o deserializacion
}

func main() {
    p := Person{
        Name: "Juan",
        Age: 30,
        Email: "juan@example.com"
    }

    // Convertir a JSON (Serializar)
    data, error := json.Marshal(p)
    fmt.Println(string(data))


    // JSON de ejemplo (string)
    jsonData := `{"name":"Juan","age":30,"email":"juan@example.com"}`

    // Variable donde se guardará el resultado
    var p Person

    // Convertir JSON a Variable (Deserializar)
    err := json.Unmarshal([]byte(jsonData), &p)
    if err != nil {
        fmt.Println("Error al deserializar:", err)
        return
    }

    // Uso del struct ya poblado
    fmt.Printf("Nombre: %s\nEdad: %d\nEmail: %s\n", p.Name, p.Age, p.Email)
}
```