- Por medio de servicios se inyectan las dependencias

- Inyección por medio de métodos

  - ```JavaScript
    @Component
    export class Componente{
      variable = inject(servicio)
      variable.metodo
    }
    ```

- Inyección por medio del constructor

  - ```JavaScript
    constructor(private variable: tipo) {
      variable.metodo
    }

    ```

- _El tipo no es un tipo de dato, es el servicio que se pasa como tipo_
