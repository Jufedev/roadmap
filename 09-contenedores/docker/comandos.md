# Opciones de comandos

- Sesion interactiva
  - `-i`

- Emular una terminal
  - `-t`

- Sesion interactiva y emular una terminal
  - `-it`

- Segundo plano
  - `-d`

- Asignar un puerto
  - `-p`

- Segundo plano y asignar un puerto
  - `-dp`

- Ruta para almacenar archivos
  - `-v`
  - RutaINTERTA:RutaEXTERNA

- Variables de entorno
  - `-e`

- Todos
  - `-a`

- Tiempo real (en logs) o forzado (en eliminaciones)
  - `-f`

# Imagenes

- Ver imagenes instaladas
  - `docker images`

- Subir una imagen
  - `docker push IMAGEN`

- Bajar una imagen
  - `docker pull IMAGEN`

- Eliminar una imagen
  - `docker image rm IMAGEN`

- Eliminar una o varias imagenes
  - `docker rmi IMAGEN IMAGEN …`

- Guardar una imagen en un directorio
  - `docker save IMAGEN > ~/RUTA/IMAGEN.tar`

- Cargar una imagen de un directorio
  - `docker load IMAGEN < ~/RUTA/IMAGEN.tar`

- Taguear una imagen (El tag es la version, v1, v2, etc)
  - `docker tag USERNAME/IMAGEN:TAG CONTAINERID`

# Contenedores

- El id del contenedor solo necesita los tres primeros caracteres.


## Crear
- Crear un contenedor a partir de una imagen
  - `docker create IMAGEN`

- Crear un contenedor y se le asigna un nombre
  - `docker create --name NOMBRE IMAGEN`


## Eliminar

- Eliminar un contenedor
  - `docker rm CONTAINERID`

- Eliminar todos los contenedores
  - `docker rm $(docker ps -aq)`


## Ejecutar

- Buscar la imagen en docker hub, crea el contenedor y lo inicia
  - `docker run IMAGEN`

- Contenedor en segundo plano
  - `docker run -d IMAGEN`

- Contenedor con una version especifica
  - `docker run -it -d IMAGEN:VERSION`

- Asignar el puerto 3001 del servidor al puerto 3000 del contenedor
  - `docker run -d -p 3001:3000 IMAGEN`


# Parar

- Para la ejecucion de un contenedor
  - `docker stop CONTAINERID`


## Varios

- Listar contenedores activos
  - `docker ps`

- Listar todos contenedores
  - `docker ps -a`

- Ver el uso de recursos consumidos
  - `docker stats`

- Ejecutar el contenedor creado
  - `docker start CONTAINERID`

- Ejecutar comandos
  - `docker exec -it CONTAINERID`

- Ejecutar una bash
  - `docker exec -it CONTAINERID /bin/bash`

- Ejecutar una shell
  - `docker exec -it CONTAINERID sh`
- Log del container
  - `docker logs CONTAINERID`

- Logearse con docker hub o clouds
  - `docker login`


# Redes

- Crear una red
  - `docker network create NOMBRERED`

- Eliminar una red
  - `docker network rm NOMBRERED`

- Crear un contenedor en una red
  - `docker create --network NOMBRERED IMAGEN`


# Ejemplo

- docker run -d --network NOMBRE --network-alias NOMBRE \
  -v DIR:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=todo \
  MYSQL:5.7
