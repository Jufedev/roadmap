- Mostrar contenido de un archivo

  - `cat nombreArchivo `

- Cambiar nombre de un archivo

  - `git mv NOMBREARCHIVO NOMBREQUERIDO`

- Dejar un cambio pendiente (no hace commit)

  - `git stash`

- Muestra los stash pendientes

  - `git stash list`

- Traer el cambio que se almaceno

  - `git stash pop`

- Eliminar los cambios pendientes

  - `git stash drop`

- Subir todos los cambios

  - `git commit -m “Comentario”`

  - Redactar comentarios

    - VERBO descripcion cambios
    - Ejemplo: Update color of form

### Añadir archivos

- Comprometer contenido, se puede comprometer dos archivos al mismo tiempo

  - Comprometer solo un archivo

    - `git add NOMBREARCHIVO`

  - Comprometer todos los archivos con una misma extensión

    - `git add \*.EXTENSION`

  - Comprometer todos los archivos

    - `git add .`

### Eliminar archivos

- Eliminar un archivo

  - `git rm archivo`

- Quitar un archivo que estaba comprometido

  - `git restore --stage archivo`

- Salvar archivos eliminados

  - `git restore archivo`

### Ignorar archivos

- Crear un archivo con extensión .gitignore y dentro de ese archivo escribir los archivos o rutas que no serán comprometidas en los cambios

- Crear el archivo

  - `touch .gitignore`

- Ejemplos
  - .env
  - carpeta/
  - \*\*/NOMBREARCHIVO (Ignorar el archivo sin importar la ubicación)
