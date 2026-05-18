```go
package main // Define el punto de entrada

import "fmt"

func main() {
    // Texto a hashear
    data := "Hola mundo"

    hash := sha256.New()

    hash.Write([]byte(data))

    arregloHash := hash.Sum(nil)
    fmt.Println(data)
    fmt.Printf("%x\n", arregloHash)
}
```

```go
// Manejo de variables de entorno

package main // Define el punto de entrada

import "fmt"

func main() {
    // Cargar el archivo .env
    error := godotenv.Load()

    if error != nil {
        log.Fatal("Error al cargar el archivo .env")
    }
    // Nombre de la variable de entorno
    envVar := "APP_PORT"

    // Intentamos obtenerla
    port := os.Getenv(envVar)

    // Si esta vacia, usamos un valor por defecto
    if port == "" {
        port = "8080"
    }

    fmt.Printf("Puerto de la aplicacion: %s\n", port)
}


// variables de entorno manejando valores por defecto
func getEnv(key, fallback string) string {
    val := os.Getenv(key)
    
    if val == "" {
        return fallback
    }
    
    return val
}

func main() {
    // Intentamos obtener la variable de entorno y le asignamos valor por default
    port := getEnv("APP_PORT", "8080")

    fmt.Printf("Puerto de la aplicacion: %s\n", port)
}


```
