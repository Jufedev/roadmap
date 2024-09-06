# Modelo entidad relación

- Es un modelo que representa de manera sencilla los componentes de un sistema y cómo estos se relacionan entre sí. Su uso está principalmente en las bases de datos.

- Emplean rectángulos, diamantes, óvalos y líneas de conexión para mostrar la conexión de entidades.

- Se debe hacer un modelo entidad relación para plasmar los requerimientos y entender mejor la situación.

- **Entidad:**

  - Representa una clase, es decir, un objeto o una cosa.

- **Tipos de entidad:**

  - Entidad fuerte.
  - Entidad débil.

- **Relación:**

  - Son vínculos entre entidades, muestra cómo estas interactúan entre ellas.

- **Cardinalidad:**

  - 1 a 1.
  - 1 a N.
  - N a 1.
  - N a M.

- **Atributos:**

  - Son los datos de la entidad.

- **Tipos de atributos:**

  - Atributo.
  - Atributo clave.
  - Atributo multi valuado.
  - Atributo compuesto.
  - Atributo derivado.

# De entidad relación a tablas

- Se debe tener en cuenta la cardinalidad de las tablas al pasar el diagrama entidad relación a un diagrama de tablas.

- Una identidad se convierte en una tabla.

- Cada campo es un atributo de la entidad.

- En el caso de 1:N y 1:1, la clave primaria se convierte en un atributo de la otra entidad. En la relación N:M se crea una nueva entidad (principalmente el nombre de la relación se usa en la entidad).
