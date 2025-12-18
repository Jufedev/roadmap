# ¿Qué es AWS CloudFormation?

Es un servicio para modelar y configurar recursos de AWS. Permite crear una plantilla que describe todos los recursos de AWS que se desean, como instancias de Amazon EC2 o instancias de bases de datos Amazon RDS y CloudFormation se encarga de aprovisionar y configurar esos recursos.


# Características Principales

- Crear plantillas que describan recursos de AWS y sus propiedades.

- Aprovisionar recursos como una unidad única a través de stacks.

- Soporte para múltiples formatos de plantillas (JSON y YAML).

- Integración con herramientas como la consola de CloudFormation, API, AWS CLI y AWS SDKs.

- Capacidades para actualizar, eliminar y monitorear recursos.


# Beneficios

- Simplifica la gestión de infraestructura al aprovisionar y configurar recursos desde una plantilla, gestionándolos como una unidad única y al eliminar el stack elimina todos los recursos.

- Reutiliza una plantilla para aprovisionar los mismos recursos de manera consistente en múltiples regiones o cuentas de AWS para mayor disponibilidad.

- Permiten el control de versiones para cambios en la infraestructura y retrocesos si surgen problemas, como revertir a una versión anterior después de una actualización.


# Conceptos Básicos

- **Plantillas**
    - Archivos de texto (JSON o YAML) que describen recursos de AWS, sus propiedades y configuraciones.

- **Stacks**
    - Una colección de recursos de AWS aprovisionados y gestionados como una unidad única desde una plantilla.

    - Crear un stack usa la plantilla para aprovisionar recursos.

    - Crear el stack con éxito significa que los recursos están en funcionamiento.
