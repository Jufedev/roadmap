- docker create IMAGEN

  - Crear un contenedor a partir de una imagen

- docker create --name NOMBRE IMAGEN

  - Crear un contenedor y se le asigna un nombre

- docker create -p puertoPC:puertoIMAGE IMAGEN

  - Crear un contenedor y asignar un puerto del pc al contenedor

- docker rm CONTAINERID

  - Eliminar un contenedor

- docker rm $(docker ps -aq)

  - Eliminar todos los contenedores

- docker start CONTAINERID

  - Ejecutar el contenedor creado

- docker ps

  - Listar contenedores activos

- docker ps -a

  - Listar todos contenedores

- docker run IMAGEN

  - Buscar la imagen en docker hub, crea el contenedor y lo inicia

- docker run -d IMAGEN

  - Contenedor en segundo plano

- docker run -it -d IMAGEN:VERSION

  - Contenedor con una version especifica

- docker run -d -p 3001:3000 IMAGEN

  - Asignar el puerto 3001 del servidor al puerto 3000 del contenedor

- docker stats

  - Ver el uso de recursos consumidos

- docker exec -it CONTAINERID

  - Ejecutar comandos
  - El id del contenedor solo necesita los tres primeros caracteres

- docker exec -it CONTAINERID /bin/bash

  - Ejecutar una bash

- docker exec -it CONTAINERID sh

  - Ejecutar una bash

- docker stop CONTAINERID

  - Para la ejecucion de un contenedor

- exit

  - Salir de la consola del contenedor

- docker logs CONTAINERID

  - Log del container
