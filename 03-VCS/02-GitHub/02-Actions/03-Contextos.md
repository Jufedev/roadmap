# Contextos Principales

- Contexto **github**

```yaml
steps:
  - name: Mostrar información del contexto github
    run: |
      echo "Evento que activó: ${{ github.event_name }}" # push, pull_request, workflow_dispatch, etc.
      
      echo "Ref: ${{ github.ref }}" # Ej: refs/heads/main o refs/tags/v1.0.0
      
      echo "Nombre de ref (sin refs/): ${{ github.ref_name }}" # Ej: main
      
      echo "SHA del commit: ${{ github.sha }}" # Hash del commit asociado al run
      
      echo "Usuario que activó: ${{ github.actor }}" # Ej: owner
      
      echo "Repositorio: ${{ github.repository }}"  # Ej: owner/repo-name
      
      echo "URL del repositorio: ${{ github.server_url }}/${{ github.repository }}"
      
      echo "Workflow: ${{ github.workflow }}" # Nombre del workflow
      
      echo "Run ID: ${{ github.run_id }}" # ID de ejecución

```

- Contexto **env**

```yaml
env:
  MI_VARIABLE: "valor_estatico"  # Variable estática definida en el workflow
  VARIABLE_DINAMICA: ${{ github.sha }}  # Variable con expresión (se evalúa en runtime)

steps:
  - name: Usar contexto env
    run: |
      echo "Variable estática: ${{ env.MI_VARIABLE }}"  # Accede a variable definida arriba
      
      echo "Variable dinámica: ${{ env.VARIABLE_DINAMICA }}"  # Valor evaluado (SHA)
      
      echo "Variable del sistema: ${{ env.GITHUB_TOKEN }}"  # Variables predefinidas como PATH, etc.
```

- Contexto **secrets**

    - Nota: Los secrets son sensibles y GitHub los enmascara automáticamente en los logs

```yaml
steps:
  - name: Usar secrets
    run: |
      echo "Token secreto: ${{ secrets.MI_TOKEN }}"  # Accede a un secret del repositorio (nunca se muestra en logs)
      
      echo "Token de GitHub: ${{ secrets.GITHUB_TOKEN }}"  # Token predefinido para operaciones en el repo
```

- Contexto **runner**

```yaml
steps:
  - name: Información del runner
    run: |
      echo "Sistema operativo: ${{ runner.os }}"  # Ej: Linux, Windows, macOS
      
      echo "Arquitectura: ${{ runner.arch }}"  # Ej: X64, ARM64
      
      echo "Nombre del runner: ${{ runner.name }}"  # Nombre asignado al runner (GitHub-hosted o self-hosted)
      
      echo "Directorio temporal: ${{ runner.temp }}"  # Ruta al directorio temporal
      
      echo "Directorio de trabajo: ${{ runner.workspace }}"  # Ruta donde está el código clonado
```

- Contexto **steps**

```yaml
steps:
  - id: generar_saludo  # ID obligatorio para referenciar outputs
    run: echo "saludo=Hola ${{ github.actor }} desde ${{ runner.os }}" >> $GITHUB_OUTPUT

  - name: Usar output de un step anterior
    run: |
      echo "Output del step anterior: ${{ steps.generar_saludo.outputs.saludo }}"  # Accede al output definido
      
      echo "Contexto completo del step: ${{ toJSON(steps.generar_saludo) }}"  # Útil para debug
```

- Contexto **job**

    - Nota: job.status solo está disponible en steps de post-ejecución o con 'always()'

```yaml
jobs:
  ejemplo:
    runs-on: ubuntu-latest
    steps:
      - name: Estado del job
        run: |
          echo "Status del job: ${{ job.status }}"  # Ej: success, failure, cancelled (disponible al final)
```

- Contexto **inputs** (para workflow_dispatch o reusable workflows)

```yaml
on:
  workflow_dispatch:
    inputs:
      entorno:
        description: 'Entorno de despliegue'
        required: true
        type: choice
        options: [dev, prod]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Usar input
        run: echo "Desplegando en: ${{ inputs.entorno }}"  # Accede al valor proporcionado manualmente
```