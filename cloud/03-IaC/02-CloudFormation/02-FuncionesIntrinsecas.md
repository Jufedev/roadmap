# ¿Que son las funciones intrinseca?

- Funciones  que pueden usarse en plantillas para asignar valores a propiedades, outputs, atributos de metadata y atributos de politicas de actualizacion. 

- Estas funciones se evaluan en tiempo de ejecucion y no pueden usarse en todas las partes de una plantilla. 


## Fn::Base64

- Codifica una cadena en formato Base64.  
- Ejemplo:
    - ```yaml
      Fn::Base64: mi-cadena
      ```


## Fn::Cidr

- Genera un bloque CIDR a partir de una red base y un conteo.
- Ejemplo:
    - ```yaml
      Fn::Cidr: [ "10.0.0.0/24", 2 ]
      ```


## Funciones de Condicion

- Usadas para crear recursos de stack condicionalmente.
- Ejemplo:
    - ```yaml
      Condition: MiCondicion
      ```


## Fn::FindInMap

- Busca una clave en un map y retorna el valor correspondiente.
- Ejemplo:
    - ```yaml
      Fn::FindInMap: [ MiMap, Clave1, Valor1 ]
      ```


## Fn::ForEach

- Itera sobre una lista para crear patrones repetibles.
- Ejemplo:
    - ```yaml
      Fn::ForEach: [ "Item", [ "A", "B" ], { ... } ]
      ```


## Fn::GetAtt

- Recupera el valor de un atributo de un recurso.
- Ejemplo:
    - ```yaml
      Fn::GetAtt: [ MiRecurso, Atributo ]
      ```


## Fn::GetAZs

- Retorna una lista de Zonas de Disponibilidad para una region.
- Ejemplo:
    - ```yaml
      Fn::GetAZs: us-east-1
      ```


## Fn::ImportValue

- Importa un valor de otro stack.
- Ejemplo:
    - ```yaml
      Fn::ImportValue: valor-exportado
      ```


## Fn::Join

- Une un array de cadenas con un delimitador.
- Ejemplo:
    - ```yaml
      Fn::Join: [ "-", [ "prefijo", "sufijo" ] ]
      ```


## Fn::Length

- Retorna la longitud de una cadena o lista.
- Ejemplo:
    - ```yaml
      Fn::Length: mi-lista
      ```


## Fn::Select

- Selecciona un objeto de una lista por indice.
- Ejemplo:
    - ```yaml
      Fn::Select: [ 0, [ "item1", "item2" ] ]
      ```


## Fn::Split

- Divide una cadena en una lista usando un delimitador.
- Ejemplo:
    - ```yaml
      Fn::Split: [ "-", "a-b-c" ]
      ```


## Fn::Sub

- Sustituye variables en una cadena.
- Ejemplo:
    - ```yaml
      Fn::Sub: "Hola ${Nombre}"
      ```


## Fn::ToJsonString

- Convierte un valor a una cadena JSON.
- Ejemplo:
    - ```yaml
      Fn::ToJsonString: mi-objeto
      ```


## Fn::Transform

- Invoca una plantilla de transformacion.
- Ejemplo:
    - ```yaml
      Fn::Transform: { ... }
      ```


## Ref

- Referencia un recurso o parametro.
- Ejemplo:
    - ```yaml
      Ref: MiRecurso
      ```


## Funciones de Rule

- Usadas para definir reglas de validacion en plantillas.
- Ejemplo:
    - ```yaml
      Rule: CondicionDeRegla
      ```
