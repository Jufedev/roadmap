- Entre mas crece la pagina mas secciones se necesita para tener un orden para esto se crean rutas

  - ```JavaScript
    export const routes:Routes = [
      {
        path: "",
        component: NombreComponente
      },
      {
        path: "ruta"
        component: Componente,
        title: "Nombre pag"
      },
      {
        path: 'ruta2/:id',
        component: NombreComponente,
      },
      {
        path: 'rat2/:ruta2id/ruta3/:ruta3id',
        component: NombreComponente,
      },
    ]

    ```

- Para redireccionar

  - `<a routerLink="/ruta">`

  - `<a [routerLink]="['/ruta2', prop.id]">` _pasar parámetros a la ruta_
