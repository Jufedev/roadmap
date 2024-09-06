- **Normalización:**

  - Eliminar anomalías y hacer más eficiente la base de datos.

  - Hay 5 formas normales:

    - **1NF:**

      - Garantiza que cada atributo tenga un valor único atómico (colocar un ID que no se repite).

    - **2NF:**

      - Cada atributo que no sea una key (ID) depende 100% de la key.

    - **3NF:**

      - No debe tener dependencia transitiva, si un cliente tiene el atributo ciudad y región, estos se deben separar a una tabla llamada lugar pues estos atributos no dependen del id del cliente.

  - Generalmente solo se normaliza hasta la 3fn, pues las últimas dos son para bases de datos muy grandes.

    - **4NF:**

      - Para evitar las dependencias multivaluadas las tablas deben tener una clave primaria compuesta.

    - **5NF:**
      - Quitar la dependencia de unión entre atributos.
