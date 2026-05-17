### Aclaracion

- Como la sintaxis y muchas cosas se comparten con C# solo colocare cosas de JS (y una que otra compartida)

## Miselaneo

- JSON (JavaScript Object Notation)

  - Datos escritos en forma de objetos
  - VAR2 = JSON.stringify(VAR)
    - Serializar un json
  - VAR2 = JSON.parse(VAR)
    - Deserializar un json

- alert()

  - Muestra una alerta en pantalla

- prompt()

  - muestra una alerta en pantalla y permite al usuario digitar

- Number()

  - De str a int

- document.write()

  - Escribir en el DOM

- let

  - La mejor forma de declarar una variable (se manejan los scopes)

- const NOMBRE = { ...OBJETO }

  - Clonar de manera correcta un objeto

- condicion ? expr1 : expr2

  - Sintaxis simplificada del if
  - Usar solo en codigos cortos

- for(VAR2 in VAR){}

  - Devuelve la posicion del elemento en el array

- for(VAR2 of VAR){}

  - Devuelve el valor del elemento en el array
  - Podemos usar break, continue, etc

- ARRAY.forEach(VAR => FUNCION)

  - Hace que la funcion se ejecute con cada valor del iterable
  - No podemos usar break, continue, etc

- ARRAY.map(PARAM, INDEX => FUNCION)

  - Hace que la funcion se ejecute con cada valor del iterable
  - El indice es opcional
  - No podemos usar break, continue, etc

### Callbacks

```JavaScript

let numeros = [1, 2, 3, 4, 5];

function funcionPrincipal(callback) {
  numeros.forEach(callback);
}

function funcionCallback(number) {
  console.log("Numero: " + number);
}

funcionPrincipal(funcionCallback);
```

### Promesas

```JavaScript
const VARIABLE = new Promise((resolve, reject)=>{
  reject(VAL)   // Cuando hay un error
  resolve(VAL)	// Cuando sale como se espera
})

VARIABLE.then((PARAM)=>{		// Mostrar solo el resultado cuando todo sale bien
}).catch((e)=>{             // Mostrar el error sin que se ejecute como un error
})

/* En una sola linea */
PROMESA1.then((PARAM)=>{} return PROMESA2).then((PARAM)=> {}).catch()
```

### async / await

```JavaScript
async function VARIABLE(){
  VARIABLE2 = await function(PARAMETROS)
  VARIABLE3 = await function(PARAMETROS)
}


const VARIABLE = async () => {
  VARIABLE2 = await function(parametros)
}
```
