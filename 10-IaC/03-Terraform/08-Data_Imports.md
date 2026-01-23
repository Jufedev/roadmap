# Data Soucers

- Permiten consultar recursos existentes a traves del provider y usar sus atributos en tu configuracion.

- No crean ni gestionan recursos, solo leen datos.

- Lectura en tiempo de plan/apply.

- Se pueden usar para integrar elementos creados fuera de Terraform o por otro equipo.

## Ejemplo

```
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
  owners = ["099720109477"] # owner canonical (ejemplo)
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id   # uso de atributo leido
  instance_type = "t3.micro"
}
```


# Imports

- Asigna un recurso existente en el mundo real a una direccion de recurso en el estado de Terraform.

- Una vez importado, Terraform puede gestionar el recurso como si lo hubiera creado (siempre que exista un bloque resource con la misma direccion en el codigo).

- Importar no genera automaticamente el HCL.


## Ejemplo

```
import {
  to = aws_instance.web
  id = "i-0123456789abcdef0"
}

```


# Data sources vs Import — ¿Cuando usar cada uno?

- **Data source**:
    
    - Leer solamente. 
    
    - Usarlo si solo se necesita informacion (IDs, atributos) y no se quiere que Terraform gestione el recurso.


- **Import**:
    
    - Traer bajo gestion. 
    
    - Usarlo si se quiere que Terraform gestione el ciclo de vida (crear/destroy/update) del recurso existente.
