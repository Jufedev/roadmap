```SQL

-- Actualizar registros, sin la clausula WHERE actualiza masivamente la tabla
UPDATE Paciente SET observacion = 'Sin observacion'
UPDATE Paciente SET observacion = 'Sin observacion', correo = 'email@mail.com' WHERE idPaciente = 1

```
