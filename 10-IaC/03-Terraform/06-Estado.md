# TFSTATE

- Guarda la informacion de los recursos existentes.

- Terraform compara los archivos de configuracion contra el estado para hacer los cambios.

- NUNCA editar estos archivos manualmente.

- En el tfstate se ven los datos sensibles.

- El archivo de .tfsatate.backup se llena cuando se destruye la infraestructura. 

- En proyectos de equipo es critico almacenar el estado en un BACKEND remoto compartido (en lugar de local) para colaboracion y seguridad.

- Por cuestiones de seguridad no se guarda en repositorios por cuestiones de seguridad.

- Se puede almacenar en un S3 (Cifrado, versionado) y acompañarlo con una tabla de DinamoDB para que solo una persona pueda editar este archivo a la vez.

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
