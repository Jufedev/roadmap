# ¿Qué es un componente?

- Una pieza de código que combina lógica con interfaz de usuario en una sola unidad reutilizable.

### Composición

- **Selector:** Como se va a instanciar el componente

- **Template:** Es el HTML del componente.

- **Templateurl:** Es la ruta donde esta el HTML del componente.

- **Styles:** Es el CSS del componente.

- **Styleurls:** Es la ruta donde esta el CSS del componente.

- **Imports:** Todas las funcionalidades o componentes que se van a usar en el componente.

### Ejemplo

```JavaScript
export class NombreComponente{
  prop = val
}
```

### LLamar al componente

`<nombre-componente/>`

`<nombre-componente> <nombre-componente/>`

## Comunicación entre componentes

### De padre a hijo

En el componente hijo declaramos una variable donde recibimos los datos

`@Input() prop: tipo`

En el padre invocamos el hijo y le pasamos los datos

`<componente prop="valor">`

### De hijo a padre

En el hijo declaramos la data que vamos a enviar

`@output() prop = new EventEmitter<tipo>()`

`this.prop.Emit(valor)` _Debe ir en una función_

En el padre declaramos una función para recibir la data enviada por el hijo

`<componente-hijo (pop)="funcion($event)">`

`funcion($event){}` _Dentro de esta funcion podemos acceder a la data_
