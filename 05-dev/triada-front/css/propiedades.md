## Tamaños

- height: NuM

  - Alto del elemento (Caja del texto)

- line-height: NuM

  - Alto del elemento (Del techo al piso del texto)

- width: NuM

  - Ancho del elemento (Caja del texto)

- aspect-ratio: ANCHO/ALTO

  - Mantener el aspecto de la imagen

- max-width:NUM

  - Ancho maximo que puede tener el elemento

- scale: NUM

  - Escala del elemento de acuerdo con el inicio

## Posicionamiento

- display:VAL

  - Ubicacion de los elementos
  - block, inline (no se puede modificar margin ni padding), none, inline-block (si se puede modificar margin y padding)

- float: VAL

  - Hace flotar el elemento
  - left, right

- clear: VAL

  - Limpiar el float
  - left, right, both

- position: VAL

  - Posicion en la pantalla
  - static (no se puede mover)
  - relative (se puede mover) (genera un campo) (Genera un punto de referencia para los hijos)
  - absolute (se puede mover) (no genera el campo)
  - fixed (se queda de manera fija en el viewport)
  - sticky (combinacion de relative y fixed)

- z-index: NUM

  - Superposicion de los elementos

## Textos

- content: “”

  - Agregar contenido en la etiqueta

- color: COLOR

  - Cambiar el color de un texto

- font-size: NUM o STYLE

  - Tamaño de letra de un texto

- font-family: “F U ENT E”, FUENTE,...

  - Carga varias fuentes por si una no funciona
  - Las fuentes que tienen espacios o son importadas se ponen dentro de comillas

- font-style: STYLE

  - Estilos de la fuente

- font-weight: NUM o VAL

  - Ancho de la fuente

- font-variant: STYLE

  - Manejo de propiedades

- text-overflow: ellipsis

  - Tres puntos al final del parrafo si no cabe todo

- text-align:VAL

  - Alinea el texto
  - justify, left, center, right

- text-decoration: VAL

  - Coloca estilos en el texto
  - underline, line-through, overline, none

- text-shadow: NUM1, NUM2, NUM3, COLOR

  - Crear sombra a un texto
  - NUM1 movimiento derecha, NUM2 movimiento abajo y NUM3 difuminado
  - Numero negativos posicion inversa (izq y arriba)

- text-transform: STYLE

  - Formado de la fuente
  - capitalize, uppercase,…

- text-indent: NUM

  - Indentacion del parrafo (Como la sangria)

- letter-spacing: NUM

  - Espaciado entre letras

- word-spacing: NUM

  - Espaciado entre palabras

- list-style-type: VAL

  - Modificar los puntos de una lista
  - none, disc, circle, georgian

- list-style-position: VAL

  - Modifica la posicion de los puntos

- white-space:STYLE

  - Control de saltos de lineas
  - nowrap, normal

- overflow: VAL
  - Configurar el texto en una caja
  - El texto actua de acuerdo con la caja
  - visible, hidden, scroll, auto (scroll necesario)

## Bordes

- border: NUM COLOR STYLE

  - NUM es el grosor
  - 2D
    - solid, dashed, dotted, double, none, hidden
  - 3D
    - groove, ridge, inset, outset

- border-style: STYLE STYLE STYLE STYLE

  - Estilo del borde

- border-color: COLOR COLOR COLOR COLOR

  - Color del borde

- border-radius: NUM NUM NUM NUM

  - Hacer el borde mas circular

- border-width: NUM NUM NUM NUM

  - Ancho del borde

- border-collapse: collapse

  - Quitar separacion de los bordes

- border-bottom: NUM COLOR STYLE
  - Borde de abajo
  - Funciona con las cuatro direcciones

## Fondos

- background-color: COLOR

  - Color de fondo

- background-image: url(“LINK”)

  - Colocar imagenes de fondo

- background-size: VAL o NUM NUM

  - Tamaño del fondo
  - Auto, Cover (responsivo), Contain (mostrar la imagen repetida)

- background-repeat: VAL

  - Repite la imagen
  - no-repeat, repeat-x, repeat-y

- background-position: VAL1 VAL2

  - Posicion de la imagen

- background-attachment: VAL

  - Mantener o fijar imagen del fondo

- background: COLOR url(“LINK”) REPEAT POSITIONx POSITIONy / NUMALTO NUMANCH
  - Colocar el fondo en una linea
