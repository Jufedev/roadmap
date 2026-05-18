# ¿Que es un Docker File?

- Es un archivo que contiene las instrucciones para crear una imagen.

# Ejemplo con Go

- Archivo Dockerfile multi-stage.

```Docker
# ------ STAGE: build ------
FROM golang:1.21-alpine AS build

# Variables de build
ARG BUILD_ENV=production
ENV CGO_ENABLED=0 \
    GO111MODULE=on

WORKDIR /src

# Copiamos solo mod files primero para aprovechar cache de docker
COPY go.mod go.sum ./
RUN go mod download

# Copiamos el resto del código
COPY . .

# Construimos un binario optimizado y pequeño
RUN go build -ldflags="-s -w" -o /app/main ./cmd/server

# ------ STAGE: final ------
FROM alpine:3.18

# Crear usuario no-root
RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

# Copiamos el binario desde la etapa de build
COPY --from=build /app/main .

# Puerto expuesto
EXPOSE 8080

# Usar usuario no-root
USER app

# Entrypoint
ENTRYPOINT ["/app/main"]

```

- Ejecutamos el comando para crear la imagen

```sh
docker image build -t my-go-web:1.0.0 -f Dockerfile .
```
