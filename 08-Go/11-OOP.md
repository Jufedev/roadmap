```go
// Getter & Setters

package main // Define el punto de entrada

import "fmt"

type Persona struct {
    id int
    name string    
}

// Setters
func (e *Persona) SetId(id int){
    e.id = id
}

func (e *Persona) SetName(name string){
    e.id = id
}

// Getters
func (e *Persona) GetId() int{
    return e.id
}

func (e *Persona) GetName() string{
    return e.name
}


func NewPersona (id int, name string) *Persona {
    return &Persona{
        id: id,
        name: name,
    }
}

func main() {
    e := Persona{}
    e.id = 1
    e.name = "Pepito"
    e.SetId(2)
    e.SetName("Alvarito")
    fmt.Println(e.GetId())
    fmt.Println(e.GetName())

    e2 := NewPersona(3, "Jose")
    fmt.Println("%v", *e2)
}
```

```go
// HERENCIA

// GO se apoya sobre la composicion ya que no usa la herencia
// Composicion: Un tipo incluye otro tipo (embeds) para reutilizar campos y metodos sin usar herencia clasica

package main

import "fmt"

type Persona struct {
	name string
	age  int
}

type Empleado struct {
	id int
    title string
}

type Trabajador struct {
	Persona
	Empleado
}

func main() {
	worker1 := Trabajador{}
	worker1.id = 1
	worker1.name = "Jose"
	worker1.age = 27
    // worker1.title = "Ingeniero" No es necesario definir un valor ya que se tiene un valor por defecto
	fmt.Printf("%v", worker1)
}
```

```go
// HERENCIA & POLIMORFISMO

package main // Define el punto de entrada

import "fmt"

// Tipo base con metodo
type Base struct {
    tag string
}

func (b Base) DescribeTag() string {
    return fmt.Sprintf("Base tag is %s", b.tag)
}

// Container "compone" Base (embedded)
type Container struct {
    Base // campo anonimo: embedding / composicion
    tag  string
}

// Container define su propia version del metodo
func (c Container) DescribeTag() string {
    return fmt.Sprintf("Container tag is %s", c.tag)
}

// Interfaz que describe el comportamiento (Aqui se aplica el polimorfismo)
type TagDescriber interface {
    DescribeTag() string
}

func printTag(td TagDescriber) {
    fmt.Println(td.DescribeTag())
}

func main() {
    b := Base{tag: "b's tag"}
    co := Container{Base: b, tag: "co's tag"}

    // Llamadas directas
    fmt.Println(b.DescribeTag())        // Base tag is b's tag
    fmt.Println(co.DescribeTag())       // Container tag is co's tag

    // Llamar explicitamente al metodo del Base embebido
    fmt.Println(co.Base.DescribeTag())  // Base tag is b's tag

    // Polimorfismo via interfaz: tanto Base como Container implementan DescribeTag
    printTag(b)  // acepta Base
    printTag(co) // acepta Container porque tiene DescribeTag
}
```