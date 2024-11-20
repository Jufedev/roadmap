```SQL
-- Bases de datos
CREATE DATABASE Hospital;


-- Tablas
CREATE TABLE Paciente(
	idPaciente int NOT NULL,
	nombre varchar(50) NOT NULL,
	fNacimiento date NOT NULL,
	idPais char(3) NOT NULL,
	telefono varchar(20) NOT NULL,
	observacion varchar(1000) NOT NULL,
	CONSTRAINT PK_idPaciente PRIMARY KEY (idPaciente) -- constraint hace que se cree un nombre único para ese id
)

CREATE TABLE HistoriaPaciente(
	idHistoria int NOT NULL,
	idPaciente int NOT NULL,
	idMedico int NOT NULL,
	CONSTRAINT PK_idHistoriaPaciente PRIMARY KEY (idHistoria, idPaciente, idMedico) -- ID multivaluado
)

CREATE TABLE Pago(
	idPago int IDENTITY (1,1) NOT NULL, -- identity (empieza en, aumenta en)
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


-- Crear funciones escalares
CREATE FUNCTION funcionEjemplo(@variable int)
RETURNS int

AS

BEGIN
	SET @variable += 2
	RETURN @variable
END


SELECT dbo.funcionEjemplo(4) -- Invocar funciones escalares


-- Creare funciones tipo tabla
CREATE FUNCTION listaPaises()
RETURNS @paises TABLE(idPais CHAR(3), pais VARCHAR(50))
AS

BEGIN
	INSERT INTO @paises VALUES('ESP', 'España')

	RETURN
END


SELECT * FROM dbo.listaPaises() -- Invocar funciones tipo tabla


-- Tablas temporales (almacenadas en memoria (perdura en la ejecución de la querie))
DECLARE @tablaTemp TABLE (id INT IDENTITY(1,1), pais VARCHAR(50))


-- Tablas temporales físicas (almacenadas en disco (perdura en la ejecución del servicio))
-- Si se reinicia el servicio se elimina la tabla
CREATE TABLE #Paciente(
	idPaciente INT IDENTITY(1,1) NOT NULL,
	nombre varchar(50) NOT NULL,
	telefono varchar(20) NOT NULL,
)


-- Vistas (guardar consultas especificas)
-- En procesos grandes ayudan a ahorrar código (funciona como si fuera una tabla)
CREATE VIEW PacientesYTurnos AS

SELECT * FROM Paciente P
	INNER JOIN TurnoPaciente TP
	ON TP.idPaciente = P.idPaciente
	INNER JOIN Turno T
	ON T.idTurno = TP.idTurno
WHERE ISNULL(T.estado, 0) = 0


SELECT * FROM PacientesYTurnos -- Usar una vista


-- Roles
CREATE ROLE Pagos AUTHORIZATION dbo

ALTER ROLE Pagos ADD MEMBER pepe


-- Esquemas
ALTER SCHEMA Facturacion TRANSFER Medico

```
