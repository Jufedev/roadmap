# CSR

- Client Side Rendering.

- Es el método usado para SPA's.

- Se envía al cliente una página en blanco y un bundle JS (el build de la aplicación), tras descargarlo, este bundle es quien genera dinámicamente el DOM que se renderiza.

- Todo se renderiza en el navegador.

- Rapidez en el servidor.

- No hay necesidad de configuración adicional al desarrollar o interactuar con las APIs del navegador.

- Si hay una conexión lenta, la página se verá en blanco al inicio.

- Puede haber problemas de memoria si no se controla bien algún caso recursivo o no se optimiza el uso del lenguaje.

- Usarlo en sistemas internos que no necesiten posicionamiento, login/permisos, gestión de cuentas de usuarios, etc.

# SSR

- Server Side Rendering.

- Ocurre en tiempo de ejecución.

- Los componentes HTML son generados en el servidor para enviarlos al cliente.

- El cliente crea el DOM a partir del HTML recibido del servidor.

- Primero se envía HTML y luego el JS.

- El contenido está disponible de inmediato.

- Ahorramos peticiones dado que podemos hacer fetch de datos antes de retornar el contenido al navegador.

- Tenemos ventaja del SEO al tener contenido HTML.

- Puede volverse lenta en el servidor.

- Incompatible con algunas librerías y APIs propias del cliente.

- Si la conexión es lenta puede afectar la UX dado que cada ruta debe pre renderizarse.

- Usarlo cuando se necesite SEO, el contenido de la web cambia a menudo y se requiere interacción del usuario, comunicación con DB, etc.

# SSG

- Static Site Generation.

- Ocurre en tiempo de ejecución.

- Ideal para webs con contenido estático.

- No hay JS, solo HTML y CSS.

- Si se hace un cambio se debe generar otro build.

- El contenido se evidencia de inmediato.

- Genial para el SEO y sin necesidad de un server.

- Sin peticiones adicionales desde el cliente.

- El build puede verse lenta dependiendo del tamaño de la app.

- Incompatible con algunas librerías y APIs propias del cliente.

- El contenido no cambia con frecuencia ni depende del usuario que lo esta consultando, como un blog, portfolio, etc.

# Hydration / reconciliation

- Reutiliza los nodos del DOM para evitar la duplicación del HTML en el SSR.

- Los nodos del servidor y del cliente deben ser los mimos.

- Se puede hacer una hidratación selectiva.

# Resumability

- Llega una porción mínima de JS para que la página sea interactiva de una vez, posteriormente se descarga partes del JS.
