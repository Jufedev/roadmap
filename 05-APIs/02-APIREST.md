- Roy Fielding creó REST en el 2000, en su definición podemos usar los principios REST para ayudar a desarrollar servicios mas escalables, confiables y flexibles.

- Principios REST:

  1. Cliente-Servidor:

     - El client es completamente independiente del servidor.
     - El cliente envía una petición o request.
     - El servidor envía una respuesta o response.

  1. Stateless:

     - Toda la información que se requiera en la petición debe ser enviada por el cliente y el servidor no debe guardar ningún dato durante la comunicación.

  1. Cache:

     - Almacenamiento centrado en mantener datos a los que se accede con frecuencia (es mas rápido).
     - El servidor debe informar si la solicitud puede ser "cacheable" o no.

  1. Interfaz uniforme:

     - El servidor determina los estándares para su comunicación.
     - Hay 4 principios para realizar una interfaz uniforme:

       1. Identificación de recursos:

          - REST esta basada en recursos, estos recursos pueden ser nombrados.
          - api.example.algo/products

       1. Manipulación de recursos:

          - El cliente puede especificar el formato (JSON, XML, HTML, etc) de petición al servidor.

       1. Mensaje auto descriptivos:
          - Contiene toda la información que se necesita para entender la solicitud y la respuesta con solo verificar la semántica del mensaje.
       1. HATEOAS:
          - Hypertext As The Engine Of Application State.
          - Una respuesta debe contener información sobre lo que el cliente puede hacer en solicitudes posteriores.

  1. Sistema en capas:

     - Pueden haber componentes o subsistemas entre el cliente y el servidor.
     - El cliente no puede asumir que está comunicado directamente con el servidor.

  1. Código bajo demanda:
     - Este principio es el único opcional.
     - El servidor puede enviar código ejecutable en la respuesta del cliente.

- Anatomía de la petición:

  - URL:

    - Dirección base, no identifica un recurso solo el servidor.

  - URI:

    - Especifica el recurso al que el cliente desea acceder.

  - Parámetros:

    - Es la información que puede ser enviada en la petición para influenciar la respuesta.
    - REST tiene 4 tipos de parámetros:

      1. Parámetros del cuerpo:

         - Contiene todos los datos que el servidor necesita para procesar la solicitud de manera correcta.

      1. Parámetros de ruta:

         - Especifica el recurso para realizar la acción (editar, actualizar, etc).

      1. Parámetros de consulta:

         - Filtra y busca información acerca del recurso

      1. Headers:
         - Permiten enviar información extra en la petición, como tokens de autenticación o tipos de contenido.

  - Métodos HTTP:

    - GET: Devuelve recursos
    - POST: Crea recursos
    - PUT: Editar recursos totalmente y si no existen los crea
    - PATCH: Editar recursos parcialmente
    - DELETE: Eliminar recursos

  - Códigos de respuestas:

    - 100: Información.
    - 200: Ejecución correcta.
    - 300: Se necesita una redirección.
    - 400: Envió de información incorrecta.
    - 500: Error de servidor.
