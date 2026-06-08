# [entraid] — [Servicio de Microsoft Entra ID]

> **Dominio:** Azure
> **Relacionado con:** none

---

## Qué es y por qué importa

Es el servicio de identidad en la nube de Azure, antes conocido como Azure active directory. Esta orientado a aplicaciones web y servicios cloud (A diferencia de Active Directory Domain Services que se orienta en el on-premise). Provee SSO, usuarios, grupos, federacion, autenticacion multi-factor, entre otras capacidades de gestion de identidad en entornos modernos (por sus protocolos en integraciones como REST u OIDC).

Por defecto cada suscripcion de Azure tiene un directorio llamado Default.

---

## Cómo funciona

Entra ID centraliza la idendidad en un unico tenant. Un tenant de Microsoft Entra puede ser asociado a varias suscripciones de Azure.

A traves de Microsoft Entra Connect se hace una sincronizacion del on-prem con cloud.

### [Tenant]

Se refiere a una instancia de Microsoft Entra ID que pertenece a una empresa. Es la unidad fundamental.


### [Multi-tenant]

Se refiere a que un tenant puede tomar otros tenants como origen y "fusionar" todos los usuarios en un solo tenant. Esto permite que cada empresa tenga su propia identidad pero bajo un tenant unificado.


---

## Cuándo usar qué — comparativas

| | AD DS | Entra ID |
|--|----------|----------|
| Cuándo usar | Entornos on-premise. Se necesitan GPOs. Recursos compartivos (archivos/impresion). Apps legacy que necesitan kerberos/LDAP. | Entornos Cloud native. Autenticacion moderna (OIDC/SAML). |
| Trade-off principal | IaaS | PaaS |
| Limitación clave | Diseñado para red local. | Estructura plana (grupos y usuarios creados en la misma raiz) y no puede "unir al dominio". |

### Licencias

| | P1 | P2 |
|--|----------|----------|
| Cuándo usar | Entornos sin mucho complience ni estructuras de empresa complejas. | Entornos de muchas cuentas admin y Zero Trust. |
| Trade-off principal | Menor costo a cambio de reglas manuales sin respuesta automatica a riesgos. | Mayor costo a cambio de proteccion adaptativa y automatizacion de gobernanza. |
| Limitación clave | No tiene preteccion de identidad, ni access reviews. | Enfoque en la capa de autenticacion. |

---

## Gotchas y errores frecuentes

- **vs AD DS:** Entra no tiene la clase OU y varios atributos. Entra usa REST en ves de LDAP. Entra no usa kerberos, usa SAML, OpenID o WS-federation. 

---

## Fuentes y referencias

- [MSFT Learn](https://learn.microsoft.com/en-us/training/modules/understand-azure-active-directory/) — [Entendiendo Entra ID]
