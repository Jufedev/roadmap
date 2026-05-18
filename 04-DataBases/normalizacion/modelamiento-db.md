# Modelo entidad relacion

- Es un modelo que representa de manera sencilla los componentes de un sistema y como estos se relacionan entre si. Su uso esta principalmente en las bases de datos.

- Emplean rectangulos, diamantes, ovalos y lineas de conexion para mostrar la conexion de entidades.

- Se debe hacer un modelo entidad relacion para plasmar los requerimientos y entender mejor la situacion.

- **Entidad:**

  - Representa una clase, es decir, un objeto o una cosa.

- **Tipos de entidad:**

  - Entidad fuerte.
  - Entidad debil.

- **Relacion:**

  - Son vinculos entre entidades, muestra como estas interactuan entre ellas.

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

# De entidad relacion a tablas

- Se debe tener en cuenta la cardinalidad de las tablas al pasar el diagrama entidad relacion a un diagrama de tablas.

- Una identidad se convierte en una tabla.

- Cada campo es un atributo de la entidad.

- En el caso de 1:N y 1:1, la clave primaria se convierte en un atributo de la otra entidad. En la relacion N:M se crea una nueva entidad (principalmente el nombre de la relacion se usa en la entidad).
