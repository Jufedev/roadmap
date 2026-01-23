# Recursos

- Son los componente fundamentales de la infraestructura a desplegar.

- Los recursos se definen con el bloque `resource "<tipo>_<nombre>" "<identificador>" { ... }`.

- Terraform por defecto primero destruye recursos y luego los crea.

## Ejemplo

```
resource "aws_instance" "mi_instancia" {
  ami           = "ami-0c55b159cbfafe1f0" # ID de imagen de la maquina (AMI) en us-east-1
  instance_type = "t2.micro" # Tipo de instancia
  tags = {
    Name        = "MiInstanciaWeb" # Etiqueta (tag) opcional para identificar la instancia
    Environment = "Dev"
  }

  lifecycle {
    create_before_destroy = true    # Primero lo crea y luego lo destruye.
    prevent_destroy = true    # No eliminar bajo ningun concepto el recurso.
    ignore_changes = [ami, subnet_id]   # Ignora cambios del recurso.
    replace_triggered_by = [ aws_subnet.private_subnet ]  # Si se cambia un recurso (asi sea un tag) este recurso sera redesplegado. 
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

# Dependencias

- Existen dependencias explicitas o implicitas al desplegar recursos:
  - Implicita: Una subnet y una VPC, la subnet no se puede crear sin que la VPC se cree primero.
  - Explicita: Se agrega el bloque `depensondepends_on = []` para que el recurso no se cree antes o paralelamente que otro.

# Targeting

- Aplicar solo cambios especificos sin aplicar otros cambios.
- Util en caso de que hallan problemas en un recurso y queramos editarlo sin aplicar features en las que todavia estamos trabajando.
- Se usa con el comando `terraform apply --target RECURSO`.