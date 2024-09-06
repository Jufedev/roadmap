- Instalar tailwind

  - `pnpm install -D tailwindcss postcss autoprefixer`

- Inicializar el archivo de configuración de tailwind

  - `pnpm dlx tailwindcss init`

- En el archivo "styles.css" colocar

  - ```CSS
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

- Escribir el estilo en la propiedad "class" de la etiqueta
