# CSR

- Client Side Rendering.

- Es el metodo usado para SPA's.

- Se envia al cliente una pagina en blanco y un bundle JS (el build de la aplicacion), tras descargarlo, este bundle es quien genera dinamicamente el DOM que se renderiza.

- Todo se renderiza en el navegador.

- Rapidez en el servidor.

- No hay necesidad de configuracion adicional al desarrollar o interactuar con las APIs del navegador.

- Si hay una conexion lenta, la pagina se vera en blanco al inicio.

- Puede haber problemas de memoria si no se controla bien algun caso recursivo o no se optimiza el uso del lenguaje.

- Usarlo en sistemas internos que no necesiten posicionamiento, login/permisos, gestion de cuentas de usuarios, etc.

# SSR

- Server Side Rendering.

- Ocurre en tiempo de ejecucion.

- Los componentes HTML son generados en el servidor para enviarlos al cliente.

- El cliente crea el DOM a partir del HTML recibido del servidor.

- Primero se envia HTML y luego el JS.

- El contenido esta disponible de inmediato.

- Ahorramos peticiones dado que podemos hacer fetch de datos antes de retornar el contenido al navegador.

- Tenemos ventaja del SEO al tener contenido HTML.

- Puede volverse lenta en el servidor.

- Incompatible con algunas librerias y APIs propias del cliente.

- Si la conexion es lenta puede afectar la UX dado que cada ruta debe pre renderizarse.

- Usarlo cuando se necesite SEO, el contenido de la web cambia a menudo y se requiere interaccion del usuario, comunicacion con DB, etc.

# SSG

- Static Site Generation.

- Ocurre en tiempo de ejecucion.

- Ideal para webs con contenido estatico.

- No hay JS, solo HTML y CSS.

- Si se hace un cambio se debe generar otro build.

- El contenido se evidencia de inmediato.

- Genial para el SEO y sin necesidad de un server.

- Sin peticiones adicionales desde el cliente.

- El build puede verse lenta dependiendo del tamaño de la app.

- Incompatible con algunas librerias y APIs propias del cliente.

- El contenido no cambia con frecuencia ni depende del usuario que lo esta consultando, como un blog, portfolio, etc.

# Hydration / reconciliation

- Reutiliza los nodos del DOM para evitar la duplicacion del HTML en el SSR.

- Los nodos del servidor y del cliente deben ser los mimos.

- Se puede hacer una hidratacion selectiva.

# Resumability

- Llega una porcion minima de JS para que la pagina sea interactiva de una vez, posteriormente se descarga partes del JS.
