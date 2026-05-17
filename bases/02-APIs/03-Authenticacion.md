- Autenticacion:

  - Proceso de comprobacion de la identidad de un usuario o app que accede a las API.
  - Se realiza mediante credenciales usuario y contraseña, un certificado o un inicio de sesion unico.

- Autorizacion:

  - Proceso de determinar si un usuario o una aplicacion tiene permiso para acceder a una API.
  - Se realiza a traves de tokes.

## Autenticacion basica

- El cliente solicita un recurso al servidor, el servidor verifica la autorizacion en la solicitud, dado que es la primera solicitud no se encuentra dicha autorizacion.

- El navegador al notar el encabezado de no autorizado mostrara una ventana emergente de autenticacion.

- El usuario envia las credenciales a traves de la ventana emergente y el navegador codificara automaticamente las credenciales.

- El servidor decodificara y verificara las credenciales, enviara la respuesta al cliente.

## OAuth

- En lugar de un usuario y una contraseña, el usuario envia un ID de clave de API y un secreto.

- un usuario se comunica con su proveedor de identidades y el proveedor genera un token firmado criptograficamente que entrega a la aplicacion para autenticar al usuario.

- Siempre que la aplicacion y el proveedor tengan la relacion de confianza con la asercion firmada se puede hacer la autorizacion.

- Permite que las aplicaciones obtengan acceso limitado a los datos de un usuario sin revelar la contraseña de un usuario.

- Roles:
  - Propietario del recurso: el propietario del recurso es el usuario que autoriza a una aplicacion a acceder a su cuenta.
  - Cliente: El cliente es la aplicacion que quiere acceder a la cuenta del usuario.
  - Servidor de recursos: el servidor de recursos aloja las cuentas de usuario protegidas.
  - Servidor de autorizacion: El servidor de autorizacion verifica la identidad del usuario y, a continuacion, emite tokens de acceso a la aplicacion.

## JWT

- JSON Web Token es un estandar que define una forma compacta y autonoma de transmitir informacion de forma segura.

- La informacion esta firmada digitalmente, se puede firmar mediante un secreto (HMAC) o un par clave publica/privada (RSA o ECDSA).

- Estructura:

  - Suelen verse de la siguiente manera: xxxxx.yyyyy.zzzzz

  - Encabezado:

    - Suele constar de dos partes, tipo de tokes y el algoritmo de firma.

  - Carga util:

    - Contiene las "claims", estas son declaraciones sobre una entidad (usuario) y datos adicionales.
    - Hay 3 tipos de claims:

      1. Claims registradas:

         - Estan predefinidas, no son obligatorias pero si recomendables, como lo son iss (emisor), exp (tiempo de expiracion), sub (sujeto), aud (audiencia), y otros.

      1. Claims publicas:

         - Definidas a voluntad, para evitar colisiones deben definirse en el registro de tokens web JSON de la IANA o definirse como un URI que contenga un espacio de nombres resistente a las colisiones.

      1. Claims privadas:

         - Creadas para compartir informacion entre partes que acuerdan usarlas y no son ni publicas ni registradas.

  - Firma:

    - Para crear la firma, se debe tomar el encabezado codificado, la carga codificada, un secreto, el algoritmo y firmarlo.

    - La firma se usa para verificar que el mensaje no se cambio en el camino y en el caso de los tokes con clave privada, verificar que el remitente es quien dice ser.

## Cookie based auth

- El cliente envia credenciales y el servidor las compara con las credenciales que tiene en la base de datos.

- El servidor genera un token de acceso el cual podemos guardarlo en la DB o adjuntarlo a una cookie de respuesta.

- La cookie se adjuntara a cada solicitud realizada por le cliente.

- Añadir una fecha de vencimiento es buena practica por si se roban las cookies de un usuario.
