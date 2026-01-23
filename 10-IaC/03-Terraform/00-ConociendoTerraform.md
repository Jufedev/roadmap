# ¿Que es?

- Es una herramienta de HashiCorp open source para administrar soluciones en cualquier cloud.

- Se usa para definir, aprovisionar y gestionar infraestructura de nube y on-premises mediante archivos de configuracion.

- Es declarativo, decimos que vamos a desplegar no el como.

# Conceptos

- **Write:** Se describe la infraestructura que se desea pero no como se aprovisiona.

- **Plan:** Terraform analiza la configuracion escrita y el estado actual de la infraestructura y crea un plan de ejecucion que describe como alcanzara el estado final a partir del estado actual.

- **Apply:** Una vez se aprueba el plan, Terraform realiza las operaciones propuestas en el orden correcto y respeta cualquier dependencia de recursos.

- **Inmutabilidad:** Tratar los recursos como no mutables. Solo editarlos desde terraform y no directamente.

# Algunos datos sobre el lenguaje

- Nacio en el 2014.

- Usa el lenguaje HCl (HashiCorp Configuration Language) para su sintaxis.

- Agnostico al provider.

- Puede crear 10 recursos en paralelo por defecto, esto es custom.

# Estructura de un bloque HCL

```
Tipo de   Tipo de     Nombre del
bloque    Recurso      Recurso
   |         |            |
   v         v            v
resource "local_file" "mensaje" {
    content = "Este es un archivo"     <- Argumento 1
    filename = "archivo.txt"           <- Argumento 2
}
```

# Comandos basicos

- Al tener un proyecto nuevo o agregar un proveedor nuevo, ejecutar `terraform init` para que descargue el proveedor que definimos.

- `terraform plan`:
    - Hace un refresh del tfstate.
    - Ver las acciones que terraform va a ejecutar.

- `terraform plan --out NOMBRE.plan`:
    - Guardar el plan en un archivo.
    - Util si queremos hacer deploy despues y trabajamos en un repo que alguien mas puede editar.

- `terraform refresh`:
    - Busca cambios y refresca el tfstate.
    - Su uso es para traer cambios que se hayan echo en la consola de AWS.

- `terraform apply`: 
    - Ejecutar las acciones que vimos en el plan.
    - Crea un plan nuevo, no usa planes que ya habiamos ejecutado.
    - Se puede ejecutar `terraform apply --auto-approve=true` para que se apruebe sin el "yes". 
    - Se puede ejecutar `terraform apply --replace=RECURSO.NOMBRE` para que se recree un recurso (destruye y crea). 

- `terraform apply NOMBRE.plan`: 
    - Despliega recursos de un plan previamente creado.
    - No se realiza un plan y no pregunta si queremos hacer deploy.

- `terraform destroy`: 
    - Eliminar todos los recursos creados.

- `terraform fmt`:
    - Formatea todos los archivos Terraform del directorio.

- `terraform fmt ARCHIVO.tf`:
    - Formatea solo un archivo Terraform.

- `terraform validate`:
    - Verificar que no hayan errores en archivos terraform.
    - `terraform plan` tambien arroja los errores, pero el plan puede tardar mucho tiempo en hacerse, si sale un error perdemos ese tiempo.

- `terraform providers`:
    - Listar los proveedores de nuestro proyecto.

- `terraform output`:
    - Listar todos los outputs del proyecto.

- `terraform output OUTPUT`:
    - Mostrar solo el valor de 1 output.

- `terraform show`: 
    - Ver los recursos que terraform creo (consulta al tfstate).
    - Si se hace un destroy show no muestra nada.
    - Para una salida en formato json usar `terraform show -json`

- `terraform graph`: 
    - Da una lista de las dependencias y como se relacionan los recursos desplegados.
    - Para exportar en un svg podemos usar `terraform graph | dot -Tsvg > graph.svg`

- `terraform state list`:
    - Lista de los recursos desplegados.

- `terraform state show RECURSO.NOMBRE`:
    - Detalle de un recurso.

- `terraform state mv SOURCE DESTINATION`:
    - Mover (renombrar) recursos del tfstate.
    - Modificar nombres del tfsate sin necesidad de redesplegar recursos.

- `terraform state rm RECURSO.NOMBRE`:
    - Borra recursos del estado pero no recursos desplegados.
    - Dejar de dar seguimiento de recursos desplegados.
    - Se deja de tener el recurso como IaC (desligar recursos de terraform).

- `terraform state pull > terraform.tfstate`:
    - Descargar un estado remoto para manejarlo de forma local.

- `terraform init -migrate-state`:
    - Migrar el estado de remoto a local (se hace despues de descargar el estado remoto).

- `terraform taint RECURSO.NOMBRE`:
    - Marcar el recurso como "tainted" o "manchado".
    - Esto sirve para que el recurso siempre se recree en el apply.
    - Se ejecuta `terraform untaint RECURSO.NOMBRE` para desmarcar el recurso.
    - Los recursos se pueden marcar como "tainted" al crear un recurso pero falla uno de los pasos (ejemplo la ejecucion de un codigo que no afecta en la creacion de la instancia).

- `terraform import RECURSO.NOMBRE ID`:
    - Importar un recurso al estado de terraform.

- `terraform console`:
    - Abrir una consola para debuggear valores de las funciones y cosas aritmeticas.