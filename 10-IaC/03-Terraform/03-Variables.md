# Variables

- Parametros de la configuracion.

- Define valores de entrada configurables que se pueden pasar en el archivo `terraform.tfvars` o linea de comandos.

- No deben ir a un repositorio ya que contiene informacion sensible.

- Puede usarse una variable de entorno pero debe empezar con **TF_VAR**.

- Al momento de ejecutar el apply o plan se puede asignar el valor en ejecucion si esta no se asigno antes.

- Se puede asignar un archivo o valor en el plan o apply `terraform plan -var-file="terraform.tfvars"` o `terraform plan -var NOMBRE_VARIABLE="VALOR"`

- Los archivos que contienen los valores de variables pueden llamarse asi:
  - terraform.tfvars
  - terraform.tfvars.json
  - *.auto.tfvars
  - *.auto.tfvars.json

- Orden jerarquico de las variables:
  - Comando.
  - Archivos *.auto.tfvars (orden alfabetico).
  - Archivo terraform.tfvars.
  - Variable de entorno.
  - Los valores que estan en los archivos se sobreponen sobre las variables de entorno y los que se ponen en el comando se sobreponen a los del archivos y asi sucesivamente.

- Si definimos una variable como "sensitive" al aplicar un plan o apply no vamos a ver su valor asignado.

- Solo se pueden convertir los siguiente tipos:
  - String a number y viceversa.
  - String a bool y viceversa.

- Existen tipos mas avanzados en variables: list, map, set, object (Conpuesto de multiples variables), tuple (una lista pero puede contener varios tipos de datos)

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


variable "conversion" {
  type        = number
  default     = "2"       // Convierte el string en numero 
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
