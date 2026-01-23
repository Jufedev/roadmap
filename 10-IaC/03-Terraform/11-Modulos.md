# Modulos 

- Es un conjunto de recursos que realiza una funcion comun.

- Cualquier directorio con archivos .tf se considera un modulo.

- Expone valores (como IPs o ARN) una vez aplicada la infraestructura (valores usables luego de ejecucion).

- Permite que los modulos y configuraciones puedan intercambiar informacion.

- Pueden recibir entradas (variables) y proporcionar salidas (output). 

- Sigue el principio DRY o Don't Repeat Yourself (evitar repetir bloques de recursos similares).

- Existe el Terraform Registry donde la comunidad publica modulos

## Clasificacion

- Modulo principal:
  - main.tf
  - variables.tf
  - output.tf
  - providers.tf
  - data.tf

- Modulo Hijo:
  - main.tf
  - variables.tf
  - output.tf     # Exporta primero el valor para usarse en el padre

## Ejemplo

```
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws" # Usar un directorio
  name    = "mi-vpc"
  cidr    = "10.0.0.0/16"
  azs     = ["us-east-1a", "us-east-1b"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
  private_subnets = ["10.0.1.0/24",  "10.0.2.0/24"]
  enable_nat_gateway = true
}

module "security_group" {
  source     = "terraform-aws-modules/security-group/aws"
  name       = "mi-sg"
  vpc_id     = module.vpc.vpc_id  # Usar salida de modulo VPC
  description = "Seguridad para mi app"
  ingress_with_cidr_blocks = [
    { from_port = 80, to_port = 80, cidr_blocks = ["0.0.0.0/0"] }
  ]
}

```