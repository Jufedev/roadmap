# Outputs

- Parametros de la configuracion.

- Expone valores (como IPs o ARN) una vez aplicada la infraestructura (valores usables luego de ejecucion).

- Permite que los modulos y configuraciones puedan intercambiar informacion.

- Se crea un archivo `outputs.tf`.

- Usar `-out "plan.out"` para exportar los outputs.

## Ejemplo (Compartido con Variables)

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