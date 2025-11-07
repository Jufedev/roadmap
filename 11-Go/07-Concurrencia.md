```go
package main // Define el punto de entrada

import "fmt"

// go | Transforma lo de la derecha en una GoRoutine
// GoRoutine | Hilo de ejecucion ligero virtual
// Hilo virtual |  Hilo del procesador
// Channel | Comunicar cosas entre GoRoutines

// Envio hacia el canal
func decirHola(canal chan<- string){
    time.Sleep(1 * time.Second)
    canal <- "Hola desde la GoRoutine"
}

// Recibir por el canal
func imprimirHola(canal <-chan string){
    msg := <-canal
    fmt.Prinln(msg)
}

func main(){
    canal := make(chan string)
    go decirHola(canal)
    imprimirHola(canal)
}


// Ejemplo 2
canal2 := make(chan int)
go func (){
    for i := o; i < 5; i++ {
        canal2 <- i
    }
}()

for num := range canal2 {
    fmt.Prinln("Numero recibido: ", num)
}


// Ejemplo Mutex (Control de recursos cuando estos son solicitados por mas de 2 componentes al tiempo | Reserva de recursos)
var contador int
var mu sync.RWMutex

// Mutex writer
go func (){
    for i := o; i < 5; i++ {
        mu.Lock()
        contador++
        mu.Unlock()
        time.Sleep(100 * time.Millisecond)
    }
}()

// Mutex reader
for i := o; i < 3; i++ { // Simular 3 accesos
    go func (id int){
        for j := o; j < 6; j++ {
            mu.RLock()
            fmt.Prinf("Leyendo desde la GoRoutine %d: %d\n", id, contador)
            mu.RUnlock()
            time.Sleep(100 * time.Millisecond)
        }
    }(i)
}
```