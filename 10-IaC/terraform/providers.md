# Proveedores

- Complementos para omunicarse con las APIs de los servicios cloud.

- Cada proveedor (por ejemplo, hashicorp/aws) actua como puente entre Terraform y el servicio objetivo.

- Se configuran en el bloque `terraform { required_providers { ... } }` o en un bloque especifico `provider "aws" { ... }`.


## Ejemplo

```
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0" # Version minima de AWS provider
    }
  }
  required_version = ">= 1.2"  # Version minima de Terraform | >= una version igual o mayor | ~> cualquier version en minor version #.#.X | >= , < mayor que pero menor que
}

provider "aws" {
  region                  = "us-east-1" # Region por defecto
  shared_credentials_file = "~/.aws/credentials" # Archivo de credenciales AWS
  default_tags {      # Colocar tags por defecto a todo los recursos de AWS
    tags = var.tags
  }
}
```
