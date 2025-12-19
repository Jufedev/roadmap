# Variables

- Parametros de la configuracion.

- Define valores de entrada configurables que se pueden pasar en el archivo `terraform.tfvars` o línea de comandos.

- No deben ir a un repositorio ya que contiene informacion sensible.

- `terraform plan -var-file="terraform.tfvars"`

## Ejemplo (Compartido con Outputs)

```
variable "instance_count" {
  description = "Número de instancias a crear"
  type        = number
  default     = 2
}

resource "aws_instance" "web" {
  count         = var.instance_count  # utilizar la variable
}

output "instance_ids" {
  value = aws_instance.web.*.id  # IDs de las instancias creadas
}
```
