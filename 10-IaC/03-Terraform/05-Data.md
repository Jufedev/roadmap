# Data
- Bloques para usar recursos de infraestructura que ya se encuentra desplegada.

## Ejemplo (Compartido con Variables)

```
data "aws_key_pair" "key_importada" {
  key_name = "mykey"
}
```

- Los recursos de data se llaman de la siguiente manera:

```
  key_name = data.aws_key_pair.key_importada.key_name
```