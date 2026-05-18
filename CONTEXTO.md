# Sesión: Auditoría y mejora de perfiles LinkedIn + GitHub
**Perfil:** Juan Serrato (@jufedev) — Cloud Infrastructure Engineer  
**Objetivo:** Posicionarse como Cloud Infrastructure Engineer especializado en AWS y networking, roadmap hacia AWS Advanced Networking Specialty.

---

## Contexto del perfil

- **Stack principal:** AWS · Go · Python · Terraform · Docker · Linux
- **Experiencia:** ~1.5 años en infraestructura cloud
- **Educación:** Ingeniería de Sistemas en ECCI (finalizando dic 2026)
- **Ubicación:** Bogotá, Colombia
- **Mercado objetivo:** Colombia/LATAM + Internacional (ambos por igual)
- **Idioma de perfil:** Español (decisión tomada en sesión)
- **GitHub:** https://github.com/jufedev
- **LinkedIn:** https://linkedin.com/in/juan-serrato-b049b1303

---

## Scores iniciales del diagnóstico

### LinkedIn — 58/100
| Sección | Score |
|---------|-------|
| Headline | 7/10 |
| About / Summary | 8/10 |
| Experiencia | 6.5/10 |
| Educación | 5.5/10 |
| Certificaciones | 3/10 |
| Skills | 6.5/10 |
| Actividad / Posts | 1/10 |
| Red (contactos) | 2/10 |
| Recomendaciones | 0/10 |
| Visual (foto/cover) | 5/10 |

### GitHub — 52/100
| Sección | Score |
|---------|-------|
| Bio (sidebar) | 1.5/10 → corregido |
| README content | 7/10 |
| README visual | 7/10 |
| Repos relevantes | 3.5/10 |
| Contribution activity | 5/10 |
| Stack representation | 6.5/10 |
| Networking repos | 0/10 |
| READMEs en repos | 3/10 |
| Coherencia de posición | 4/10 |
| Contribution streak | 2/10 |

---

## Inconsistencias detectadas entre perfiles

1. **Bio desactualizada en GitHub** — sidebar decía "Desarrollador Backend con una gran pasión por la tecnología" (corregido en sesión)
2. **Idioma dividido** — LinkedIn en español, GitHub README en inglés (resuelto: perfil en español)
3. **Especialidad sin evidencia en GitHub** — LinkedIn declara Transit Gateway, PrivateLink, multi-account pero no hay repos que lo demuestren
4. **Repos no alineados** — nvim, otel, consultaGame, roadmap no refuerzan posicionamiento de infra cloud
5. **Título inconsistente** — "Ingeniero Cloud" vs "Cloud Infrastructure Engineer" (unificado en sesión)

---

## Cambios aplicados en sesión

### ✅ Headline (LinkedIn + GitHub bio)
**Aplicado en ambos:**
> Cloud Infrastructure Engineer · AWS Networking & Containers | Terraform · ECS/Fargate · Python · Go

### ✅ About (LinkedIn)
El usuario decidió mantener su About original. Sin cambios.

### ✅ Experiencia (LinkedIn)
El usuario aplicó un cambio de orden en las bullets de Moovia Colombia. El resto se mantuvo.  
**Recomendaciones anotadas pero no aplicadas:**
- Agregar métricas cuantificables ("migré X apps", "N cuentas AWS")
- Cambiar "Colaboré en la implementación de Landing Zones" → verbo de acción directa
- Fusionar bullet de Secrets Manager con la de migración EC2→ECS

### ✅ Educación (LinkedIn)
**Ingeniería de Sistemas — bullets reemplazadas:**
> • Desplegué y gestioné aplicaciones en plataformas cloud (Vercel, Cloudflare Workers/Pages, Railway, Render), administrando variables de entorno, dominios personalizados y configuración de servicios.  
> • Trabajé con servicios de almacenamiento y bases de datos administradas en la nube: Cloudflare R2 (object storage), Supabase (PostgreSQL), Turso (SQLite distribuido) y Cloudflare D1 (SQL edge).

**Tecnólogo — bullets reemplazadas:**
> • Participé en el semillero de investigación "Sipnasis", desarrollando habilidades en diseño de experiencias interactivas y exposición de proyectos técnicos ante audiencias académicas.  
> • Fundamentos de desarrollo de software: SQL, Git, lógica de programación orientada a proyectos reales.

### ✅ Skills (LinkedIn)
Reordenadas. Top 3 visibles ahora:
1. Amazon Web Services (AWS)
2. Terraform
3. Arquitectura multicuenta

Skills eliminadas: Directorio Activo, ADFS, Git, SQL, Microservicios.  
Orden general: Networking AWS (TGW, PrivateLink, VPC, Landing Zones) → Containers (ECS, Docker, Lambda, EC2) → Seguridad (IAM, Secrets Manager) → Lenguajes (Python, Go, Linux) → Otros (OCI, Gobernanza).

### ✅ GitHub bio (sidebar)
Actualizada a: `Cloud Infrastructure Engineer · AWS Networking & Containers | Terraform · ECS/Fargate · Python · Go`

---

## Pendientes — LinkedIn

### Certificaciones (anotado, no aplicado)
- **Reemplazar "Aprendizaje continuo" de Platzi** por los cursos específicos completados (con nombre real)
- **Prioridad inmediata: Terraform Associate** — más rápida del roadmap, 2-3 semanas de prep, gratis para registrarse. Cambia completamente el peso de la sección
- **GitHub Certifications** — GitHub Actions cert es gratuita, relevante para infra/CI-CD, se obtiene en horas
- **OCI Foundations** — mantener tal cual

### Actividad / Posts (anotado, no aplicado)
- 0 posts actuales = perfil invisible para el algoritmo
- Meta: 1 post técnico por semana durante 4 semanas seguidas
- Formatos recomendados:
  1. **Tip técnico corto** — algo aprendido en el trabajo, 150 palabras + captura
  2. **Diagrama de arquitectura** — draw.io o Excalidraw, con explicación de decisión de diseño
  3. **Antes/después** — infraestructura pre y post migración con razonamiento técnico

### Recomendaciones (anotado, no aplicado)
- Pedir mínimo 2 recomendaciones: 1 de Recaudo Bogotá + 1 de Moovia
- Deben ser específicas sobre proyectos concretos, no genéricas

### Cover photo (anotado, no aplicado)
- Agregar banner minimalista con stack o tema tech

### Red (anotado, no aplicado)
- 28 contactos actuales — muy bajo
- Conectar activamente con personas del ecosistema cloud colombiano

### LinkedIn → GitHub (pendiente de aplicar)
- Ir a: Editar perfil → Información de contacto → Agregar sitio web
- URL: `https://github.com/jufedev` | Etiqueta: GitHub

### LinkedIn → Credly (pendiente de aplicar)
- En Credly → badge OCI → Share → "Add to LinkedIn Profile"
- O manual: Licencias y certificaciones → URL de credencial = URL del badge en Credly

---

## Pendientes — GitHub

### Profile README (cambios a aplicar)
1. **Quitar** de "Also worked with": Supabase, Railway, Vercel (ningún repo de infra los usa — otel y consultaGame los usan pero son proyectos universitarios)
2. **Mantener** en "Also worked with": Cloudflare, OCI
3. **Agregar sección "Currently"** al final del README, antes de los stats:

```markdown
## 🎯 Currently
- Preparando: Terraform Associate
- Construyendo: aws-networking-patterns (TGW · PrivateLink · VPC)
- Meta: AWS Advanced Networking Specialty

📫 linkedin.com/in/juan-serrato-b049b1303 · Bogotá, Colombia
```

4. **Agregar sección Certifications** con badge de Credly:
```markdown
## Certifications
[![OCI Foundations](https://images.credly.com/size/110x110/images/[tu-badge-id].png)](https://www.credly.com/badges/[tu-badge-id])
```

### Estrategia de repos y pins

| Repo | Acción | Pin |
|------|--------|-----|
| AWS-Landing-Terraform | Mejorar descripción + topics + README | #1 |
| archlinux-setup | Agregar descripción + topics | #2 |
| roadmap | Reestructurar (ver abajo) | #3 |
| nvim | **Hacer privado** | — |
| otel | Agregar descripción de contexto, no pinnear | — |
| consultaGame | Agregar descripción de contexto, no pinnear | — |
| aws-networking-patterns | **Crear** (repo nuevo, ver abajo) | #4 |

### repo: AWS-Landing-Terraform
**Descripción del repo a cambiar a:**
> Multi-account AWS Landing Zone — VPC, Transit Gateway, ECS/Fargate, ALB, CI/CD with OIDC via GitHub Actions

**Topics a agregar:** `aws` `terraform` `landing-zone` `ecs` `transit-gateway` `infrastructure-as-code`

**README completo generado en sesión** — archivo `AWS-Landing-Terraform-README.md` disponible para pegar.  
Incluye: tabla de cuentas, arquitectura por capas, stack, estructura de carpetas, decisiones de diseño, checklist de estado, prerrequisitos.  
⚠️ Verificar que la estructura de carpetas del README coincida con la real antes de publicar.

**Diagrama de arquitectura revisado en sesión:**
- 4 cuentas: Root, Tooling, Connectivity, Prod
- OUs: Share Resources (Tooling + Connectivity) y Workloads (Prod)
- Root: Organizations, Identity Center (SSO), Cost Explorer
- Tooling: S3 tfstate
- Connectivity: VPC Ingress/Egress (IGW, NAT, subnets públicas /24 + privadas TGW /28), VPC Prod (subnets TGW /28, APP /24, DB /24), Transit Gateway, RAM
- Prod: API GW, ALB, Auto Scaling Group (EC2), RDS, DocumentDB, CloudFront, S3
- CI/CD: GitHub Actions → AWS vía OIDC (sin access keys estáticas)
- Multi-AZ: todo en AZ a y b

### repo: archlinux-setup
**Descripción a agregar:**
> Automated Arch Linux setup with macOS-style GNOME, systemd services and optional CachyOS performance layer

**Topics:** `arch-linux` `linux` `shell` `automation` `gnome` `dotfiles`

### repo: roadmap
**Problema:** carpetas `101-Angular (Legado)` y `102-CSharp (Legado)` visibles — señalizan pasado de dev frontend/C#  
**Acción:** mover a `_archive/` o eliminar  
**README a actualizar:**
- Cambiar título: eliminar "y algo de web"
- Agregar link a GitHub Pages
- Enfocar descripción en carpetas activas: Go, Contenedores, IaC
- Nueva descripción del repo: `Personal learning roadmap — Cloud infra, Go, containers, IaC. Tracked weekly via GitHub Pages`

### repo: nvim
- Hacer privado. Sin más cambios.

### repo: otel
**Descripción a agregar:**
> Sistema de reservas tipo Airbnb — Angular + Supabase. Proyecto universitario

### repo: consultaGame
**Descripción a agregar:**
> Consulta de specs de hardware — Django + Supabase con DB de procesadores. Proyecto universitario (requiere ejecución local)

### Repo nuevo a crear: aws-networking-patterns
**Por qué:** gap más crítico del perfil — LinkedIn declara especialización en TGW, PrivateLink, VPC pero no hay ningún repo que lo demuestre.  
**Contenido sugerido:** Módulos Terraform para Transit Gateway, PrivateLink endpoints, VPC design patterns, diagramas de arquitectura.  
**Pin:** #4 cuando esté creado.

---

## Conexiones entre plataformas — pendiente de aplicar

### LinkedIn → GitHub
Editar perfil → Información de contacto → Agregar sitio web → `https://github.com/jufedev` → Tipo: Otro, Etiqueta: GitHub

### LinkedIn → Credly
Opción A (automático): Credly → badge → Share → "Add to LinkedIn Profile"  
Opción B (manual): LinkedIn → Agregar sección → Licencias y certificaciones → URL de credencial = URL del badge en Credly (`credly.com/badges/[id]`)

### GitHub README → Credly
Credly → badge → Share → Copy Badge Image URL → agregar al README:
```markdown
[![OCI Foundations](https://images.credly.com/size/110x110/images/[badge-id].png)](https://www.credly.com/badges/[badge-id])
```

---

## Prioridades globales post-sesión

| # | Acción | Dónde | Impacto |
|---|--------|-------|---------|
| 1 | Aplicar cambios al Profile README de GitHub | GitHub | Alto |
| 2 | Subir README generado a AWS-Landing-Terraform | GitHub | Alto |
| 3 | Privatizar nvim | GitHub | Medio |
| 4 | Reestructurar repo roadmap | GitHub | Medio |
| 5 | Conectar LinkedIn ↔ GitHub ↔ Credly | Ambos | Medio |
| 6 | Preparar y obtener Terraform Associate | LinkedIn | Alto |
| 7 | Publicar primer post técnico en LinkedIn | LinkedIn | Alto |
| 8 | Crear repo aws-networking-patterns | GitHub | Alto |
| 9 | Pedir 2 recomendaciones en LinkedIn | LinkedIn | Medio |
| 10 | Agregar cover photo en LinkedIn | LinkedIn | Bajo |
