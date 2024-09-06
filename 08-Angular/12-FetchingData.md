- Para traernos datos de una API es necesario hacer el conocido "fetching" de datos

- En Angular se usa un servicio que haga la solicitud y luego comparta esos datos

  - Creamos un servicio

    - ```JavaScript
      @Injectable({

      providedIn: 'root',

      })

      export class NombreServicio {
        constructor(private http: HttpClient) {}

        funcion(): Observable<TIPO> {
            return this.http.get<TIPO>(ENDPOINT_API)
        }
      }
      ```

  - En el TS del componente

    - ```JavaScript
      constructor(private service: NombreServicio) {}

      public variable$!: Observable<TIPO>

      this.variable$ = this.service.funcion()
      ```

  - En el html del componente:

    - ```JavaScript
      @if (variable$ | async; as resultObject) {
        @for (item of resultObject.items; track item.id) {
        }
      }
      ```
