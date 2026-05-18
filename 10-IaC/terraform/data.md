# Data Soucers

- Permiten consultar recursos existentes a traves del provider y usar sus atributos en tu configuracion.

- No crean ni gestionan recursos, solo leen datos.

- Lectura en tiempo de plan/apply.

- Se pueden usar para integrar elementos creados fuera de Terraform o por otro equipo.

- Bloques para usar recursos de infraestructura que ya se encuentra desplegada.

## Ejemplo

```
data "aws_key_pair" "key_importada" {
  key_name = "mykey"
}
```

```
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
  owners = ["099720109477"] # owner canonical (ejemplo)
}
```

- Los recursos de data se llaman de la siguiente manera:

```
resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id   # uso de atributo leido
  instance_type = "t3.micro"
}
```

```
  key_name = data.aws_key_pair.key_importada.key_name # uso de atributo leido
```