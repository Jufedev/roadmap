# Funciones

- file() # Abrir un archivo
- toset()
- length()
- max() 
- min()
- ceil() # Redondear para arriba
- floor() # Redondear para abajo
- split(ELEMENTO (","), VARIABLE) # Una lista de una cadena
- lower()
- upper()
- title() # Coloca la primera letra en mayuscula
- substr(CADENA, OFFSET (Desde donde inicia), ESPACIOS (Longitud de la subcadena))
- join(ELEMENTO ("-"), VARIABLE) # Unir varios valores en una cadena
- index(VARIABLE, KEY)
- element(VARIABLE, POSICION)
- contains(VARIABLE, CADENA) # Contiene o no un valor en una variable (lista)
- keys() # LLaves de un map
- values() # Valores de un map
- lookup(VARIABLE, KEY, DEFAULT (opcional)) # Busca el valor de una llave, si no lo encuentra muestra el default

## Condicionales

resource "aws_instance" "public_instance" {
    count = var.enable_monitoreo == "yes" ? 1 : 0     # CONDICION ? TRUE : FALSE, si count es 0 no lo desplega
    tags = {
        "Name" = "Monitoreo"
    }
}

## COUNT

- No le importa el valor que borre si no la posicion.

```
variable "instancias" {
    description = "Nombre de las instancias"
    type = list(string)
    default = ["apache", "mysql", "jumpserver"]
}

resource "aws_instance" "public_instance" {
    count = lenth(var.instancias)
    tags = {
        "Name" = var.instancias[count.index]
    }
}
```

## FOREACH

- Al manejar "llaves" los valores del set son importantes.

```
variable "instancias" {
    description = "Nombre de las instancias"
    type = set(string)
    default = ["apache", "mysql", "jumpserver"]
}

resource "aws_instance" "public_instance" {
    for_each = var.instancias
    tags = {
        "Name" = each.value
    }
}
```

