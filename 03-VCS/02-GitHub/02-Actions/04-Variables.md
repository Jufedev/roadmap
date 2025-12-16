# Variables

- Las variables solo almacenan datos de configuracion pero no contraseñas o informacion sensible. 

- Las variables (datos no sensibles) en repositorio se acceden con ${{ vars.* }}. 

- Los secretos en repositorio se acceden con ${{ secrets.* }}.

```yaml
name: Saludo usando variables

run-name: ¡Estoy aprendiendo a usar Variables!

on:
  workflow_dispatch

env:
  DIA_DE_SEMANA: Lunes

jobs:
  saludo-variables:
    runs-on: ubuntu-latest
    
    env:
      SALUDO: Hola
    
    steps:
      - name: Saludar
      run: echo "$SALUDO, $NOMBRE, ${{ vars.APELLIDO }}. Hoy es $DIA_DE_SEMANA."
        
      env:
        NOMBRE: Juan
```