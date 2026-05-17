# GitHub Actions

  - Plataforma de integracion y despliegue continuo (CI/CD).

  - Automatiza proceso de compilacion, pruebas y despliegue.

  - Procesos que corren en servidor.

# Terminos usados

- **Runner:**

  - Servidor o maquina donde se corren los pasos.

  - Puede ejecutar un Job a la vez.

  - Se puede usar y configurar servidorios propios con otros S.Os.

- **Event:**

  - Accion o trigger que va a lanzar el flujo de CI/CD (workflow).

  - Puede originarse desde eventos de GitHub (push, merge, etc) o API Rest.

- **Workflow:**

  - Proceso automatizado configurable que ejecutara uno o mas jobs.

  - Se define mediante un archivo YAML en el directorio `.github/workflows` del repo.

  - Un repo puede tener 1 o mas workflows.

- **Job:**

  - Conjunto de tareas (steps) que se ejecutan.

  - Los steps se ejecutan en orden y seran dependientes uno del otro.

  - Si se ejecutan en el mismo runner se pueden compartir datos de un step a otro.

- **Step:**

  - Pueden ser instrucciones de consola, scripts de shell o un Action.

- **Action:**

  - Aplicacion personalizada que realiza una tarea repetitiva.

  - Se pueden usar Actions en el GitHub Marketplace.


# Pricing

- Para repositorios publicos, es gratuito si se usan runners estandar o runners autohospedados.

- Para repositorios privados, GitHub ofrece minutos (tiempo que los runners utilizan para ejecutar workflows) y almacenamiento (espacio ocupado por los logs y artefactos (archivos o compilaciones generados durante una ejecucion)) dependiendo del plan que se posea.


| **Plan** | **Almacenamiento** | **Minutos (por mes)** |
|---|---|---|
| GitHub Free | 500 MB | 2,000 |
| GitHub Pro | 1 GB | 3,000 |
| GitHub Free para organizaciones | 500 MB | 2,000 |
| GitHub Team | 2 GB | 3,000 |
| GitHub Enterprise Cloud | 50 GB | 50,000 |

- Los minutos se restablecen cada mes pero el uso del almacenamiento no.

- Consumos de minutos:
  - Linux: 1x (consumo estandar)
  - Windows: 2x (doble del consumo en Linux)
  - macOS: 10x (diez veces el consumo en Linux)

- Tarifas por minuto estandar:

  | **Sistema Operativo** | **Tasa por minuto (USD)** |
  |---|---:|
  | Linux 2 nucleos | 0,008 USD |
  | Windows 2 nucleos | 0,016 USD |
  | macOS 3 o 4 nucleos (M1 o Intel) | 0,08 USD |

- Tarifas por minuto grandes:

  | **Sistema Operativo** | **Tasa por minuto (arquitectura x64)** | **Tasa por minuto (arquitectura arm)** |
  |---|---:|---:|
  | Linux 2 nucleos | $0,008 USD | $0,005 USD |
  | Linux 4 nucleos | $0.016 USD | $0,01 USD |
  | Linux 8 nucleos | $0,032 USD | $0,02 USD |
  | Linux 16 nucleos | $0,064 USD | $0,04 USD |
  | Linux 32 nucleos | $0,128 USD | $0,08 USD |
  | Linux 64 nucleos | $0,256 USD | $0,16 USD |
  | Windows 2 nucleos | N/A | $0,01 USD |
  | Windows 4 nucleos | $0,032 USD | $0,02 USD |
  | Windows 8 nucleos | $0,064 USD | $0,04 USD |
  | Windows 16 nucleos | $0,128 USD | $0,08 USD |
  | Windows 32 nucleos | $0,256 USD | $0,16 USD |
  | Windows 64 nucleos | $0,512 USD | $0,32 USD |
  | macOS 6 nucleos (M1) | N/A | $0,16 USD |
  | macOS 12 nucleos | $0,12 USD | N/A |

- Tarifas por minuto grandes con GPU:

  | **Sistema Operativo** | **Tasa por minuto** |
  |---|---:|
  | Linux 4 nucleos	| $0,07 USD |
  | Windows 4 nucleos | $0,14 USD |

- Limite de jobs para runners standar:

  | **Plan de GitHub** | **Jobs simultaneos totales** | **Jobs simultaneos de macOS maximos** |
  |---|---:|---:|
  | Gratuito | 20 | 5 |
  | Pro | 40 | 5 |
  | Team | 60 | 5 |
  | Enterprise | 500 | 50 |

- Limite de jobs para runners grandes:

  | **Plan de GitHub** | **Jobs simultaneos totales** | **Jobs simultaneos de macOS maximos** | **Numero maximo de trabajos simultaneos de GPU** |
  |---|---:|---:|---:|
  | Team | 1000 | 5 | 100 |
  | Enterprise | 1000 | 50 | 100 |


# Partes de un GitHub Action

```yaml
name: Ejemplo Completo de CI/CD para Go # Identificar el workflow

on: # Define los triggers que activan el workflow
  push:
    branches:
      - main  # Se activa en push a main
  pull_request:
    branches:
      - main  # Se activa en PRs a main

permissions: # Permisos que necesita el workflow. Por defecto, tiene permisos de lectura
  contents: read  # Permiso de lectura para el codigo
  issues: read    # Si interactuas con issues
  pull-requests: write  # Para comentar en PRs, por ejemplo

env: # Variables de entorno globales
  GO_VERSION: '1.22'  # Version de Go a usar
  APP_NAME: ${{ github.repository }}  # Usa el nombre del repositorio dinamicamente

jobs: # Trabajos paralelos o secuenciales (runners separados)
  build-and-test: # Nombre del job
    runs-on: ubuntu-latest # Tipo de runner (ubuntu-latest, windows-latest, macos-latest, o self-hosted)

    if: ${{ !github.event.pull_request.draft }}  # Condicional para ejecutar el job

    strategy: # Ejecutar el job en multiples configuraciones (matrix) (testing cross-platform o multi-version)
      matrix:
        go-version: [1.21, 1.22] # Corre el job para Go 1.21 y 1.22
        os: [ubuntu-latest] # Solo Ubuntu

    env: # Variables especificas para este job
      TEST_ENV: 'ci' # Variable para entorno de tests

    steps: # Lista de pasos secuenciales en el job
      # Paso 1: Nombre descriptivo. 'uses' para acciones de marketplace.
      - name: Checkout del codigo
        uses: actions/checkout@v4  # Accion oficial para clonar el repo
        with:  # Parametros opcionales para la accion
          fetch-depth: 0  # Clona todo el historial (0 = full)

      # Paso 2: Setup de entorno, como instalar Go.
      - name: Instalar Go ${{ matrix.go-version }}
        uses: actions/setup-go@v5  # Accion oficial para setup Go
        with:
          go-version: ${{ matrix.go-version }}  # Usa valor de matrix
          cache: true  # Cachea modulos para velocidad (usa go.sum y go.mod)

      # Paso 3: Instalar dependencias. Para Go, usa 'go mod' para descargar modulos.
      - name: Instalar dependencias
        run: go mod download  # Descarga dependencias basadas en go.mod

      # Paso 4: Ejecutar linter o checks de codigo. Usa golangci-lint como ejemplo.
      - name: Ejecutar lint
        uses: golangci/golangci-lint-action@v6  # Accion para linting en Go
        with:
          version: latest  # Version del linter

      # Paso 5: Ejecutar tests con condicional.
      - name: Ejecutar tests
        if: ${{ always() }}  # Ejecuta siempre, incluso si previos fallan (para reportes)
        run: go test -v ./...  # Ejecuta tests en todos los paquetes (-v para verbose)
        env:  # variables solo para este paso
          CI: true  # Variable para modo CI en tests

      # Paso 6: Construir la app/binario.
      - name: Construir la app
        run: go build -v ./...  # Construye todos los paquetes (-v para verbose)

      # Paso 7: Subir artifact para uso en otros jobs o downloads.
      - name: Subir binario como artifact
        uses: actions/upload-artifact@v4
        with:
          name: go-app  # Nombre del artifact
          path: ./myapp  # Ruta al binario construido 

  # Otro job: 'deploy'. Depende del job anterior via 'needs'.
  deploy:
    needs: build-and-test  # Espera a que build-and-test termine con exito
    runs-on: ubuntu-latest
    if: ${{ github.ref == 'refs/heads/main' && github.event_name == 'push' }}  # Solo en push a main

    steps:
      - name: Checkout del codigo
        uses: actions/checkout@v4

      - name: Instalar Go
        uses: actions/setup-go@v5
        with:
          go-version: ${{ env.GO_VERSION }}

      - name: Descargar artifact
        uses: actions/download-artifact@v4
        with:
          name: go-app  # Descarga el artifact subido antes
          path: ./

      - name: Desplegar a produccion
        run: |
          echo "Desplegando ${{ env.APP_NAME }} desde ${{ github.sha }}"
        env:
          DEPLOY_TARGET: 'production'
```