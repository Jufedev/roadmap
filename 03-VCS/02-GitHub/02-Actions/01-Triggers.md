# Triggers principales

- Push

```yaml
on:
  push:
    branches:  # Filtra por ramas especificas
      - 'main'  # Se activara si se hace push en la rama main
      - 'releases/**'  # O en ramas que comiencen con 'releases/' (usa '**' para patrones wildcard)
    tags:  # Opcional: Filtra por tags (etiquetas) en lugar de ramas
      - 'v*.*.*'  # Ejemplo: Se activa para tags como v1.0.0
    paths:  # Opcional: Filtra por cambios en rutas especificas de archivos
      - '**.js'  # Todos los archivos .js en el repositorio
      - 'src/**'  # Todos los archivos en la carpeta src y subcarpetas
    paths-ignore:  # Opcional: Ignora cambios en estas rutas
      - 'docs/**'  # No se activa si solo cambian archivos en docs
```

- Pull Request

```yaml
on:
  pull_request:
    types:  # Opcional: Especifica tipos de eventos de PR (por defecto: opened, synchronize, reopened)
      - opened  # Se activa cuando se crea un nuevo PR
      - synchronize  # Cuando se actualiza el PR (nuevo push al branch fuente)
      - closed  # Cuando se cierra o mergea el PR
      - labeled  # Cuando se añade una etiqueta al PR
    branches:  # Filtra por la rama destino (target branch) del PR
      - 'main'  # Solo PRs dirigidos a main
      - 'develop'  # O a develop
    paths:  # Opcional: Filtra por cambios en rutas de archivos en el PR
      - '**.py'  # Archivos Python
    paths-ignore:  # Opcional: Ignora PRs con cambios solo en estas rutas
      - 'README.md'  # No se activa si solo cambia el README
```

- Issues

```yaml
on:
  issues:
    types:  # Opcional: Especifica tipos de eventos de issues (por defecto: opened)
      - opened  # Se activa cuando se crea un nuevo issue
      - closed  # Cuando se cierra un issue
      - labeled  # Cuando se añade una etiqueta (puedes filtrar etiquetas especificas)
      - commented  # Cuando se añade un comentario
      - assigned  # Cuando se asigna a alguien
```


- Schedule

    - Nota: Los workflows programados se ejecutan en la rama predeterminada (usualmente main) y no tienen acceso a eventos como push.

```yaml
on:
  schedule:
    - cron: '0 0 * * *'  # Se ejecuta cada dia a medianoche (UTC)
      # Sintaxis cron: minuto hora dia-mes mes dia-semana
      # Ejemplos:
      # '*/15 * * * *' -> Cada 15 minutos
      # '0 9 * * 1-5' -> A las 9 AM de lunes a viernes
    - cron: '30 5,17 * * *'  # Multiples horarios: 5:30 AM y 5:30 PM cada dia
```

- Workflow Dispatch

    - Nota: Una vez definido, puedes dispararlo desde GitHub UI seleccionando el workflow y proporcionando los inputs.

```yaml
on:
  workflow_dispatch:
    inputs:  # Opcional: Parametros que el usuario puede ingresar al disparar manualmente
      name:  # Nombre del input
        description: 'Nombre de la persona'  # Descripcion visible en la UI
        required: true  # Obligatorio
        default: 'Anonimo'  # Valor por defecto
      environment:  # Otro input de ejemplo
        description: 'Entorno (dev/prod)'
        required: false  # Opcional
        type: choice  # Tipo: choice para dropdown
        options:
          - dev
          - prod
```