# ¿Que es?

- Es una herramienta de HashiCorp open source para administrar soluciones en cualquier cloud.

- Se usa para definir, aprovisionar y gestionar infraestructura de nube y on-premises mediante archivos de configuración.

# Conceptos

- **Write:** Se describe la infraestructura que se desea pero no como se aprovisiona.

- **Plan:** Terraform analiza la configuracion escrita y el estado actual de la infraestructura y crea un plan de ejecucion que describe como alcanzara el estado final a partir del estado actual.

- **Apply:** Una vez se aprueba el plan, Terraform realiza las operaciones propuestas en el orden correcto y respeta cualquier dependencia de recursos.

# Algunos datos sobre el lenguaje

- Nacio en el 2014.

- Usa el lenguaje HCl (HashiCorp Configuration Language) para su sintaxis.