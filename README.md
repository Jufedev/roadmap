# Roadmap Cloud Infrastructure

Notas de estudio sobre infraestructura cloud, networking, contenedores e IaC. El contenido se construye a partir de sesiones con [NotebookLM](https://notebooklm.google.com/) y documentacion oficial, siguiendo un template estandarizado que prioriza el _por que_ sobre el _como_.

**Stack principal:** AWS · Terraform · Docker · Kubernetes · Go · Python · Linux

[roadmap.jufe.dev](https://roadmap.jufe.dev)

---

## Estructura

```
00-fundamentos/        Linux, networking, Python — los cimientos de todo lo demas
01-Internet/           Como funciona la web: HTTP, DNS, dominios, hosting
02-APIs/               REST, autenticacion, conceptos generales
03-VCS/                Git y GitHub
04-DataBases/          SQL, normalizacion, SQL Server
05-dev/                Lenguajes y frameworks: Go, Python, Astro, front, legado
09-contenedores/       Docker, Kubernetes, Swarm
10-IaC/                Terraform, CloudFormation, GitHub Actions
11-seguridad/          Conceptos generales, Fortinet NSE
12-aws/                Compute, storage, networking, serverless, multi-account
13-azure/              Identity, networking, hybrid, Virtual WAN
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

El foco actual es infraestructura cloud en AWS con proyeccion hacia la certificacion **AWS Advanced Networking Specialty**. El camino:

1. ~~Fundamentos (Linux, networking, scripting)~~
2. Contenedores (Docker, Kubernetes, EKS)
3. IaC (Terraform, GitHub Actions, OIDC)
4. **Terraform Associate** — en preparacion
5. AWS networking profundo (VPC, TGW, PrivateLink, Direct Connect)
6. AWS Advanced Networking Specialty
