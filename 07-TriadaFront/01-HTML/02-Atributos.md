## Generales

- id = “STRING”

  - Poner un id a una etiqueta

- class = “STRING”

  - Colocar una clase a una etiqueta

- contentEditable = true

  - Poder editar el contenido del HTML

- tabindex = NUM

  - Orden de la tecla tab

- title = “STR”

  - Texto que sale al poner el mouse por encima del elemento

- data-\* = “STR”

  - Crear atributos personalizados

- dir = ltr / rtl

  - Dirección del texto] (left to right - right to left

- hidden = true

  - Ocultar el elemento

## Cabeceras

- charset=”utf-8”

  - Caracteres usados en la pagina

- name=”viewport” content=”width = device-width”

  - Ancho adaptado

- name=”description” content=”DESCRIPCION”

  - Descripción de la página

- rel = “stylesheet” href = “ARCHIVO”

  - Importar archivos CSS

- rel=”icon” type=”image/jpg” href=”ARCHIVO”

  - Icono de arriba

- rel=”alternate” href=”URL” hreflang=”IDIOMA”

  - Página en otro idioma

- rel=”canonical” href=”URL”

  - Página principal

- og: OPEN GRAPH

  - Como se muestra el contenido al ser compartido en redes sociales

## Links

- download

  - Descargar contenido (Tiene que estar en el dominio propio)

- href = “LINK”

  - Referenciar links

- “mailto:CORREO”

  - Enviar un correo

- “#ID”

  - Mover hacia un elemento

- target = “\_blank”

  - Abre el link en una nueva pestaña

- rel=”noreferrer”

  - No enviar datos en el redireccionamiento

- rel="nooperer"

  - No enviar datos de ningún tipo

## Contenido

- loading=”lazy”

  - Cargar imagen cuando se necesita

- src = “RUTA”

  - Enlace del recurso

- alt = “STRING”

  - Si no se muestra la imagen se despliega el txt

- controls

  - Controles del video

- autoplay

  - El usuario debe interactuar con la página

- muted

  - Video sin sonido

- loop

  - Video en bucle

- poster=”ARCHIVO”

  - Foto del inicio

- allow=“PERMISOS”

  - Permisos del iframe

- allowfullscreen

  - Hacer que el iframe pueda ocupar toda la pantalla

## Listas

- reversed

  - La lista tendrá un orden invertido

- start=”VAL”

  - La lista empezará en ese valor

- value=”VAL”

  - El elemento tendrá ese valor

## Separadores

- role=”ATRIB”

  - Hacer que el div tenga un rol y sea semántico

- open

  - Que esté abierto por defecto

## Formularios

- action = “RUTA SERVIDOR”

  - Conectar el servidor de envío

- method = “GET” o “POST”

  - Mandar datos por un método (GET 255 caracteres o POST no muestra datos)

- name = “STRING”

  - Llave de un input

- placeholder = “STRING”

  - Texto que indica que poner en el input

- type = “STRING”

  - Tipo del input (submit, text, email, password, radio, checkbox, file, etc)

- value = “STRING”

  - Valor que tendrá la etiqueta

- required = true

  - Campo requerido

- minLength = NUM

  - Número de caracteres mínimos para enviar

- form = “ID”

  - Enlazar con un formulario por medio del ID

- for = “ID”

  - Referenciar inputs

- selected=”true”

  - Valor por defecto

- cols = “NUM”

  - Columnas del texto

- rows = “NUM”

  - Filas del texto
