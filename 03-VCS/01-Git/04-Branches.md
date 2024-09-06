- Mirar en qué rama estamos trabajando

  - `git branch`

- Crear una rama

  - `git branch NOMBRE`

- Moverse entre ramas o commits

  - `git switch NOMBRE/IDCOMMIT`

- Unir una rama con otra

  - `git merge NOMBRE`

- “Rebasar” una rama con otra

  - `git rebase NOMBRE`

- Entra en una interfaz y copia los commits

  - `git rebase -i IDCOMMIT`

- Darle un nombre a un commit (se debe estar sobre el commit)

  - `git tag NOMBRE`

- Darle un nombre a un commit sin estar sobre el

  - `git tag NOMBRE IDCOMMIT`

- Copea los commits en nuestra rama HEAD

  - `git cherry-pick IDCOMMIT IDCOMMIT …`

- Muestra el tag más cercano

  - `git describe RAMA`

- Moverse y crear ramas

  - `git switch -c NOMBRE`

- Desplazar el HEAD al tag

  - `git switch tags/NOMBRE`

- Cambiar una rama a un commit específico

  - `git branch -f RAMA IDCOMMIT`

- Devuelve hasta el commit deseado, funciona para adelante y para atrás

  - `git reset IDCOMMIT`

- Revertimos el commit pero crea un commit con los cambios revertidos

  - `git revert IDCOMMIT`

- Crear una nueva rama (Mala práctica)

  - `git checkout -b VAL`
