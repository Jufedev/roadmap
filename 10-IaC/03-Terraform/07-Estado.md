# Data Soucers

- Guarda la informacion de los recursos existentes.

- En proyectos de equipo es critico almacenar el estado en un backend remoto compartido (en lugar de local) para colaboracion y seguridad.

- Se puede almacenar en un S3.

## Ejemplo

```
terraform {
  backend "s3" {
    bucket       = "myorg-terraform-states"  # bucket donde se guardan los estados
    key          = "proyecto/envoyer/tfstate" # ruta del archivo de estado dentro del bucket
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true  # utiliza el bloqueo nativo de S3 (Terraform ≥1.10) | Evitar que varios usuarios escriban al tiempo
  }
}
```
