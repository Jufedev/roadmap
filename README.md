# Roadmap Cloud Infrastructure

Notas de estudio sobre infraestructura cloud, networking, contenedores e IaC. El contenido se construye a partir de sesiones con documentacion oficial, siguiendo un template estandarizado que prioriza el _por que_ sobre el _como_.

**Stack principal:** AWS · Azure · Docker · Terraform · Kubernetes · Go · Python · Linux · Fortinet

[roadmap.jufe.dev](https://roadmap.jufe.dev)

---

## Estructura

``
aws/                computo, storage, redes, identidad, serverless, gobierno, IaC, notas de examen
azure/              computo, storage, redes, identidad, serverless, gobierno, IaC, notas de examen
cicd/               github actions
contenedores/       docker
desarrollo/         apis, bases de datos, go, git
fundamentos/        linux, redes, python
kubernetes/         arquitecturas, redes, cargas de trabajo, notas de examen
seguridad/          conceptos generales, Fortinet NSE, notas de examen NSE
terraform/          estado, conceptos, modulos, notas de examen
```

---

## Template de notas

Cada archivo sigue la estructura definida en [`template.md`](template.md):

- **Que es y por que importa** — definicion directa y problema que resuelve
- **Como funciona** — mecanismo con sub-conceptos y casos de uso reales
- **Cuando usar que** — comparativas solo cuando hay alternativas relevantes
- **Referencia rapida** — comandos y configuracion con contexto
- **Gotchas y errores frecuentes** — lo que parece X pero es Y
- **Conexiones internas** — links a otros archivos del repo
- **Fuentes y referencias** — recursos con una linea de por que valen la pena

---

## Roadmap

El foco actual es la especializacion en redes y contenedores por medio de infraestructura cloud en AWS y Azure con proyeccion hacia la certificacion **AWS Advanced Networking Specialty**.