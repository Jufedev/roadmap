# Imports

- Asigna un recurso existente en el mundo real a una direccion de recurso en el estado de Terraform.

- Una vez importado, Terraform puede gestionar el recurso como si lo hubiera creado (siempre que exista un bloque resource con la misma direccion en el codigo).

- Importar no genera automaticamente el HCL.

- Una vez importado el recurso en el estado podemos ver sus caracteristicas y duplicarlo para empezarlo a manejar como IaC.

## Ejemplo

```
import {
  to = aws_instance.web       # Nombre del recurso
  id = "i-0123456789abcdef0"
}

```


# Data sources vs Import — ¿Cuando usar cada uno?

- **Data source**:
    
    - Leer solamente. 
    
    - Usarlo si solo se necesita informacion (IDs, atributos) y no se quiere que Terraform gestione el recurso.


- **Import**:
    
    - Traer bajo gestion. 
    
    - Usarlo si se quiere que Terraform gestione el ciclo de vida (crear/destroy/update) del recurso existente.
