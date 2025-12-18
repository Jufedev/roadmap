```SQL
-- Variables
DECLARE @idPaciente int = 7
DECLARE @idTurno int

-- Condicionales
IF @idPaciente = 5
BEGIN
	SET @idTurno = 0
	SELECT * FROM Paciente WHERE idPaciente = @idPaciente
END
ELSE
BEGIN
	PRINT 'No se encontro el resultado'
END

IF EXISTS(SELECT * FROM Paciente WHERE idPaciente=@idPaciente)
BEGIN
	SET @idTurno = 0
	PRINT @idTurno
END


DECLARE @valor int = 20
DECLARE @resultado CHAR(10) = ''

SET @resultado = (CASE
	WHEN @valor = 10 THEN 'Rojo'
	WHEN @valor = 20 THEN 'Verde'
	WHEN @valor = 20 THEN 'Azul'
END)

PRINT @resultado

-- Bucles
DECLARE @contador int = 0

WHILE @contador <= 10
BEGIN
	SET @contador += 1
	PRINT 'Items Numero ' + CONVERT(varchar, @contador)
  IF @contador = 5
    BREAK
  IF @contador = 8
    RETURN
END

-- Excepciones
BEGIN TRY
END TRY

BEGIN CATCH
END CATCH


DECLARE @i INT = 1
WHILE @i <= (SELECT COUNT(*) FROM Pacientes)
	SET @i += 1
PRINT 'Cantidad de pacientes: ' + CONVERT(varchar, @i)



IF() <> 8 -- Operador distinto de
```
