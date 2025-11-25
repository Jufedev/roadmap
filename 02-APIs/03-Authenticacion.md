- Autenticación:

  - Proceso de comprobación de la identidad de un usuario o app que accede a las API.
  - Se realiza mediante credenciales usuario y contraseña, un certificado o un inicio de sesión único.

- Autorización:

  - Proceso de determinar si un usuario o una aplicación tiene permiso para acceder a una API.
  - Se realiza a traves de tokes.

## Autenticación básica

- El cliente solicita un recurso al servidor, el servidor verifica la autorización en la solicitud, dado que es la primera solicitud no se encuentra dicha autorización.

- El navegador al notar el encabezado de no autorizado mostrara una ventana emergente de autenticación.

- El usuario envía las credenciales a traves de la ventana emergente y el navegador codificara automáticamente las credenciales.

- El servidor decodificara y verificara las credenciales, enviara la respuesta al cliente.

## OAuth

- En lugar de un usuario y una contraseña, el usuario envía un ID de clave de API y un secreto.

- un usuario se comunica con su proveedor de identidades y el proveedor genera un token firmado criptográficamente que entrega a la aplicación para autenticar al usuario.

- Siempre que la aplicación y el proveedor tengan la relación de confianza con la aserción firmada se puede hacer la autorización.

- Permite que las aplicaciones obtengan acceso limitado a los datos de un usuario sin revelar la contraseña de un usuario.

- Roles:
  - Propietario del recurso: el propietario del recurso es el usuario que autoriza a una aplicación a acceder a su cuenta.
  - Cliente: El cliente es la aplicación que quiere acceder a la cuenta del usuario.
  - Servidor de recursos: el servidor de recursos aloja las cuentas de usuario protegidas.
  - Servidor de autorización: El servidor de autorización verifica la identidad del usuario y, a continuación, emite tokens de acceso a la aplicación.

## JWT

- JSON Web Token es un estándar que define una forma compacta y autónoma de transmitir información de forma segura.

- La información esta firmada digitalmente, se puede firmar mediante un secreto (HMAC) o un par clave publica/privada (RSA o ECDSA).

- Estructura:

  - Suelen verse de la siguiente manera: xxxxx.yyyyy.zzzzz

  - Encabezado:

    - Suele constar de dos partes, tipo de tokes y el algoritmo de firma.

  - Carga util:

    - Contiene las "claims", estas son declaraciones sobre una entidad (usuario) y datos adicionales.
    - Hay 3 tipos de claims:

      1. Claims registradas:

         - Están predefinidas, no son obligatorias pero si recomendables, como lo son iss (emisor), exp (tiempo de expiración), sub (sujeto), aud (audiencia), y otros.

      1. Claims publicas:

         - Definidas a voluntad, para evitar colisiones deben definirse en el registro de tokens web JSON de la IANA o definirse como un URI que contenga un espacio de nombres resistente a las colisiones.

      1. Claims privadas:

         - Creadas para compartir información entre partes que acuerdan usarlas y no son ni publicas ni registradas.

  - Firma:

    - Para crear la firma, se debe tomar el encabezado codificado, la carga codificada, un secreto, el algoritmo y firmarlo.

    - La firma se usa para verificar que el mensaje no se cambio en el camino y en el caso de los tokes con clave privada, verificar que el remitente es quien dice ser.

## Cookie based auth

- El cliente envía credenciales y el servidor las compara con las credenciales que tiene en la base de datos.

- El servidor genera un token de acceso el cual podemos guardarlo en la DB o adjuntarlo a una cookie de respuesta.

- La cookie se adjuntara a cada solicitud realizada por le cliente.

- Añadir una fecha de vencimiento es buena practica por si se roban las cookies de un usuario.
