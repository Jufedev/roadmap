# ¿Que es AWS CloudFormation?

Es un servicio para modelar y configurar recursos de AWS. Permite crear una plantilla que describe todos los recursos de AWS que se desean, como instancias de Amazon EC2 o instancias de bases de datos Amazon RDS y CloudFormation se encarga de aprovisionar y configurar esos recursos.


# Caracteristicas Principales

- Crear plantillas que describan recursos de AWS y sus propiedades.

- Aprovisionar recursos como una unidad unica a traves de stacks.

- Soporte para multiples formatos de plantillas (JSON y YAML).

- Integracion con herramientas como la consola de CloudFormation, API, AWS CLI y AWS SDKs.

- Capacidades para actualizar, eliminar y monitorear recursos.


# Beneficios

- Simplifica la gestion de infraestructura al aprovisionar y configurar recursos desde una plantilla, gestionandolos como una unidad unica y al eliminar el stack elimina todos los recursos.

- Reutiliza una plantilla para aprovisionar los mismos recursos de manera consistente en multiples regiones o cuentas de AWS para mayor disponibilidad.

- Permiten el control de versiones para cambios en la infraestructura y retrocesos si surgen problemas, como revertir a una version anterior despues de una actualizacion.


# Conceptos Basicos

- **Plantillas**
    - Archivos de texto (JSON o YAML) que describen recursos de AWS, sus propiedades y configuraciones.

- **Stacks**
    - Una coleccion de recursos de AWS aprovisionados y gestionados como una unidad unica desde una plantilla.

    - Crear un stack usa la plantilla para aprovisionar recursos.

    - Crear el stack con exito significa que los recursos estan en funcionamiento.
