# EJEMPLO TEMPLATE


# systemd — gestión de servicios, targets y cgroups

> **Dominio:** Linux  
> **Relacionado con:** [`permisos-procesos-y-acls.md`](./permisos-procesos-y-acls.md) · [`bash-scripting.md`](./bash-scripting.md)

---

## Qué es y por qué importa

systemd es el sistema de init y gestor de servicios estándar en distribuciones Linux modernas (Ubuntu 16+, RHEL 7+, Debian 8+). Reemplazó a SysV init y Upstart. Su función central es arrancar el sistema operativo y gestionar el ciclo de vida de todos los procesos que corren en él — desde `sshd` hasta una app propia desplegada como servicio. En infraestructura cloud y on-prem, entender systemd es obligatorio para diagnosticar arranques fallidos, gestionar servicios en producción y aplicar límites de recursos sin contenedores.

---

## Cómo funciona

systemd arranca como PID 1 y es el padre de todos los procesos. Gestiona *units* — abstracciones que representan servicios, sockets, timers, puntos de montaje y más. Las units se definen en archivos `.service`, `.socket`, `.timer`, etc.

### Units y archivos de configuración

Cada servicio tiene un unit file en `/etc/systemd/system/` (custom) o `/lib/systemd/system/` (paquetes del sistema). Los del sistema no se editan directamente — se sobreescriben con `systemctl edit`.

```ini
[Unit]
Description=Mi servicio de ejemplo
After=network.target         # orden de arranque, no dependencia fuerte
Requires=postgresql.service  # dependencia fuerte: si falla postgres, falla este

[Service]
Type=simple
ExecStart=/usr/bin/mi-app --config /etc/mi-app/config.yaml
Restart=on-failure
RestartSec=5s
User=mi-usuario              # nunca correr como root si no es necesario

[Install]
WantedBy=multi-user.target
```

**En producción se ve así:** Los servicios de aplicación en ECS o EC2 gestionados fuera de Docker usan este patrón. Un `Restart=on-failure` con `RestartSec` evita reintentos en loop que saturen la máquina.

### Targets vs runlevels de SysV

Los targets son el equivalente moderno de los runlevels. No son números, son nombres con semántica clara.

| SysV runlevel | systemd target | Qué representa |
|---|---|---|
| 1 | `rescue.target` | Modo de recuperación, un solo usuario |
| 3 | `multi-user.target` | Sistema completo sin GUI (servidores) |
| 5 | `graphical.target` | Sistema completo con GUI |
| 6 | `reboot.target` | Reinicio |

La mayoría de servidores Linux apuntan a `multi-user.target` como default.

### journald — logging integrado

systemd captura stdout/stderr de todos los servicios automáticamente. Los logs se almacenan en formato binario en `/var/log/journal/`. Para acceder:

```bash
journalctl -u nombre-servicio -f          # follow en tiempo real
journalctl -u nombre-servicio --since "1 hour ago"
journalctl -u nombre-servicio --no-pager  # para pipes y scripts
journalctl --disk-usage                   # cuánto ocupa el journal
```

`--no-pager` es crítico en scripts: sin él, `journalctl` abre un pager interactivo que bloquea el pipe.

### cgroups y límites de recursos

systemd asigna cada servicio a su propio cgroup, lo que permite limitar CPU, memoria y I/O directamente en el unit file sin necesidad de contenedores.

```ini
[Service]
CPUQuota=300%      # 3 cores completos (100% = 1 core, independiente del total)
MemoryMax=512M
IOWeight=50        # peso relativo de I/O (default 100)
```

**Punto crítico sobre CPUQuota:** el 100% representa *un core*, no el total de la máquina. `CPUQuota=300%` en una máquina de 8 cores permite usar hasta 3 cores, no el 300% del total. Esto es consistente con cómo `top` y `htop` reportan uso por proceso.

---

## Cuándo usar qué — comparativas

| | `systemctl restart` | `systemctl reload` |
|--|---|---|
| Qué hace | Para el proceso y lo vuelve a iniciar | Envía SIGHUP — recarga config sin parar |
| Cuándo usar | Cambios en el unit file o binario | Cambios de configuración en caliente (nginx, sshd) |
| Riesgo | Corte breve del servicio | Sin corte, pero no todos los servicios lo soportan |

| | `systemctl disable` | `systemctl mask` |
|--|---|---|
| Qué hace | Quita el arranque automático | Crea un symlink a `/dev/null`, imposibilita el inicio |
| Se puede iniciar manualmente | Sí | No — falla con error explícito |
| Cuándo usar | Servicio que no quiero en arranque pero sí disponible | Servicio que jamás debe correr (ej: bluetoothd en servidores) |

---

## Referencia rápida — comandos

```bash
# Estado e inspección
systemctl status nombre-servicio
systemctl list-units --type=service --state=failed
systemctl list-dependencies nombre-servicio

# Ciclo de vida
systemctl start | stop | restart | reload nombre-servicio
systemctl enable | disable nombre-servicio  # activa/desactiva en arranque
systemctl mask | unmask nombre-servicio

# Editar unit files
systemctl edit nombre-servicio          # crea override.conf (recomendado)
systemctl edit --full nombre-servicio   # copia completa editable
systemctl daemon-reload                 # recargar definiciones después de editar

# Target actual y cambio
systemctl get-default
systemctl set-default multi-user.target
systemctl isolate rescue.target         # cambiar target en sesión activa

# Logs
journalctl -u nombre-servicio -n 50 --no-pager
journalctl -u nombre-servicio --since today
journalctl -p err -u nombre-servicio    # solo errores
```

---

## Gotchas y errores frecuentes

- **`After=` no es `Requires=`:** `After=network.target` solo define orden de arranque. Si `network.target` falla, el servicio intenta arrancar igual. Para dependencia real usar `Requires=` (fallo fuerte) o `Wants=` (fallo suave, sigue igual).

- **Editar el unit file del sistema directamente:** Los archivos en `/lib/systemd/system/` se sobreescriben al actualizar el paquete. Siempre usar `systemctl edit` que crea `/etc/systemd/system/nombre.service.d/override.conf`.

- **Olvidar `daemon-reload` después de editar:** systemd cachea los unit files. Sin `daemon-reload`, los cambios no tienen efecto aunque el archivo esté guardado. El error típico es ver la versión vieja del servicio corriendo.

- **`Type=simple` con procesos que hacen fork:** Si la app hace fork y el proceso padre termina, systemd cree que el servicio cayó. Usar `Type=forking` o, mejor, configurar la app para no forkear (modo foreground).

- **`CPUQuota` en porcentaje:** Ver sección cgroups arriba. `CPUQuota=100%` no es "toda la CPU" sino un core.

---

## Conexiones internas

- [`diagnostico-htop-strace-lsof.md`](./diagnostico-htop-strace-lsof.md) — `htop` muestra el árbol de procesos bajo PID 1 (systemd); `systemd-cgls` muestra la jerarquía de cgroups
- [`bash-scripting.md`](./bash-scripting.md) — scripts de monitoreo que usan `journalctl --no-pager` en pipes
- [`12-aws/compute-ec2-asg-elb.md`](../../12-aws/compute-ec2-asg-elb.md) — EC2 user data scripts que configuran servicios systemd en el arranque de la instancia

---

## Fuentes y referencias

- [systemd man pages](https://www.freedesktop.org/software/systemd/man/) — referencia oficial, buscar `systemd.service` y `systemd.exec`
- [ArchWiki — systemd](https://wiki.archlinux.org/title/Systemd) — la documentación más completa y mantenida fuera de la oficial
