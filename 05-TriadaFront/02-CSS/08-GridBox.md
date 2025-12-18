- display: grid

  - Colocarselo al padre
  - Bidimensional (Filas y columnas)

  - repeat(NUM, NUM NUM …)

    - Repetir las columnas que queremos
    - Primer numero la cantidad

      - auto-fill
        - Poner columnas que cumpla con el minimo (Rellena)
      - auto-fit
        - Poner columnas que rellenen todo el espacio (Estira)

    - Segundo numero el tamaño
      - Se pueden dos o mas tamaños
      - minmax(NUM, NUM)
        - Establecer un tamaño minimo y maximo

- grid-template-columns: NUM NUM …

  - Crear columnas
  - auto
    - Su ancho depende del contenido

- grid-template-rows: NUM NUM …

  - Crear filas

- grid-auto-rows: NUM

  - Tamaño de la fila generada automaticamente

- grid-auto-columns: NUM

  - Tamaño de la columna generada automaticamente

- grid-column-gap: NUM

  - Separacion entre las columnas

- grid-row-gap: NUM

  - Separacion entre las filas

- gap: NUM NUM

  - Separacion en una sola linea (Filas, Columnas)

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

  - Distribuir las areas por el grid
  - “STRING STRING …”
  - “STRING STRING …”
  - “...”

- justify-items: VAL

  - Alinear en linea los elementos (Horizontal)
  - center, start, end

- justify-self: VAL

  - Alinear solo ese elemento

- align-items: VAL

  - Alinear en linea los elementos (Vertical)
  - center, start, end

- justify-content: VAL

  - Alinear en linea los elementos (Horizontal)
  - center, start, end

- align-content: VAL

  - Alinear en linea los elementos (Vertical)
  - center, start, end

- place-content: center
  - Combinar el justify y el align
