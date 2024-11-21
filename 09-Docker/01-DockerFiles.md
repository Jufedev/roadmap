# ¿Que es un Docker File?

- Es un archivo que contiene las instrucciones para crear una imagen.

# Ejemplo con .NET 8

- Archivo Dockerfile

```Docker
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["src/BookStore.WebApi/BookStore.WebApi.csproj", "src/BookStore.WebApi/"]
COPY ["src/BookStore.Domain/BookStore.Domain.csproj", "src/BookStore.Domain/"]
COPY ["src/BookStore.Infrastructure/BookStore.Infrastructure.csproj", "src/BookStore.Infrastructure/"]
RUN dotnet restore "./src/BookStore.WebApi/./BookStore.WebApi.csproj"
COPY . .
WORKDIR "/src/src/BookStore.WebApi"
RUN dotnet build "./BookStore.WebApi.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./BookStore.WebApi.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BookStore.WebApi.dll"]
```

- Ejecutamos el comando para crear la imagen

```sh
docker image build -t web:1.0.0 -f "Dockerfile" .
```
