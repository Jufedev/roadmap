- docker network create NOMBRERED

  - Crear una red

- docker network rm NOMBRERED

  - Eliminar una red

- docker create --network NOMBRERED IMAGEN

  - Crear un contenedor en una red

- docker run -d --network NOMBRE --network-alias NOMBRE \
  -v DIR:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=todo \
  MYSQL:5.7
