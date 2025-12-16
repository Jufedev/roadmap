# GitHub Actions

  - Plataforma de integracion y despliegue continuo (CI/CD).

  - Automatiza proceso de compilacion, pruebas y despliegue.

  - Procesos que corren en servidor.

# Términos usados

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

  - 
