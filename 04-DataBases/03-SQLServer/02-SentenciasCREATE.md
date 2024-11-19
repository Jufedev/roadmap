```SQL
CREATE DATABASE Hospital;

-- constraint hace que se cree un nombre único para ese id
CREATE TABLE Paciente(
	idPaciente int NOT NULL,
	nombre varchar(50) NOT NULL,
	fNacimiento date NOT NULL,
	idPais char(3) NOT NULL,
	telefono varchar(20) NOT NULL,
	observacion varchar(1000) NOT NULL,
	CONSTRAINT PK_idPaciente PRIMARY KEY (idPaciente)
)

-- ID multivaluado
CREATE TABLE HistoriaPaciente(
	idHistoria int NOT NULL,
	idPaciente int NOT NULL,
	idMedico int NOT NULL,
	CONSTRAINT PK_idHistoriaPaciente PRIMARY KEY (idHistoria, idPaciente, idMedico)
)

-- identity (empieza en, aumenta en)
CREATE TABLE Pago(
	idPago int IDENTITY (1,1) NOT NULL,
	concepto tinyint NOT NULL,
	fechaPago datetime NOT NULL,
	monto money NOT NULL,
	estado tinyint NULL,
	observacion varchar(1000) NULL,
	CONSTRAINT PK_idPago PRIMARY KEY (idPago)
)

-- Eliminar tabla o base de datos
DROP TABLE Ejemplo -- DROP DATABASE Ejemplo

-- Limpiar una tabla
TRUNCATE TABLE Ejemplo

-- Crear tipos de datos
CREATE TYPE medico FROM int NOT NULL


-- Crear procedimientos almacenados (Stored Procedure)
SET ANSI_NULLS ON -- No muestra los valores nulos
GO
SET QUOTED_IDENTIFIER ON -- Permite palabras reservadas solo si se colocan entre comillas
GO
CREATE PROC SP_ejemplo(
	@id int
)
AS

SELECT * FROM Paciente WHERE idPaciente = @id

GO


EXEC SP_ejemplo 1 -- Ejecutar el stored procedure

-- Variables
DECLARE @ordenamiento CHAR(1) = 'A'
DECLARE @otraVariable CHAR(1)
SET @otraVariable = ISNULL(@ordenamiento, 'Valor nulo')

PRINT @ordenamiento


-- Ejemplo de SP para simplificar la creación de un Paciente (se debería comprobar el DNI con un parámetro)
-- Colocar la precision de los VARCHAR o si no solo tomara el primer carácter
ALTER PROC SP_InsertPaciente(
	@nombre VARCHAR,
	@apellido VARCHAR,
	@fNacimiento DATETIME,
	@domicilio VARCHAR,
	@idPais CHAR(3),
	@telefono VARCHAR,
	@email VARCHAR,
	@observacion VARCHAR
)
AS

DECLARE @DNI int = 0

IF NOT EXISTS(SELECT * FROM Paciente WHERE idPaciente=@DNI)
BEGIN
	INSERT INTO Paciente VALUES (@nombre,@apellido,@fNacimiento,@domicilio,@idPais,@telefono,@email,@observacion)
END
ELSE
BEGIN
	PRINT 'El paciente ya existe'
	RETURN
END

GO

-- Mostrar detalles de la tabla o del SP
sp_help Paciente

-- Ver contendido del SP
sp-helptext SP_InsertarPaciente


-- Crear funciones
CREATE FUNCTION funcionEjemplo(@variable int)
RETURNS int

AS

BEGIN
	SET @variable += 2
	RETURN @variable
END


SELECT dbo.funcionEjemplo(4) -- Invocar funciones
```
