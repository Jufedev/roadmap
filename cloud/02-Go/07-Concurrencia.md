```go
package main // Define el punto de entrada

import "fmt"

// go | Transforma lo de la derecha en una GoRoutine
// GoRoutine | Hilo de ejecucion ligero virtual
// Hilo virtual | Hilo del procesador
// Channel | Comunicar cosas entre GoRoutines

// Buffer | Memoria usada para los canales

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


// Canales y Buffers
c := make(chan int) // Unbuffered
c := make(chan int, 2) // Buffered

// Escritura (Enviar) en el canal
c <- 1
c <- 2

// Lectura (Recibir) en el canal
fmt.Println(<-c)
fmt.Println(<-c)


// WaitGroup: Agrupa goroutines y espera a que todas estas terminen antes de continuar
func main() {
    var wg sync.WaitGroup

    // Definimos cuantas goroutines vamos a esperar
    tareas := 3
    wg.Add(tareas)

    for i := 1; i <= tareas; i++ {
        go func(id int) {
            defer wg.Done() // Marca que esta goroutine termino
            fmt.Printf("Tarea %d iniciada...\n", id)
            time.Sleep(time.Duration(id) * time.Second) // Simula trabajo
            fmt.Printf("Tarea %d finalizada.\n", id)
        }(i)
    }

    // Espera a que todas las goroutines terminen
    wg.Wait()
    fmt.Println("Todas las tareas han finalizado.")
    
    
    fmt.Println("Ahora puedo ejecutar otro proceso, por ejemplo iniciar nuevas goroutines.")

    // Nuevo proceso independiente
    go func() {
        fmt.Println("Proceso adicional ejecutandose despues del WaitGroup.")
    }()

    // Pausa para que se vea la salida del proceso adicional
    time.Sleep(1 * time.Second)
}


// Multiplexacion de Canales | Para que un canal no bloquee el otro
func doSomething(i time.Duration, c chan<- int, param int) {
	time.Sleep(i)
	c <- param
}

func main() {
	c1 := make(chan int)
	c2 := make(chan int)

	d1 := 4 * time.Second
	d2 := 2 * time.Second

	go doSomething(d1, c1, 1)
	go doSomething(d2, c2, 2)

	for i := 0; i < 2; i++ {
        // Aqui ocurre la multiplexacion
		select {
            case channelMsg1 := <-c1:
                fmt.Println(channelMsg1)
            case channelMsg2 := <-c2:
                fmt.Println(channelMsg2)
		}
	}
}


// Mutex (Control de recursos cuando estos son solicitados por mas de 2 componentes al tiempo | Reserva de recursos)
var contador int
var mu sync.RWMutex

// Mutex writer
go func (){
    for i := o; i < 5; i++ {
        mu.Lock()
        contador++ // Writter por que aumenta nuestro valor del contador
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