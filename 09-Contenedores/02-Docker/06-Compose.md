- Escribir comandos facilmente, especialmente cuando se va a trabajar con redes

- Crear docker-compose.yml

### Ejemplo de YAML (docker-compose.yml)

```yml
version: “3.9”
services:
	app:
    dockerfile: .src/Dockerfile
		build: .
		restart: always
		ports:
			- “3000:3000”
    environment:
      ConnectionStrings_DbConnection: Server=....
		links:
			- “mondb”
	mondb:
		image: mongo
		ports:
			- “27017:27017”
		environment:
			- MONGO_INITDB_ROOT_USERNAME=user
			- MONGO_INITDB_ROOT_PASSWORD=password
		volumes: # Define los volumenes que este contenedor usa
			- mongo-data: /data/db
			- mysql-data: /var/lib/mysql
			- postgres-data: /var/lib/postgresql/data

volumes: # Definir todos los volumenes
	mongo-data:
```
