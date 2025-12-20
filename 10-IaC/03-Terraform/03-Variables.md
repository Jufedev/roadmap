# Variables

- Parametros de la configuracion.

- Define valores de entrada configurables que se pueden pasar en el archivo `terraform.tfvars` o linea de comandos.

- No deben ir a un repositorio ya que contiene informacion sensible.

- `terraform plan -var-file="terraform.tfvars"`

## Ejemplo (Compartido con Outputs)

```
variable "instance_count" {
  description = "Numero de instancias a crear"
  type        = number
  default     = 2
}

resource "aws_instance" "web" {
  count         = var.instance_count  # Utilizar la variable
}

output "instance_ids" {
  value = aws_instance.web.*.id  # IDs de las instancias creadas
}
```

# Locals

- Valores calculados dentro de un modulo.

- Son evaluados en tiempo de planificacion/ejecucion y se referencian con `local.nombre`.

- Se usan cuando se quiere agrupar tags comunes, calcular CIDR lists, transformar outputs de modulos antes de usarlos, o simplificar expresiones complejas.


## Ejemplo 

```
# locals.tf
locals {
  # etiquetas comunes para todos los recursos
  common_tags = {
    Environment = var.environment
    Project     = "mi-proyecto"
  }

  # construir una lista de CIDR para subnets a partir del CIDR base
  subnet_cidrs = [
    for i in range(var.az_count) : cidrsubnet(var.vpc_cidr, 8, i)
  ]
}

# uso en un recurso
resource "aws_subnet" "public" {
  for_each = { for idx, cidr in local.subnet_cidrs : idx => cidr }

  vpc_id            = module.vpc.vpc_id
  cidr_block        = each.value
  availability_zone = element(var.azs, tonumber(each.key))
  tags = merge(local.common_tags, { Name = "subnet-${each.key}" })
}
```
