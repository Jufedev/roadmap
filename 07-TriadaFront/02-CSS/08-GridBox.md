- display: grid

  - Colocárselo al padre
  - Bidimensional (Filas y columnas)

  - repeat(NUM, NUM NUM …)

    - Repetir las columnas que queremos
    - Primer número la cantidad

      - auto-fill
        - Poner columnas que cumpla con el mínimo (Rellena)
      - auto-fit
        - Poner columnas que rellenen todo el espacio (Estira)

    - Segundo número el tamaño
      - Se pueden dos o más tamaños
      - minmax(NUM, NUM)
        - Establecer un tamaño mínimo y máximo

- grid-template-columns: NUM NUM …

  - Crear columnas
  - auto
    - Su ancho depende del contenido

- grid-template-rows: NUM NUM …

  - Crear filas

- grid-auto-rows: NUM

  - Tamaño de la fila generada automáticamente

- grid-auto-columns: NUM

  - Tamaño de la columna generada automáticamente

- grid-column-gap: NUM

  - Separación entre las columnas

- grid-row-gap: NUM

  - Separación entre las filas

- gap: NUM NUM

  - Separación en una sola línea (Filas, Columnas)

- grid-column-start: NUM

  - Donde empieza el elemento

- grid-column-end: NUM

  - Donde termina el elemento

- grid-row-start: NUM

  - Donde empieza el elemento

- grid-row-end: NUM

  - Donde termina el elemento

- grid-column: NUM / NUM

  - Simplificar el start y el end

- grid-row: NUM / NUM

  - Simplificar el start y el end

- grid-area: STRING

  - Nombrar elementos

- grid-template-areas:

  - Distribuir las áreas por el grid
  - “STRING STRING …”
  - “STRING STRING …”
  - “...”

- justify-items: VAL

  - Alinear en línea los elementos (Horizontal)
  - center, start, end

- justify-self: VAL

  - Alinear sólo ese elemento

- align-items: VAL

  - Alinear en línea los elementos (Vertical)
  - center, start, end

- justify-content: VAL

  - Alinear en línea los elementos (Horizontal)
  - center, start, end

- align-content: VAL

  - Alinear en línea los elementos (Vertical)
  - center, start, end

- place-content: center
  - Combinar el justify y el align
