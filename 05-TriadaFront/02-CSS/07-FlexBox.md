- display: flex

  - Colocárselo al padre
  - Unidimensional (Filas o columnas)

- flex-flow: VAL VAL

  - Combinar atributos de flex
  - direction y wrap

- flex-direction: VAL

  - Orden de elementos
  - column (elementos en columna), column-reverse (valores inversos), row (elementos en fila), row-reverse (valores inversos)

- flex-wrap: VAL

  - Control de elementos
  - wrap (se ajustan los elementos), wrap-reverse (se ajustan y se invierten)

- writing-mode: VAL

  - Como se acomoda las letras

- flex-grow: NUM

  - Espacio proporcional al número
  - Permite que los ítems crezcan

- flex-basis: NUM

  - Espacio ocupado (Tamaño base)

- flex-shrink: NUM

  - Permite reducir el tamaño

- flex: 1

  - Sintetizar el grow, basis, shrink

- order: NUM

  - Colocar el orden de los elementos en el contenedor

- gap: NUM
  - Separación entre los elementos

### eje x

- justify-content: VAL
  - Posición de elementos
  - Horizontalmente
  - center (centrar), flex-start (inicio), flex-end (final), space-between (elementos al inicio, al centro y al final), space-around (espacio entre elementos (izq y derecha iguales)), space-evenly (mismo espacio entre elementos)

### eje y

- align-items: VAL

  - Posición de elementos
  - Verticalmente
  - center (centrar), flex-start (inicio), flex-end (final), baseline (línea base (centro) del texto), stretch (usa todo el alto)

- align-content: VAL

  - Posición de elementos (Dentro de la fila)
  - center (centrar), flex-start (inicio), flex-end (final)

- align-self: VAL
  - Posición de elementos (Solo un elemento)
  - center (centrar), flex-start (inicio), flex-end (final)
