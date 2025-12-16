# Expresiones principales

- Sintaxis Básica
    
    - Nota: Las expresiones usan ${{ }} y se evalúan en runtime, accediendo a contextos como 'github.actor'

```yaml
steps:
  - run: echo "Hola, ${{ github.actor }}"  # Imprime "Hola, [nombre de usuario que activó el workflow]"
```

- Funciones Comunes

```yaml
steps:
  - name: Usar funciones
    run: |
      echo "Contiene 'bug': ${{ contains(github.event.issue.labels.*.name, 'bug') }}"  # Función contains: Verifica en array o string
      
      echo "Inicia con 'releases/': ${{ startsWith(github.ref, 'refs/heads/releases/') }}"  # startsWith: Para inicios de strings
      
      echo "Formato: ${{ format('Hola {0} en {1}', github.actor, github.repository) }}"  # format: Inserta valores en string
      
      echo "Unir labels: ${{ join(github.event.issue.labels.*.name, ', ') }}"  # join: Une array en string
      
      echo "JSON: ${{ toJSON(github.event) }}"  # toJSON: Convierte objeto a JSON para debug
      
      echo "Hash archivos: ${{ hashFiles('**/package-lock.json') }}"  # hashFiles: Para caching basado en archivos
```

- Uso en Condicionales (if) y Operadores

```yaml
steps:
  - name: Operadores lógicos
    if: ${{ github.event_name == 'push' && github.ref == 'refs/heads/main' }}  # == para comparación, && para AND
    run: echo "Push en main"
  
  - name: Más operadores
    if: ${{ github.event.pull_request.changed_files > 5 || !contains(github.event.head_commit.message, 'docs') }}  # > para mayor, || para OR, ! para NOT
    run: echo "Más de 5 archivos cambiados o no contiene 'docs'"
```


```yaml
jobs:
  test:
    if: ${{ github.event_name == 'pull_request' }}  # Condicional en job: Solo ejecuta si es pull request
    runs-on: ubuntu-latest
    steps:
      - if: ${{ runner.os == 'Linux' && success() }}  # Condicional en step: Verifica OS y éxito previo
        run: echo "Ejecutando en Linux después de éxito"
      - if: ${{ always() }}  # always(): Ejecuta siempre, útil para cleanup
        run: echo "Siempre se ejecuta"
```

- Outputs y Reutilización

```yaml
steps:
  - id: mi_paso  # ID requerido para referenciar outputs
    run: echo "output_var=valor_dinamico_${{ github.sha }}" >> $GITHUB_OUTPUT  # Setea output con expresión (e.g., incluye SHA)
  
  - run: echo "Valor del output: ${{ steps.mi_paso.outputs.output_var }}"  # Usa contexto 'steps' para acceder al output
```