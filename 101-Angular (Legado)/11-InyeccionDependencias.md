- Por medio de servicios se inyectan las dependencias

- Inyeccion por medio de metodos

  - ```JavaScript
    @Component
    export class Componente{
      variable = inject(servicio)
      variable.metodo
    }
    ```

- Inyeccion por medio del constructor

  - ```JavaScript
    constructor(private variable: tipo) {
      variable.metodo
    }

    ```

- _El tipo no es un tipo de dato, es el servicio que se pasa como tipo_
