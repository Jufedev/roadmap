```bash
# Inicializar un modulo
go mod init

# Descargar dependencias
go get github.com/usuario/modulo
go get github.com/usuario/modulo/v2

# Elimina dependencias que no se usan
go mod tidy

# Usa la cache de las dependencias previamente descargadas
go mod download -json
```


```go
// Uso de las dependencias
package main

// Uso de varias versiones de un paquete
import (
    "github.com/usuario/hello-mode"
    moduloV1 "github.com/usuario/modulo/v1"
    moduloV2 "github.com/usuario/modulo/v2"
)
```

- El archivo go.sum comprueba la integridad del codigo descargado