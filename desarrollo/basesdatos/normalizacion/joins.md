```SQL
-- Inner join (union de conjuntos)
-- Devuelve solo los valores que coinciden en el ON
SELECT * FROM Paciente P
INNER JOIN TurnoPaciente T
ON T.idPaciente = P.idPaciente -- La tabla inmediata debe estar primero para optimizar consulta

-- LEFT JOIN y RIGHT JOIN (resta de conjuntos)
-- Devuelve todos los registros, los que no coincide con el ON los deja en NULL
SELECT * FROM Paciente P
LEFT JOIN TurnoPaciente T
ON P.idPaciente = T.idPaciente


-- Union de tablas
SELECT * FROM Turno WHERE estado = 1
UNION -- Elimina duplicaods
SELECT * FROM Turno WHERE estado = 2

SELECT idPaciente FROM Paciente WHERE idPais = 'ARG'
UNION ALL -- NO elimina duplicado
SELECT idPaciente FROM TurnoPaciente
```
