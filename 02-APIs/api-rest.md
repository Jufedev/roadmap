- Roy Fielding creo REST en el 2000, en su definicion podemos usar los principios REST para ayudar a desarrollar servicios mas escalables, confiables y flexibles.

- Principios REST:

  1. Cliente-Servidor:

     - El client es completamente independiente del servidor.
     - El cliente envia una peticion o request.
     - El servidor envia una respuesta o response.

  1. Stateless:

     - Toda la informacion que se requiera en la peticion debe ser enviada por el cliente y el servidor no debe guardar ningun dato durante la comunicacion.

  1. Cache:

     - Almacenamiento centrado en mantener datos a los que se accede con frecuencia (es mas rapido).
     - El servidor debe informar si la solicitud puede ser "cacheable" o no.

  1. Interfaz uniforme:

     - El servidor determina los estandares para su comunicacion.
     - Hay 4 principios para realizar una interfaz uniforme:

       1. Identificacion de recursos:

          - REST esta basada en recursos, estos recursos pueden ser nombrados.
          - api.example.algo/products

       1. Manipulacion de recursos:

          - El cliente puede especificar el formato (JSON, XML, HTML, etc) de peticion al servidor.

       1. Mensaje auto descriptivos:
          - Contiene toda la informacion que se necesita para entender la solicitud y la respuesta con solo verificar la semantica del mensaje.
       1. HATEOAS:
          - Hypertext As The Engine Of Application State.
          - Una respuesta debe contener informacion sobre lo que el cliente puede hacer en solicitudes posteriores.

  1. Sistema en capas:

     - Pueden haber componentes o subsistemas entre el cliente y el servidor.
     - El cliente no puede asumir que esta comunicado directamente con el servidor.

  1. Codigo bajo demanda:
     - Este principio es el unico opcional.
     - El servidor puede enviar codigo ejecutable en la respuesta del cliente.

- Anatomia de la peticion:

  - URL:

    - Direccion base, no identifica un recurso solo el servidor.

  - URI:

    - Especifica el recurso al que el cliente desea acceder.

  - Parametros:

    - Es la informacion que puede ser enviada en la peticion para influenciar la respuesta.
    - REST tiene 4 tipos de parametros:

      1. Parametros del cuerpo:

         - Contiene todos los datos que el servidor necesita para procesar la solicitud de manera correcta.

      1. Parametros de ruta:

         - Especifica el recurso para realizar la accion (editar, actualizar, etc).

      1. Parametros de consulta:

         - Filtra y busca informacion acerca del recurso

      1. Headers:
         - Permiten enviar informacion extra en la peticion, como tokens de autenticacion o tipos de contenido.

  - Metodos HTTP:

    - GET: Devuelve recursos
    - POST: Crea recursos
    - PUT: Editar recursos totalmente y si no existen los crea
    - PATCH: Editar recursos parcialmente
    - DELETE: Eliminar recursos

  - Codigos de respuestas:

    - 100: Informacion.
    - 200: Ejecucion correcta.
    - 300: Se necesita una redireccion.
    - 400: Envio de informacion incorrecta.
    - 500: Error de servidor.
