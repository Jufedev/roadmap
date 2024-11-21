- docker images

  - Ver imágenes instaladas

- docker push IMAGEN

  - Subir una imagen

- docker pull IMAGEN

  - Bajar una imagen

- docker image rm IMAGEN

  - Eliminar una imagen

- docker rmi IMAGEN IMAGEN …

  - Eliminar una o varias imagenes

- docker save IMAGEN > ~/RUTA/IMAGEN.tar

  - Guardar una imagen en un directorio

- docker load IMAGEN < ~/RUTA/IMAGEN.tar

  - Cargar una imagen de un directorio

- docker tag USERNAME/IMAGEN:TAG CONTAINERID

  - Subir una imagen a docker hub
  - El tag es la versión, v1, v2, etc
