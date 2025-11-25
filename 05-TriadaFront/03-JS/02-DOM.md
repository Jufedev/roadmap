### Conceptos

- Document Object Model

- Nodo

  - Cualquier etiqueta del body
  - Los atributos se pueden colocar como nodos

- Document

  - Nodo raíz

- Element

  - Etiquetas HTML

- Text

  - Texto dentro de un nodo element

- Attribute

  - Atributos de las etiquetas

- Comentarios y otros

  - Declaraciones doctype y comentarios

### Métodos de selección

- document.getElementById(“ID”)

  - Seleccionar por el ID de un elemento

- document.getElementsByTagName(“ETIQUETA”)

  - Seleccionar todas las etiquetas
  - Devuelve una HTMLCollection
  - Se puede acceder con el indice VAR - 0]

- document.querySelector(“#ID/.class”)

  - Seleccionar por la clase o el ID

- document.querySelectorAll(“#ID/.class”)
  - Seleccionar todas las etiquetas
  - Devuelve un NodeList
  - Se puede acceder con el índice VAR - 0]

### Métodos de atributos

- VAR.setAttribute(“ATTRIBUTE”, “VAL”)

  - Modificar o crear un atributo de un elemento

- VAR.getAttribute(“ATTRIBUTE”)

  - Obtener el valor del atributo de un elemento

- VAR.removeAttribute(“ATTRIBUTE”)
  - Remover un atributo de un elemento

### Métodos de classList

- VAR.classList.add(“CLASE”)

  - Agrega una clase al elemento

- VAR.classList.remove(“CLASE”)

  - Remueve una clase del elemento

- VAR.classList.item(NUM)

  - Obtener la clase del índice establecido

- VAR.classList.contains(“CLASE”)

  - Devuelve true o false si el elemento tiene la clase

- VAR.classList.toggle(“CLASE”)

  - Agrega o elimina la clase si la tiene o no

- VAR.classList.replace(“CLASE”, “CLASE”)
  - Reemplaza la clase por otra

### Métodos de texto

- VAR.textContent

  - Devuelve el texto del contenido
  - Agrega texto al contenido

- VAR.innerHTML

  - Devuelve el texto del contenido con todas las etiquetas que estén dentro
  - Agrega texto al contenido

- VAR.outerHTML
  - Devuelve el texto del contenido con todas las etiquetas que estén involucradas, incluyendo la propia etiqueta

### Métodos de creación

- document.createElement(“ETIQUETA”)

  - Crear un elemento HTML
  - Debe ser en mayúsculas

- document.createTextNode(“STR”)

  - Agregar contenido a un elemento HTML

- document.createDocumentFragment()

  - Crear un fragmento para agregarle hijos
  - Se añaden los hijos y luego se añade el fragmento

- VAR.firstChild

  - Obtener el primer hijo del elemento

- VAR.lastChild

  - Obtener el último hijo del elemento

- VAR.firstElementChild

  - Obtener el primer hijo etiqueta del elemento

- VAR.lastElementChild

  - Obtener el último hijo etiqueta del elemento

- VAR.childNodes

  - Obtener todos los nodos del elemento

- VAR.children

  - Obtener todos los nodos etiquetas del elemento

- VAR.appendChild(VARCHILD)

  - Agregar un hijo a una etiqueta

- VAR.removeChild(VARCHILD)

  - Eliminar un hijo de una etiqueta

- VAR.replaceChild(VARCHILD, VARCHILD2)

  - Reemplazar un hijo de una etiqueta

- VAR.hasChildNodes

  - Comprobar si el elemento tiene hijos

- VAR.parentElement

  - Obtener el padre del elemento

- VAR.nextElementSibling

  - Obtener el siguiente hermano

- VAR.previousElementSibling

  - Obtener el anterior hermano

- VAR.closest(“.CLASS/#ID”)
  - Obtener el padre más cercano con el nombre
