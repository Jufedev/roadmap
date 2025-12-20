# Stacks de Cloudformation

- Es una coleccion de recursos de AWS que pueden gestionarse como una unidad unica.

- Los stacks se crean, actualizan y eliminan usando plantillas de CloudFormation que definen los recursos y sus configuraciones.

## Conceptos

- **Crear un stack** implica desplegar una plantilla de CloudFormation que especifica los recursos y sus configuraciones. CloudFormation aprovisiona y configura los recursos en consecuencia.

- **Actualizar un stack** implica hacer cambios a la plantilla o parametros, CloudFormation compara los cambios con el estado actual del stack y actualiza solo los recursos cambiados. Dependiendo de las propiedades actualizadas, se podria interrumpir recursos o reemplazarlos.

    -  CloudFormation proporciona dos metodos para actualizar stacks:
    
        - **Change sets**: Permiten previsualizar cambios antes de aplicarlos, asegurando que no ocurran modificaciones no intencionadas. Son utiles para evaluar opciones, como verificar que instancias de bases de datos no se reemplacen durante una actualizacion.
    
        - **Actualizacion directa**: Los cambios se envian y despliegan inmediatamente por CloudFormation (Adecuado para despliegues rapidos).

- **Eliminar un stack** implica depura todos los recursos asociados pero el costo seria por la duracion que tuvo en el mes esos recursos.

- CloudFormation asegura que todos los recursos deben crearse o eliminarse con exito (atomicidad).

    - Si un recurso no puede crearse, CloudFormation hace rollback del stack y elimina cualquier recurso creado.
    
    - Si un recurso no puede eliminarse, los recursos restantes se retienen hasta que el stack pueda eliminarse con exito.

- **Estado del stack** se monitorea a traves de varias interfaces, incluyendo la consola de CloudFormation, AWS CLI, AWS Tools for PowerShell, Query API, AWS SDKs y AWS Cloud Development Kit (AWS CDK).

- **Deteccion de drift** identifica cambios de configuracion no gestionados en stacks y recursos, estos "difts" puede realizarse en un stack entero o recursos individuales.

    - La deteccion de drift ayuda a mantener el estado deseado definido en la plantilla.

- **Stacks anidados** o **Nested Stacks** permiten que stacks contengan otros stacks.


# Nested Stacks

## ¿Que son los Nested Stacks en AWS CloudFormation?

- Los nested stacks en AWS CloudFormation permiten dividir una plantilla grande en piezas reutilizables y modulares al referenciar otras plantillas dentro de una pila principal (root stack).

- Promueven una mejor organizacion, reutilizacion y mantenibilidad del codigo de infraestructura.


## Conceptos

- **Root Stack**: La pila de nivel superior que contiene referencias a nested stacks.

- **Nested Stacks**: Pilas creadas como parte de otra pila. Cada nested stack tiene una pila padre inmediata, y todas las nested stacks pertenecen a un unico root stack.

- **Jerarquia**: Los nested stacks pueden contener otros nested stacks, formando una jerarquia. Por ejemplo:

    - Stack A es el **root stack** (pila raiz).
    
    - Stack B esta anidado dentro de A → A es el padre y tambien el root de B.
    
    - Stack C esta anidado dentro de B → B es el padre directo de C, pero **A sigue siendo el root stack de C**.
    
    - Stack D esta anidado dentro de C → C es el padre directo de D, pero **A sigue siendo el root stack de D**.


## Como Funcionan

- Al crear o actualizar el root stack, CloudFormation aprovisiona automaticamente los nested stacks como parte del proceso de despliegue. 

- Un nested stack se define en la plantilla de la pila padre usando el recurso `AWS::CloudFormation::Stack`, que especifica una `TemplateURL` o `TemplateBody` y parametros opcionales para pasar a la plantilla anidada.


## Beneficios

- **Reutilizacion**: Configuraciones comunes (por ejemplo, balanceador de carga, funcion Lambda, VPC) se definen en plantillas separadas y se reutilizan en multiples stacks.

- **Modularidad**: Las plantillas grandes se dividen en plantillas mas pequeñas y enfocadas, mejorando la legibilidad y el mantenimiento.

- **Organizacion**: Los recursos relacionados se agrupan logicamente, facilitando la gestion de infraestructuras complejas.

- **Parametrizacion**: Los parametros se pueden pasar desde el stack padre a los nested stacks, permitiendo personalizacion sin modificar la plantilla anidada.


## Limitaciones y Consideraciones

- **Comportamiento de Actualizacion**: Las operaciones de stack (por ejemplo, actualizaciones) deben iniciarse desde el root stack. Actualizar solo un nested stack directamente puede llevar a inconsistencias.

- **Impacto en Rollback**: Si un nested stack falla o se atasca (por ejemplo, en `UPDATE_ROLLBACK_IN_PROGRESS`), el root stack esperara hasta que el nested stack complete su rollback antes de proceder.

- **Permisos IAM**: Los usuarios deben tener permisos IAM para gestionar actualizaciones y cancelaciones de stacks, especialmente cuando los nested stacks involucran recursos IAM.

- **Visibilidad**: Los nested stacks aparecen en la consola de AWS con la etiqueta **NESTED** sobre su nombre. Su estado afecta el estado general del root stack.

- **Empaquetado de Plantillas**: Al usar plantillas locales, se requiere el comando `package` de AWS CLI para subir las plantillas a S3 y actualizar las referencias `TemplateURL`.
