# Workspaces

- Reusar codigo para desplegar en diferentes entornos.

- Esta opcion se desplazo por *TERRAGRUNT*.

## Comandos

- `terraform workspace list`: Listar workspace.
- `terraform workspace new NOMBRE`: Crear workspace, se selecciona automaticamente al crear.
- `terraform workspace select NOMBRE`: Seleccionar un workspace.
- `terraform workspace delete NOMBRE`: Eliminar un workspace.
- `terraform workspace show`: Muestra el workspace en el que estamos

## Ejemplo

```
resource "aws_vpc" "vpc_virginia" {
    cidr_block = lookup(var.virginia_cidr, terraform.workspace) # Toma el valor del workspace y decir que CIDR aplica
}
```