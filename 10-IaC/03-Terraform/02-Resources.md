# Recursos

- Son los componente fundamentales de la infraestructura a desplegar.

- Los recursos se definen con el bloque `resource "<tipo>_<nombre>" "<identificador>" { ... }`.

## Ejemplo

```
resource "aws_instance" "mi_instancia" {
  ami           = "ami-0c55b159cbfafe1f0" # ID de imagen de la maquina (AMI) en us-east-1
  instance_type = "t2.micro" # Tipo de instancia
  tags = {
    Name        = "MiInstanciaWeb" # Etiqueta (tag) opcional para identificar la instancia
    Environment = "Dev"
  }
}

resource "aws_s3_bucket" "logs_bucket" {
  bucket = "mi-bucket-de-logs" # Nombre del bucket (unico en S3)
  acl    = "private" # Control de acceso
  tags = {
    Environment = "Dev"
    Project     = "InfraExample"
  }
}
```