# Proveedores

- Complementos para omunicarse con las APIs de los servicios cloud.

- Cada proveedor (por ejemplo, hashicorp/aws) actúa como puente entre Terraform y el servicio objetivo.

- Se configuran en el bloque `terraform { required_providers { ... } }` o en un bloque específico `provider "aws" { ... }`.


## Ejemplo

```
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"          # Versión mínima de AWS provider
    }
  }
  required_version = ">= 1.2"      # Versión mínima de Terraform
}

provider "aws" {
  region                  = "us-east-1"         # Región por defecto
  shared_credentials_file = "~/.aws/credentials" # Archivo de credenciales AWS
}
```
