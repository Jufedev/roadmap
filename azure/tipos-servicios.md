# [tipos-servicios] — [Servicios ofrecios por Azure]

> **Dominio:** Azure 
> **Relacionado con:** none

---

## Qué es y por qué importa

Define quien es el responsable de que cosa frente a algun incidente.

---

## Cómo funciona

Division de servicios, esta division permite categorizar los servicios que ofrece Azure:

### [IaaS]

Infraestructura como servicio

**Servicios:** Azure Virtual Machines, Azure Virtual Network, Azure Disk Storage, Azure ExpressRoute, Azure VPN Gateway, Azure Load Balancer, Azure Application Gateway, Azure Firewall, Azure Bastion

### [PaaS]

Plataforma como servicio

**Servicios:** Azure App Service, Azure Functions, Azure Kubernetes Service (AKS), Azure Container Apps, Azure SQL Database, Azure Blob Storage, Azure Files, Azure Table Storage, Azure Queue Storage, Azure Cosmos DB, Azure Key Vault, Azure OpenAI Service, Azure DevOps

### [SaaS]

Software como servicio

**Servicios:** Microsoft 365, Microsoft Dynamics 365, Power BI, Power Apps, Power Automate, Microsoft Entra ID, Microsoft Sentinel, Microsoft Defender for Cloud

---

## Cuándo usar qué — comparativas

| | IaaS | PaaS | SaaS |
|--|----------|----------|----------|
| Cuándo usar | Control total, migracion apps legacy, escalabilidad especifica | Enfoque desarrollo y deploy, agilizar desarrollo, no tiempo para gestion de sistemas | Solucion lista para usar, CRM o colaboracion, no se cuenta con equipo dev |
| Limitación clave | Alta carga operativa | Vendor Lock-In | No personalizacion y sin control |

---

## Gotchas y errores frecuentes

- **Confundir responsabilidad:** En IaaS la responsabilidad es del consumidor. En PaaS el consumidor y el CSP son responsables. En SaaS el CSP es responsable del servicio.

---

## Fuentes y referencias

- [MSFT Learn](https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/4-describe-shared-responsibility-model) — Explicacion del modelo de responsabilidad compartida
