- Template driven form

  - `<input [(ngModel)]="prop" [ngModelOptions]="{standalone: true}">`

  - ```JavaScript
    export class Componente{
      prop = ""
    }
    ```

- Reactive form

  - ```JavaScript
    export class Componente{
      prop = new FormGroup ({
        variable: new FormControl("")
      })
    }
    ```

  - `<Form [FormGroup]="prop" >`

  - `<input FormControlName="variable">`

  - `prop.value.variable` _Acceder a los datos_
