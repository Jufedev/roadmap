```SQL

-- Seleccionar datos
SELECT * FROM Paciente
SELECT idPaciente,DNI,nombre FROM Paciente

SELECT * FROM Paciente ORDER BY DNI

SELECT TOP 3 * FROM Paciente DESC

SELECT * FROM Paciente WHERE idPais = 'ARG'

-- Selecciona unicamente los valores distintos, si hay repetidos solo los muestra 1 vez
SELECT DISTINCT idPais FROM Paciente

-- Funciona como DISTINCT pero podemos usar operaciones
SELECT idPais FROM Paciente GROUP BY idPais

-- Logica booleana
SELECT * FROM Paciente WHERE idPais = 'ARG' AND domicilio = 'Avenida 20'

SELECT * FROM Paciente WHERE idPais = 'ARG' OR apellido = 'Ramirez' OR nombre = 'Juan'

-- Seleccionar ciertos valores
SELECT * FROM Paciente WHERE idPais IN('COL', 'ARG')

SELECT * FROM Paciente WHERE nombre LIKE 'J%' -- Se puede colocar al inicio
SELECT * FROM Paciente WHERE nombre NOT LIKE 'J%'

SELECT * FROM TurnoEstado WHERE idTurno BETWEEN 1 AND 4
SELECT * FROM Paciente WHERE fNacimiento BETWEEN '20000101' AND '20201230'

-- Obtener el valor maximo o minimo, en los varchar usa el orden alfabetico
SELECT MAX(fNacimiento) FROM Paciente
SELECT MIN(monto) FROM Pago

SELECT SUM(monto + 20) as montoTotal FROM Pago

-- promedio
SELECT AVG(monto) as montoPromedio FROM pago

-- cantidad de filas que hay en una tabla
SELECT COUNT(*) FROM paciente
SELECT COUNT(idPaciente) FROM paciente WHERE idPais = 'ARG'

-- HAVING filtra los registros con la condicion, lo hace sobre un conjunto de registros
-- usar siempre con GROUP BY
-- En esta consulta nos muestra los estados que tenga 1 registro
SELECT estado FROM Turno GROUP BY estado HAVING COUNT(estado) = 1

-- Subconsultas
SELECT nombre,apellido,(SELECT pais FROM Pais ps WHERE ps.idPais = pa.idPais) nombrePais FROM Paciente pa WHERE idPaciente = 1
```
